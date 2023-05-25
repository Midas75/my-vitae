# MyVitae
简历和生成简历的项目，可以看看[在线网页](http://sun-zhongjie-0426.gitee.io/my-vitae)
- 目前版本:**0.0.2**
## 功能简述
基于对Markdown文件的一些约定，绘制成html文件，这样就可以在浏览器上ctrl+P直接打印为pdf了。别忘了打印时勾选“更多设置-选项-显示图形”

**是纯度极高的手绘js**

## 功能
- 基于约定格式将markdown渲染为html
- 基于localStorage的文档保存（ctrl+s）
- 基于浏览器打印功能的pdf生成（ctrl+p）
  注意，如果想要很好的打印体验，一定要选择这个选项！（其他pdf打印机也可以，但是它们会存在链接不能跳转、文字不能选中、文字选中错乱等种种问题）
  ![printTip](pic/printTip.png)
- 双向滚动
- markdown在线编辑与实时渲染

## TODO
- 排序筛选优先级功能
- 更多模块支持
- 更多自选风格
- css迁移
- 更多attribute支持
- 照片上传和显示