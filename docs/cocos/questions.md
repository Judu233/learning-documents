<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-06-08 17:55:54
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-06-25 16:29:16
 * @LastEditors: judu233
-->
#  cocos 问题记录
## Q：CocosCreator编辑器里的shader效果和浏览器/模拟器预览的效果不一样
A : 图片的package选项没有关掉

## Q：问题
A : 答案

#  andriod 打包问题记录
## Q:  打包提示 NDK_PROJECT_PATH=null 错误 
> 报错信息: Error while executing process /.../ndk-build with arguments {NDK_PROJECT_PATH=null APP_BUILD_SCRIPT=/../Android.mk NDK_APPLICATION_MK=/../Application.mk APP_ABI=arm64-v8a NDK_ALL_ABIS=arm64-v8a NDK_DEBUG=1 APP_PLATFORM=android-23 NDK_OUT=/.../obj NDK_LIBS_OUT=/.../lib APP_SHORT_COMMANDS=false LOCAL_SHORT_COMMANDS=false -B -n
- A：打包输出的build文件路径太深，切换到磁盘跟目录即可，参考下面
  - [Android Studio Gradle工程路径太长](https://www.jianshu.com/p/91e4512438d2)
  - [ndk-project-path报错](https://forum.cocos.org/t/topic/131214) 
  - [执行错误](https://stackoverflow.com/questions/50379066/error-while-executing-process-ndk-bundle-ndk-build-with-arguments-ndk-proje)


## Q:  Dependent features configured but no package ID was set.
> Execution failed for task ':wang_quan:processDebugResources'.
> A failure occurred while executing com.android.build.gradle.internal.res.LinkApplicationAndroidResourcesTask$TaskAction
   > AAPT2 aapt2-4.2.2-7147631-windows Daemon #0: Unexpected error during link, attempting to stop daemon.
     This should not happen under normal circumstances, please file an issue if it does.
- A: 依赖的问题，点击了 add dependency on moudule proj.android-studio.instantapp ，删除依赖中多加的那一行


## Q:  Manifest merger failed with multiple errors, see logs
接入sdk后合并Manifest文件错误
专门针对Manifest来进行编译可查看错误
gradlew processDebugManifest --stacktrace
解决： 可以得知编译报错的原因以及三种解决方案
当前项目是提高minsdk
https://blog.csdn.net/hylxnq/article/details/115345016


## Q: A failure occurred while executing com.android.build.gradle.internal.tasks.CheckDuplicatesRunnable
Duplicate class com.tapsdk.bootstrap.Callback found in modules TapBootstrap_3.9.0-runtime 
...
重复导入库文件，由于cocos的工程只要把文件放到app/libs下，不需要手动再次导入
其他参考https://blog.csdn.net/clcwcxfwf/article/details/97788818
https://blog.csdn.net/u012124438/article/details/110282309
https://cloud.tencent.com/developer/ask/sof/698172
https://developer.android.com/studio/build/dependencies#resolution_errors


## Q: java.lang.NoClassDefFoundError: Failed resolution of: Lcn/leancloud/LeanCloud;
缺少库文件
https://blog.csdn.net/jamesjxin/article/details/46606307

## Q: ios 打包报错找不到 library not loaded: /system/library/frameworks/adservices.framework/adservices
解决：更新xcode版本后库的优先级提⾼了，设置⼀下如图需要库的优先级

## Q: cocoapods 配置错误
使⽤ cocoapods 接⼊，cocos项⽬需要引⽤ cocoapods 的⽂件
```
diff: /Podfile.lock: No such file or directory
diff: /Manifest.lock: No such file or directory
error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or
update your CocoaPods installation.
```

## Q: ios 报错xx duplicate symbols for architecture armv7
⼀般是类冲突，很可能是cocoapods 有这个类库，主项⽬也引⼊了同样的类库，检查报错内容，删除项⽬中重复的库⽂件。

## Q: ios Command CodeSign failed with a nonzero exit code
打开 build setting 修改

## Q：安卓打包报错65535问题
很可能就是Dex⽂件最⼤⽅法数超过了65535，⼀般这是使⽤集成SDK 时容易发⽣的错误。合并Dex过多时报错。
解决⽅法就是使⽤ Multi-Dex。
MultiDexApplication 需要⼀个 Application 作为载体，cocos 默认构建没有
Application 的，使⽤ MultiDex 需要⾃⼰创建⼀个 Application 类继承⾃
```
android.support.multidex.MultiDexApplication。
android {
 defaultConfig {
 ...
 minSdkVersion 18
 targetSdkVersion 28
 multiDexEnabled true //加⼊这个配置使⽤ Multi-Dex
 }
 ...
}
 ...
dependencies {
 //androidx 使⽤ multidex
 implementation 'androidx.multidex:multidex:2.0.0'
 //没有使⽤ androidx, 可以使⽤ 'com.android.support:multidex:1.0.3' 代替
}
compile 'com.android.support:multidex:1.0.1'
MultiDex.install(this);
multiDexEnabled true
```

## Q: 安卓打包报错 No such file or directory / package … does not exist
⽂件或者库找不到，检查以下
  - 引⽤SDK的路径名称拼写是否正确
  - ⽂件是否存在⽬录
  - ⽂件夹是否有可读权限。

## Q： Android Support 冲突问题
AndroidX 和 anroid.support 库冲突的解决⽅案
⾸先在 gradle.properties ⽂件中添加
```
// 表示使⽤ androidx
android.useAndroidX=true
// 表示将第三⽅库迁移到 androidx
android.enableJetifier=true
```
然后菜单栏 Refactor -> Migrate to Androidx 就可以了，Android Studio 会⾃动把
你项⽬中的依赖切换到 Androidx，并且修改项⽬中使⽤到依赖库的路径。

## Q: 安卓打包失败 :transformClassesWithDexForDebug FAILED
JVM虚拟机的内存空间太⼩、重新 Clean Build 项⽬，重启Android Studio 再次打包即可

## Q: 安卓打包失败提示错误: 类重复
往往是SDK中包含了⼀个版本的库，其他SDK或者⾃⼰导⼊项⽬的jar\arr ⽂件发⽣
了冲突，解决⽅法有两种:
检查项⽬是否包含2个相同的库
要么引⼊的时候剔除掉：(适合冲突较少的情况)
```
implementation('com.aliyun.dpa:oss-android-sdk:+') {
  exclude(group: "com.squareup.okhttp3")
}
//要么强制指定SDK的版本:(适合冲突较多的情况)
configurations.all {
  resolutionStrategy.force "com.squareup.okhttp3:3.12.3"
}
```

## Q: Invoke-customs are only supported starting with android 0 --min-api 26
解决办法：
```
compileOptions {
  sourceCompatibility JavaVersion.current()
  targetCompatibility JavaVersion.current()
}
```


## Q: 安卓打包错误: okhttp3类库重复
解决办法：
```
configurations {
  all*.exclude group: 'com.squareup.okhttp3'
}
```

## Q: 打包 aab 包失败
key0 是默认⽣成的key，Export encrypted key for enrolling published apps in 
Google Play App Signing 选项不要开启，不然打不出包


## Q：大数据存储卡顿
安卓使⽤ cc.sys.localStorage 进⾏存档和读档会掉帧，cc.sys.localStorage是⽤sqlite数据库存储的key-value,可能会在读写时卡顿。如果
发⽣卡顿现象，尝试使⽤jsb读写⽂件代替 localStorage
```
jsb.fileUtils.writeStringToFile(string, filename)
jsb.fileUtils.getStringFromFile(filename)
```