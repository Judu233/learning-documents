# 在 TextMeshPro 中使用中文
## 1. TextMeshPro 简介
> [TextMeshPro 包官方文档](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/index.html) 最新版，请注意版本
http://digitalnativestudios.com/textmeshpro/docs/

## 2. 中文显示问题
Unity 的 TextMashPro 自带的几款字体都是英文字体，没有中文。

在 inspector 中设置中文，会显示成方块，无法正常使用

![](../../imgs/unity_cnfonterror.png)

## 3. 问题解决方案
### 3.1 动态加载字体
- 步骤 1 ：  
  下载字体，最好是开源字体，未来在项目中可以商用
  [霞鹜自制开源字体下载](https://lxgw.github.io/2021/01/15/Lxgw-Opensource-Chinese-Fonts/)
- 步骤 2 ：  
  在 Unity project 窗口中，在 Assets 下新建 Fonts 文件夹，导入下载好的字体
- 步骤 3 ：
  创建动态字体：选择下载好的字体，右键-Create-TextMeshPro-Font Asset   
  创建好的动态字体，会根据你使用过的文字，自动存储到 Atlas 中。

### 3.2 静态字体
静态字体效率会比动态的高，适合文字较多时使用

- 步骤 1 ：  
  下载一个 “常用汉字” 的 txt 文件，必须用 Unicode 编码保存，比如 utf-8，将其导入 Unity
- 步骤 2 ：  
  在 Unity 菜单中，选择 Window -- TextMeshPro -- Font Asset Creator ，打开窗口
  - Source Font Flie，选择添加好的中文字体文件
  - Character Set：选中 Characters from File 从文件获取文字
  - Character File : 选中 txt 文件
  - Generate Font Atlas ：点击按钮，生成静态字体图集（比较慢的一个过程）
  - Save：保存生成的字体 asset

![](../../imgs/unity_staticFont.png)

在我的云盘中，分享了 16159 中文和符号 txt ,以及已经转换好的静态字体文件

下载链接：https://pan.xunlei.com/s/VMovVwhBhUQOnMxDnufbrVqRA1 提取码：3986

### 3.3 字体后备 Font Fallback

某些动态字体，在使用中文标点符号和一些特殊文字符号的时候，依旧会出现方块，这个时候可以使用 TextMeshPro 的 Font Fallback。Font Fallback 可以从另一个 FontAsset 中获取不包含在当前 FontAsset 中的字符。

可以用 Font Fallback 来外挂一些低频使用、或者特殊的符号、字体。

![](../../imgs/fontfallback.jpg)

<br><br>

<hr>
<br>

> 参考资料：
>
> - [https://zhuanlan.zhihu.com/p/375889482](https://zhuanlan.zhihu.com/p/375889482)
> - [https://blog.csdn.net/weixin_42352178/article/details/108936994](https://blog.csdn.net/weixin_42352178/article/details/108936994)

<br>
<hr>
<br>


# TextMestPro 翻页

## 1. 逻辑

当显示区域一次放不下所有文字时，就需要翻页了。

我们可以通过在对话时，按一个按键，比如空格，激活翻页功能

- 在 update 方法中，通过 if 判断是否按下空格，最好使用 GetKeyUp，避免按一次键，事件多次触发；
- 设定一个变量，代表当前页码，还要知道总页数
- 每次按键，只要没到最后一页，都是当前页数加一；是最后一页，让其循环到第一页

## 2. 设置

![](../../imgs/unity_tmp_paging.png)

TextMeshPro 组件的 Overflow 属性，需要设置为 Page，后面数字是当前显示的页数(当前显示的是第几页的内容)

## 3. 代码

```C#
public class NonPlayerCharacter : MonoBehaviour
{
    public float displayTime = 4.0f;
    public GameObject dialogBox;
    float timerDisplay;

    public GameObject dlgTxtProGameObject;
    TextMeshProUGUI _tmTxtBox;
    int _currentPage = 1;
    int _totalpages;
    // Start is called before the first frame update
    void Start()
    {
        dialogBox.SetActive(false);
        timerDisplay = -1.0f;
        _tmTxtBox = dlgTxtProGameObject.GetComponent<TextMeshProUGUI>();

    }

    // Update is called once per frame
    void Update()
    {
        _totalpages = _tmTxtBox.textInfo.pageCount;
        if (timerDisplay >= 0)
        {
            if (Input.GetKeyUp(KeyCode.Space))
            {

                if (_currentPage < _totalpages)
                {
                    _currentPage++;
                }
                else {
                    _currentPage = 1;
                }
                _tmTxtBox.pageToDisplay = _currentPage;

                Debug.Log($"space 被按下....... _totalPages= {_totalpages},  pageToDisplay = { _tmTxtBox.pageToDisplay}; _currentPage = {_currentPage}");
                Debug.Log($"_tmTxtBox = {_tmTxtBox.textInfo}");
            }
            timerDisplay -= Time.deltaTime;
        }
        else
        {
            dialogBox.SetActive(false);
        }
     }

    public void DisplayDialog() {

        timerDisplay = displayTime;
        dialogBox.SetActive (true);
        Debug.Log($"dialogBox :{dialogBox} , timerDisplay = {timerDisplay}");
    }

}
```
