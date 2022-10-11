<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-05-27 13:43:07
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-05-27 13:43:13
 * @LastEditors: judu233
-->
https://www.youtube.com/watch?v=CrG8GkeFCog

[https://www.jianshu.com/p/2c102b806c75](https://www.jianshu.com/p/2c102b806c75)


链接: https://pan.baidu.com/s/15OP-AROSP3dLIN6XHBIrhw 提取码: mtda



<!--
 * @features: 功能
 * @description: 说明
 * @Date: 2022-05-22 13:30:29
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2022-05-27 13:43:48
 * @LastEditors: judu233
-->
# VR 简介

## 1. VR 开发

现代 VR 设备，进行开发时需要3个重要元素：软件引擎（通常是游戏引擎，如 Unreal 、 unity ），VR 库（如 Open XR），以及头显设备（如 Oculus 等）

# PicoVR 项目搭建

## 0. unity 组件

一般来说，VR 一体机开发，只需要安装 Android 组件即可，如下：

![](../../imgs/unityvr.png)

## 1. Pico 资源

在 Pico 官方网站上，进入开发者页面：[https://devcenter.pico-interactive.com/](https://devcenter.pico-interactive.com/)

* 可以在其中下载 SDK ，
* 也可以注册并称为开发者，
* 登录开发者管理平台，创建应用，并发布到 Pico 市场。

### 1.1 下载 SDK

SDK 下载页面 [https://developer.pico-interactive.com/sdk](https://developer.pico-interactive.com/sdk) ，有适合不同游戏引擎的各版本 SDK 以及一些开发工具的下载链接

![](../../imgs/PicoUnitySDK.png)

此页面中，还包含 SDK 文档链接

## 2. 新建项目并导入 SDK

* 新建普通3D项目即可，URP项目、VR项目也可以；
* 用 Package Manager 导入解压的 SDK 包
    ![](../../imgs/picosdk1.png)

    ![](../../imgs/picosdk2.png)

## 3. 项目设置

* 进入Project Settings页面， 在XR Plug-in Management页面选择PicoXR，在PC和Android分页上都要选择，一个用来开发，一个用来发布（测试）

![](../../imgs/picosdk3.png)

![](../../imgs/unityvr1.png)

项目设置中，有一些要注意的点：

![](../../imgs/vr_setting_01.png)


![](../../imgs/vr_setting_02.png)

如果想要项目同时支持 Oculus，只需要在上面两个界面中，勾选 Oculus 复选框即可

## 4. 更新包

更新 XR Interaction Toolkit，并安装 sample

![](../../imgs/update_xr_interaction_toolkit.png)

> 注意：
> * 如果不更新 XR Interaction Toolkit ，Pico UnityXR SDK 2.0.4 配套的 XR  Interaction Toolkit 版本仅为 0.94，太低了，很多功能比完善，而且还没有示例代码，许多东西要自己写，对初学者太不友好。关键是 pico sdk 的开发文档太TMD的差劲了，没有VR开发经验的用起来是两眼一抹黑

## 5. 输入相关设置

安装完 sample 后，可以在 Assets/Sample/版本号/XR Interaction Toolkit /Starter Assets/ 中找到已经设置好的输入设置文件（基于新版输入系统 inputsystem）

![](../../imgs/xr_interaction_toolkit_samples.png)

点选每一个输入预设置文件，点击 inspector 窗口中的 Add to ActionBased操作名称Provider Default ，即将当前输入设置指定为当前对应操作的默认输入设置。

五个都要依次点击：持续转向、持续移动、突然转向、左控制器、右控制器

![](../../imgs/xr_interaction_toolkit_samples1.png)

最后，要在 project settings/ Preset Manager 中，设置那个左右控制器的筛选名称：

![](../../imgs/vr_preset_manager.png)

## 6. 添加基本操作对象

* 步骤1：添加一个平面，命名为 Ground，作为以后项目中的地平面
* 步骤2：添加一个 XR_Origin(Action Based)对象到 Hierarchy 中  
    ![](../../imgs/XR_Origin.png)

这将同时添加一个 XR Interaction Manager 到 Hierarchy 中， XR Origin 的子对象如图：  
  ![](../../imgs/XR_Origin1.png)

这样设置后，已经可以控制左右手柄（left & right controller）和头显（HMD）的移动了

## 7. 运行、测试

先进行编译设置： 

![](../../imgs/pico_build_settings.png)

### 7.1 编译运行 build & run

首先必须进行Pico 眼镜和电脑的有线连接，然后：

![](../../imgs/picosdk_buildandrun.png)

点击菜单栏 PXR_SDK > Build Tool > Build And Run 就可以进行编译并运行到 Pico 设备上。

缺点：时间较长，我的中档配置的 PC ,跑上面这个最基础的 VR 空项目，也需要5、6分钟

### 7.2 使用 Pico Preview Tool

为了弥补上面那种方式浪费时间的缺点，pico 退出了 Pico Preview Tool ，这个工具可以让 pc 和 HMD 互联，类似于 Oculus 的 linked，直接通过 Unity 中的运行按钮，就可以将测试应用直接发送并运行到 HMD 中，省去 Build 的时间。

官方下载地址：[Pico Preview Tool](https://developer.pico-interactive.com/sdk/index?id=17&device_id=1&platform_id=1)

![](../../imgs/pico_preview_tool.png)

PC 端运行PC的（现阶段只有windows 版的），HDM 上安装运行 Android 的

![](../../imgs/pico_preview_tool1.png)

![](../../imgs/pico_preview_tool1.jpg)

这个工具在我的机器上并不稳定，无法使用有线连接，但可以用无线连接

一旦连上，在 Unity 中，直接点击运行按钮，就可以在 Pico 眼镜上看结果了

当前项目只有两个控制器的红色射线，以及头显的移动控制。

> 参考资料：
>
> [Pico 官方文档](https://developer.pico-interactive.com/document/doc)



# 加入基础移动功能

## 1. 添加 Locomotion System （Action Based）

加入运动系统  Locomotion System ，而且必须是 Action Based，不带 Action Based 标注的，是原来旧的输入系统（input system），而我们当前项目所有的操作都是基于新的输入系统，所以必须注意这点。

> 操作：  
> * 拖拽  Locomotion System （Action Based） 到 Hierarchy 中，生成运动系统对象
> * 在 Inspector 中，为 Locomotion System 选择 XR Origin，将上节中创建的 XR Origin 对象拖拽过来
    ![](../../imgs/LocomotionSystem.png)

## 2. 将地面 Groud 设置为可传送

在 VR 移动系统中，通常有两种方式，一种是传送（瞬移），另一种是普通移动。

增加传送 Teleportation 的原因在于，一般在 VR 中的普通移动，会让人感到眩晕。

如果要增加传送移动，必须先为移动路径的表面增加 “可传送区域” 脚本，在本项目中，就直接为上节创建的地面 Ground 对象，增加可传送功能。

> 操作：
> * 选中 Ground 