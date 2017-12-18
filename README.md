## NSIP-RN 组件库

### 描述
- NSIP-RN 组件库 Expo 快速启动项目，目前只支持 ui 组件

### 使用方法
1. 下载项目
2. 安装 exp： `yarn add exp -g`，若不使用 exp 可以下载 [xde](https://expo.io/tools)
3. 安装依赖： `yarn install`
4. 打开模拟器： `ios simulator` or `android gemynotion`
5. 启动项目： `exp start` 或者使用 xde 打开项目
6. 初次使用需在模拟器内安装 expo client app
	1. 使用 exp：需自行下载并进行安装 app，下载地址和安装步骤见[说明](https://docs.expo.io/versions/latest/introduction/installation.html)
	2. 使用 xde：无需自行安装，点击 xde 面板里的 `Open on iOS simulator` 会自动在模拟器内安装 expo client app
7. 运行项目：
	1. 使用 exp：打开 expo client app 后输入 url 以打开项目
	2. 使用 xde：点击 `Open on iOS simulator` 打开
8. 真机调试：
	1. app store 搜索 expo 下载并安装
	2. 打开 app 输入 url 运行项目即可实时调试
9. 发布线上：
	1. 使用 exp：`exp publish`
	2. 使用 xde：点击面板上的 `publish` 按钮
10. 发布到 app store:

### 发布到 app store
1. xde 内未集成，需安装 exp : `npm install -g exp`
2. 配置 app.json
	
	```json
	{  
	  "expo": {
	    "name": "Your App Name",
	    "icon": "./path/to/your/app-icon.png",
	    "version": "1.0.0",
	    "slug": "your-app-slug",
	    "sdkVersion": "17.0.0",
	    "ios": {
	      "bundleIdentifier": "com.yourcompany.yourappname"
	    },
	    "android": {
	      "package": "com.yourcompany.yourappname"
	    }
	  }
	}
	```
3. `exp start` 启动应用
4. `exp build:android` or `exp build:ios`, 会要求输入 appleId, password, apple Team Id 等信息
5. 使用 `exp build:status` 查看进度，完成后会生成url, 通过该url可下载 .apk 或是 .ipa 文件
6. 测试生成的 app
7. 提交 app store



