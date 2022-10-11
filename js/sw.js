/*
 * @features: 缓存文档下载的脚本
 * @description: 说明
 * @Date: 2022-05-04 15:52:58
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-05-28 12:09:58
 * @LastEditors: judu233
 */
const RUNTIME = 'docsify'
const HOSTNAME_WHITELIST = [
  self.location.hostname,
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net'
]

//Util函数用于破解被拦截请求的URL
const getFixedUrl = (req) => {
  var now = Date.now()
  var url = new URL(req.url)

  //1。固定http URL
  //只需保持与位置同步。协议
  //fetch（httpURL）属于活动的混合内容。
  //尚不支持获取（httpRequest）。
  url.protocol = self.location.protocol

  //2。添加缓存破坏查询。
  //使用缓存控制的Github页面：最大限时=600
  //可变内容的最长使用期限很容易出错，错误的软件寿命甚至可以延长。
  //在Fetch API的缓存模式到达之前，我们必须解决使用查询字符串破坏缓存的问题。
  //缓存控制错误：https://bugs.chromium.org/p/chromium/issues/detail?id=453190
  if (url.hostname === self.location.hostname) {
    url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
  }
  return url.href
}

/**
 *  @Lifecycle Activate
 * 当旧的不使用时，新的激活。
 *  waitUntil(): activating ====> activated
 */
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

/**
 *  @Functional Fetch
 *正在此处拦截所有网络请求。
 *无效响应（承诺<响应>r）
 */
self.addEventListener('fetch', event => {
  // Skip some of cross-origin requests, like those for Google Analytics.
  if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
    //重新验证时过时
    //类似于HTTP的stale while revalidate：https://www.mnot.net/blog/2007/12/12/stale
    //从Jake's升级到Surma's：https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
    const cached = caches.match(event.request)
    const fixedUrl = getFixedUrl(event.request)
    const fetched = fetch(fixedUrl, {
      cache: 'no-store'
    })
    const fetchedCopy = fetched.then(resp => resp.clone())

    //使用我们首先得到的任何内容调用respondWith（）。
    //如果提取失败（例如断开连接），请等待缓存。
    //如果缓存中没有任何内容，请等待提取。
    //如果两者都不产生响应，则返回脱机页面。
    event.respondWith(
      Promise.race([fetched.catch(_ => cached), cached])
      .then(resp => resp || fetched)
      .catch(_ => {
        /* eat any errors */
      })
    )

    //使用我们获取的版本更新缓存（仅适用于ok状态）
    event.waitUntil(
      Promise.all([fetchedCopy, caches.open(RUNTIME)])
      .then(([response, cache]) => response.ok && cache.put(event.request, response))
      .catch(_ => {
        /* eat any errors */
      })
    )
  }
})