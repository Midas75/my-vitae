1. 简历基于markdown语法为主
2. 简历分为多个模块，模块之间以**一级标题**(#)或**二级标题**(#)分割，建议使用二级标题
3. 目前支持的模块名包括：**个人信息**、**教育经历**、**获奖经历**、**个人技能**、**工作经历**、**项目经历**
4. 别名：模块可以用markdown的链接语法定义为别名，从而自定义模块的**标题名**，即：`[标题名](模块名)`
5. 最常用的语法是在每个模块中，以列表的形式维护多个属性，且每个属性采用key:value（或key）的形式表述。冒号是中文或英文都是可以接受的
6. 在部分模块中（比如**获奖经历**、**项目经历**），可以以子标题（三级标题 ###）进一步表述多个子元素
7. 模块会顺序渲染