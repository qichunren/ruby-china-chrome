[Ruby-China.org](http://ruby-china.org/) 的Chrome浏览器插件

![plugin preview](https://github.com/qichunren/ruby-china-chrome/raw/master/plugin_preview.png)


## 安装 (Install)

[下载](https://github.com/downloads/qichunren/ruby-china-chrome/ruby-china-chrome.crx), 直接点击文件来安装此插件.

## 本地开发部署 (Development and deploy)

在Google Chrome浏览器的"窗口" -> "扩展程序" 的页面，选中"开发人员模式", 点击"载入正在开发的扩展程序...", 然后选中项目目录，即可在本地安装好了此插件.

每次修改了代码后, 在"扩展程序"的管理页面中, 点击扩展程序的"重新载入"链接更新所作的修改。

## TODO

+ 集成个人帐号
+ 个人未读消息提醒 (已经实现)
+ 插件配置，配置什么？

## New version 2.0
因为随着chrome的升级，插件要升到2才可以使用，但是这次版本号升级里面，在 extension 的安全策略方面做了较大改动.
改变最大的是 Content Security Policy (CSP) 。这个改变包括，不再允许执行 inline script；不再允许使用 eval() 或者 new Function() 来进行字符串处理。
因此原本的jquery的templates已经不能正常使用，所以就换成了用Handlebars的预编译的方法来处理。（详见[Javascript Templates and Chrome's Content Security Policy](http://matthewrobertson.org/blog/2012/07/10/javascript-templates-and-chromes-content-security-policy/)）

另外就是，又加入了1、2分钟的option，以及图片的更新
