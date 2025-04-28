## [孙中杰](个人信息)
- 性别：男
<!-- - 年龄：23岁 -->
- 生日：2000-04-26
- 电话：15653564910
- 邮箱：1326840837@qq.com
- 经验：2年
- 微信：sunzhongjie0426
- 住址：北京市海淀区
- 期望岗位：Java开发/全栈开发
<!-- - 头像：![avatar](./avatar.png) -->
## 教育经历
### 北京航空航天大学
- 时间：2025.09~2029.06
- 学院：软件学院
- 专业：软件工程
- 学历：博士生
### 北京航空航天大学
- 时间：2022.09~2025.06
- 学院：软件学院
- 专业：软件工程（非全日制）
- 学历：研究生
### 北京交通大学
- 时间：2018.09~2022.06
- 学院：计算机学院
- 专业：物联网工程
- 学历：本科
- 绩点：5%~20%
## 获奖经历
### [第四届中国工业互联网大赛北京赛站领军组一等奖](https://mp.weixin.qq.com/s/LvKN5534wlM-NBQsEUzT5A)
- 时间：2022.11
### 校内算法设计竞赛二等奖
- 时间：2021.08
### 山东省信息技术奥赛省二等奖
- 时间：2017.05
## [论文发表](获奖经历)
### [IoT OS Platform: Software Infrastructure for Next-Gen Industrial IoT](https://www.mdpi.com/2076-3417/14/13/5370)
- 时间：2024.06
- 内容：Applied Sciences（IF2.5，JCI SCI Q2），三作（约占全文80%工作量）
### [基于物联网操作系统平台的无人机战术仿真系统](https://www.jc2.org.cn/CN/10.3969/j.issn.2096-0204.2024.03.0347)
- 时间：2024.03
- 内容：指挥与控制学报（IF 2.56，北大核心），三作（独立撰写）
## 个人技能
- 熟悉基于linux的Java/Python/C/C++开发的相关技术栈
- 有基于Docker/Kubernetes的分布式集群设计、部署、开发经验，熟悉Dockerfile与Shell脚本开发
- 熟悉MQTT、OPC UA、Modbus等物联网通信协议，熟悉HTTP、TCP、UDP、Websocket等常见网络通信协议
- 了解js/node、lua、前端、Unity开发、UE开发
- 熟悉SpringCloud开发，熟悉相关技术栈：Nginx、Redis、Mybatis-Plus、Nacos、Feign、ELK、MinIO
- 具备大量的方案、技术文档、研究报告、论文等内容的撰写经验
- 重视数据结构与算法在开发中的应用，关注实际业务的时空复杂度
## 工作经历
### 慧之安信息技术股份有限公司
- 部门：产品与研发中心创新部
- 职位：研发工程师
- 时间：2022.05~2025.01
- 内容：
    - 项目开发、环境部署、外出对接、方案制定、项目进度把控
    - 参与多个项目/课题/白皮书的标书、PPT撰写，与合作方/客户对接确认需求并制定方案
    - 中英文论文撰写（物联网、无人机仿真、系统设计方向，两篇三作论文见刊）
### 紫龙游戏
- 部门：北京龙之国物语研发部
- 职位：游戏开发实习生
- 时间：2021.12~2022.03
- 实习
- 内容：
    - 学习计算机图形学，实现3D展示Demo
    - 学习Unity+C#+lua开发模式，熟悉Unity，熟悉并手动设计实现支持热重载的lua面向对象编程形式

## 项目经历
### IMAST——智能医学分析和统计工具集
- 职责：项目负责人
- 时间：2024.12~至今
- 技术栈：Electron、Vue3、Python、R
- 内容：
  - 基于开源项目jamovi进行开发，重新设计UI并使用Element-Plus进行实现
  - 基于rcedit修改Electron icon等相关信息，通过PowerShell调用winapi SHChangeNotify解决图标不实时更新问题
  - 开发新的R语言模块，在软件中实现YY/T 1709所需的分析方法
### 某UE模训项目
- 职责：项目负责人
- 时间：2024.09~2024.11
- 技术栈：UE5、蓝图、C++、C
- 内容：
  - 将在场景中以第一人称控制无人机的原有系统基于UE联网框架改造为多人模式
  - 基于合作方飞控库在本地完成飞控解算，修复原有飞控库增稳模式低帧数下颠簸问题，参照AirSim源代码修复该库力学碰撞行为错误问题
  - 基于UE物理系统和力学方法构建场景中直升机AI，基于ChaosVehicle实现车辆AI，基于蓝图实现士兵AI
  - 在Windows下构建后台进程管理模块，接入基于TeamSpeakSDK的语音沟通，基于NPS的外网穿透等外部进程
  - 结合UE内http请求功能复杂、UMG交互功能弱等问题，构建基于MongooseWebServer的http服务器，支持静态文件访问与自定义反代，配合UE中WebBrowser使用

### 面向无人机集群的高性能综合仿真技术研究与实现
- 职责：项目负责人
- 时间：2024.4~2025.01
- 技术栈：Unity、AirSim、Python、C、C++、Shader、NS-3、D3D11、CUDA
- 内容：
  - 在Unity中引入AirSim完成无人机仿真，结合NS-3实现网络仿真框架，构建Python API完成分布式控制，选用dotnetty进行多节点间TCP传输，接入真实无人机完成仿真测试
  - [改进AirSim在多机仿真时的卡顿问题](https://github.com/Midas75/AirSim)，构建多种替代方案定位问题所在，选取最优的单线程忙轮询+future方式代替，将单机仿真数量从20提升至210
  - 编写Shader，实现[利用Shader进行的线性深度图计算](https://github.com/Midas75/distance-effect-shader)
  - 实现SAC算法，设计奖励函数与采样方法，基于深度信息在[Unity城市场景中实现无人机的自主避障](https://gitee.com/sun-zhongjie-0426/sac-airsim-obstacle-avoid)
  - 实现[基于点云数据的八叉树+A*的避障/寻路算法](https://github.com/Midas75/AirSim-OCTree-PathFinding)，利用cProfile分析性能瓶颈并通过邻居查询、小规模更新等方法提升性能
  - 接入YOLO完成实时图像推理，为衡量识别效果，基于顶点在Unity中实现[计算目标检测矩形轮廓](https://github.com/Midas75/unity-rect-outline)
  - 在Unity中接入[基于CUDA的动态链接库](https://github.com/Midas75/unity-native-rendering-plugin-d3d11-cuda)，完全在显卡上将图像编码为JPEG，相比经典解决方案帧数最多提升27倍。
  - 修改GPUJPEG代码，在编码过程完成Y轴反转，同时利用查表法完成SRGB数据的Gamma校正以规避float计算的性能损耗
  - 基于JPEG帧特征，开发基于C的工具以实现[JPEG快速切分](https://github.com/Midas75/jpeg-spliter)，业务场景下性能为libjpeg-turbo的52倍
  <!-- - Unity中实现日志收集，小地图等组件，日志收集组件利用preferredHeight+数列求和，Scroll滑动时基于二分查找动态渲染目标日志项 -->
  <!-- - 基于RayCast完成激光雷达仿真，结合图像数据、目标识别与姿态获取功能，完成PCD点云生成、识别物体世界坐标计算等功能 -->
  <!-- - 设计并实现基于asyncio.Queue\[typing.Coroutine\]的单线程无人机逻辑处理框架，利于手动控制无人机复杂业务逻辑 -->
  <!-- - 基于NS3构建网络仿真框架，上层基于Python完成多种通信故障的仿真，基于SQLite3完成通信数据实时记录，并构建简易ORM框架，支持类到表自动映射、建表语句、插入语句自动生成 -->
### MyVitae：基于Markdown的简历生成工具
- 职责：前端开发
- 时间：2023.5~至今
- 技术栈：JavaScript、HTML、CSS、Markdown
- 地址：https://github.com/Midas75/my-vitae
- 内容：
    - 对markdown文档约定部分格式，通过正则表达式与marked.js库提供的Lexer方法对文档进行解析，渲染为具有一定格式的html文档，利用浏览器的打印功能生成pdf
    - 包括个人信息、教育经历、个人技能、工作经历、项目经历等模块
    - 在编辑页面实现锁定同步滚动、本地存储、打印、展示/隐藏链接、模板与风格切换、彩色/灰度设置等功能
    - 改善了marked.js中链接跳转体验不佳的问题，基于Lexer实现从渲染结果向原始文本的跳转（双击div时选中原始文本）
    - 基于css实现可切换的渲染风格与多套简历模板
    - 基于svg+emoji绘制矢量ui，封装为ui加载方法；仿照ElementUI封装了message组件（css-transition），并应用于编辑页面
    - **本简历由该项目生成**
### 应用于某项目的拉流-取帧-推理框架
- 职责：设计、后端开发
- 时间：2023.11~2023.11
- 技术栈：Python、FastAPI、Redis、ffmpeg
- 内容：
  - 单机（8张RTX3060、20核40线程CPU）上对200路rtsp视频流拉取，每路视频流允许开启最多10个算法，允许算法动态添加与装卸载
  - 基于Python构建项目，利用importlib实现对符合格式（继承抽象类）的算法进行动态加载，将拉流进程与推理进程拆分以进行多对多扩展，利用Redis实现进程间通信
  - 利用FastAPI封装，对外开放接口并自动生成文档
  - 利用ffmpeg子进程进行取帧，在python侧通过管道连接并读取帧信息，将帧数据编码为jpeg并推送至Redis，在jpeg bytes的EOI后附加json元数据，在取帧频率低于0.5fps时仅提取I帧以提升性能
  - 支持各类基于pytorch的框架，单进程加载多个模型，按需推理，降低框架显存占用
  - 利用Redis作为基于内存的消息队列，通过lua实现入队出队的原子性、实现帧数据自动过期与队列长度上限控制
  - 进行性能测试与负载计算，确保性能足够支撑服务
### PyScdl：基于python构建的配置·服务发现·日志收集中心
- 职责：后端开发
- 时间：2023.10~2023.11
- 技术栈：Python、FastAPI、aiohttp、asyncio
- 地址：https://github.com/Midas75/py-scdl
- 内容：
  - 基于python实现的配置、服务发现、日志收集中心，功能设计参考Nacos，网络io完全使用异步实现。组件间实现解耦，可以仅启用部分功能
  - 服务端前端使用vanilla-jsoneditor实现json配置编辑，支持动态修改与提交，客户端可通过向服务端请求的方式载入配置
  - 基于stdout重定向的方式，在日志收集组件创建后无侵入式地异步从网络发送日志而不影响本地输出
  - 服务端异步websocket基于fastapi实现，客户端异步websocket基于aiohttp实现，支持断线重连
### 聚言——慧安蜂巢应用商店
- 职责：设计、后端开发
- 时间：2023.10~2024.3
- 技术栈：Kubernetes、SpringBoot、Websocket、xterm
- 隐藏
- 内容：
  - 使用Fabric8 API操作Kubernetes集群，以kubernetes的Deployment+Service为基础单位构建应用
  - 考虑了多种类型应用的访问、授权、安装、卸载等行为，设计完整的开发者指南
  - 使用ingress-nginx-controller实现可配置的反向代理，面向前端仅开放单个端口，多个应用使用iframe渲染到同一页面
  - 实现浏览器端基于websocket+xterm的kubectl exec命令交互，基于offsetHeight实现终端行列数自适应
  - 继承ByteArrayOutputStream实现线程安全的read+reset操作，基于CommandLineRunner+单线程轮询+CompletableFuture维护多个exec命令执行
### 灵境——慧安蜂巢人工智能算法中台
- 职责：项目负责人
- 时间：2022.10~2024.3
- 技术栈：SpringCloud、SpringSecurity、Python、Kubernetes、Mysql、ELK、Redis、Nacos
- 内容：
    - 负责部署、集成、故障排查；撰写与维护相关功能、技术、开发文档
    - 基于Shell设计部署流程、编写部署脚本自动执行流程，服务器单机部署时间<30分钟，版本迭代时间＜10分钟。编写各组件于k8s集群中部署所需的yaml文件。基于nginx实现后端websocket服务、minio服务统一反代
    - 在部署脚本中基于Shell实现Harbor在K8s的自动化部署，实现本地镜像的层分析算法，并利用该算法自动完成镜像复用打包，部署包体积减少40%，部署过程中引入pigz并行解压缩，引入pv实现进度可视化
    - 设计并实现模型转换框架，利用dfs实现模型转换有向图中转换路径（a-b-c）的自动计算。基于k8s jobs封装模型转换python进程，使用redis作为java/python进程间通信中间件
    - 设计并实现后端压缩功能，基于ZipOutputStream实现流式压缩，考虑实际业务场景与性能瓶颈，进行了zip压缩等级的选型，使用redis存储临时下载token以避免无鉴权的恶意下载请求
    - 设计并重构在线服务功能，包括Python端、镜像端、Java端、Web端
    - 设计与开发数据质检模块，通过访问数据库、文件系统、Python程序采集数据集指标并发送给前端。
    - 设计并实现离散化+矩阵差分+倒排索引的算法，以高效地[计算图片标注框的重叠度](https://github.com/Midas75/area-of-stack)
    - 设计并实现流媒体在线服务功能的功能（Java、Python），接入公司其他产品的RTSP流，解决VideoCapture拉流的延时问题，将报警结果装配为JSON返回。为避免接口被外部请求随意调用，利用Http Host进行接口校验。
    - 排查并解决系统关于NFS、K8s StorageClass、KubeSphere、SpringSecurity拦截、SpringCloud动态路由等各类部署问题
    - 基于Dockerfile与yaml实现前端开发环境（nginx反代+nodejs）、后端开发环境（卷挂载、添加路由）搭建
### 望极——慧安蜂巢数实融合仿真平台
- 职责：设计、后端开发、前端开发
- 时间：2023.03~2023.05
- 隐藏
- 技术栈：Unity、C#、Threejs、HTML
- 内容：
    - 设计并实现方案，将从Unity/ThreejsEditor导出的3D场景载入慧安蜂巢物联网操作系统平台，并将场景内数据与平台本身数据进行双向绑定
    - 设计基于知识图谱的数字孪生信息模型的建模方案
    - 设计基于ThreejsEditor的3D场景编辑平台的功能与技术方案
    - 搭建连通公司其他平台产品的演示方案

### 浦镇数字孪生工厂
- 职责：产品经理
- 时间：2023.02~2023.02
- 技术栈：IOT数据中台+AR/VR+工业仿真
- 隐藏
- 内容：
    - 三方（慧安股份、达索、ALVA）参与的数字孪生工厂建设，负责整体方案功能与应用设计
    - 负责前期各系统连接方案设计

### OPC UA软件网关
- 职责：前端开发、后端开发
- 时间：2023.02~2023.03
- 隐藏
- 技术栈：C++、open62541、mongoose、eCharts、layui
- 内容：
    - B/S架构，手动实现了简单的MVC架构
    - 利用宏定义将Controller层的小驼峰函数命名与rest风格的url进行自动对应
    - 基于小顶堆（优先队列）实现的单线程多延时任务分发
    - 自动重连、多设备管理、数据读取
    - 前端基于http轮询实现的数据读取与图表显示

### 某国家课题
- 职责：方案编写
- 时间：2023.01~2023.03
- 隐藏
- 内容：
    - 低轨侦察卫星与整体系统交互方案的部分编写

### 慧安蜂巢智能小站软件系统
- 职责：后端开发
- 时间：2022.06~2022.12
- 技术栈：C++、openssl、mosquittopp、正则表达式、open62541、libmodbus、sqlite3、lua
- 内容：
    - 设备授权：设计了基于两次RSA的嵌入式设备授权方案并实现了Demo以指导后续C++/Java开发，向授权平台发送认证文件并解析响应的授权文件，根据授权启用/关闭对应功能，综合考虑了硬件伪造、请求篡改、DNS欺骗、响应篡改、磁盘修改等可能的破解场景
    - [MQTT通信模块](https://gitee.com/sun-zhongjie-0426/mqtt-service)：基于构建mosquittopp的代理类设计并实现了设备的MQTT常驻服务，用于管理多个MQTT连接
    - [RemoteShell模块](https://gitee.com/sun-zhongjie-0426/remote-shell-server)：
        - 通过forkpty、execl和poll构建一个终端，允许用户通过远程的任意网络连接（tcp/mqtt/websocket）访问设备而无需嵌入式设备具备ssh服务
        - 在公司物联网平台上基于x-term开发[基于MQTT的网页远程Shell功能](https://gitee.com/sun-zhongjie-0426/mqtt-rpc-shell)
    - 性能收集模块：读取/proc/文件夹下的内容，基于正则表达式处理后，收集内存信息、CPU各核心/总占用率、npu占用率
    - AT指令封装库：封装并编译为静态库，基于串口读写AT指令，为上层开发者提供与FM650、NL668等蜂窝模块的交互能力。实现了拨号上网、SIM卡信息读取、短信收发，PDU格式长文本的短信编解码
    - 工业协议通信模块：
        - Connection与Device分离的架构，从而兼容连接复用的通信协议
        - 南向接入OPC UA/Modbus/串口设备并读取数据，使用sqlite存储至本地并转换为统一格式的JSON发往前端
        - 重写libmodbus库函数实现引脚高低电平的手动设置，从而控制RS485的TX/RX模式
        - 小顶堆实现单线程轮询+线程池任务分发
        - lua脚本格式与解析、lua/c++交互方案，实现对于modbus/串口设备的自定义脚本上传与解析
        - 基于Sqlite3的数据库存储方案，通过历史数据表+最新数据表实现高效写入/查询/条目维护
        - 包括延迟、回差等功能的复杂报警逻辑功能

### 新基建园区白皮书
- 职责：产品经理
- 时间：2022.11~2022.11
- 隐藏
- 内容：
    - 由西部控股、汉云股、慧安股份合作，慧安股份主导编写
    - 负责物联网底座、新型网络（5G/6G/卫星通信）、算力基础设施、源网荷储一体化、车路云一体化、元宇宙部分的内容的编写

### 基于慧安蜂巢的红色信创园区解决方案
- 职责：产品经理
- 时间：2022.10~2022.11
- 内容：
    - 北京赛站（智慧园区方向）领军组第一名（36支队伍），奖金10万
    - [全国总决赛最具发展潜力奖](https://guanwang-1257541758.obs.cn-north-4.myhuaweicloud.com/%E8%8E%B7%E5%A5%96%E8%AF%81%E4%B9%A6/%E7%AC%AC%E5%9B%9B%E5%B1%8A/%E9%A2%86%E5%86%9B%E7%BB%84%E5%A5%96%E7%8A%B6/%E6%9C%80%E5%85%B7%E5%8F%91%E5%B1%95%E6%BD%9C%E5%8A%9B%E5%A5%96/CII-C520220133.jpg)
    - 负责解决方案中园区技术底座、园区功能设计内容撰写，负责路演PPT内容设计与修改

### OPC UA中间件
- 职责：设计、后端开发
- 时间：2022.06~2022.07
- 隐藏：此项目目前看来技术点过少，没有意义
- 技术栈：SpringBoot、EclipseMilo、PahoMqtt、Swagger、GSON、WebSocket、HTTP
- 内容：
    - 作为网络中间件，南向通过OPC UA协议连接设备，北向通过MQTT将数据发送到物联网平台，通过HTTP对接平台完成设备添加、查看、管理、RPC调用转OPC UA Method调用，向前端提供Restful接口进行配置
    - 使用序列化+代理模式，在小规模项目中快速实现持久化、连接维护等功能
    - 涉及建造者模式、单例模式、代理模式等
    - 使用CompletableFuture实现部分异步/多线程操作，加锁以Synchronized与ConcurrentHashMap为主
    - 基于JwtToken的授权

### 数据检索网页
- 职责：前端开发、后端开发
- 时间：2022.06~2022.06
- 技术栈：SpringBoot、Mysql、repository、model、jsp、layui、Echarts、ajax
- 隐藏
- 内容：
    - 基于jpaRepository实现快速数据库交互、分页
    - 基于Model、Data实现前后端首次数据传输
    - 基于jsp、layui、Echarts绘制前端页面，使用xhr进行后续查询

### 计算机图形学Demo
- 职责：后端开发
- 时间：2022.01~2022.01
- 技术栈：C++、JAVA、计算机图形学
- 地址：https://github.com/Midas75/3d-demo
- 内容：
    - 手动实现了以绘制像素为基础的三维立方体展示，内容包括2ddaline直线绘制、投影变换、透视变换、光栅化、blinn-phong光照模型、纹理图片加载与渲染、裁剪等内容的完整渲染管线。
    - 实现了Java/c++两个版本，java版本通过flightRecorder的焰形图进行分析并确定性能瓶颈从而进行优化
    - 使用知名算法实现快速求平方根倒数，用于向量归一化等场景

### 微信点餐小程序
- 职责：小程序开发
- 时间：2021.12~2022.01
- 技术栈：微信小程序、微信云数据库
- 隐藏
- 内容：
    - 调用微信云数据库更新数据、读取二维码内容、自动登录等功能

### 基于树莓派的摄像头识别+追踪
- 职责：后端开发
- 时间：2021.11~2022.05
- 隐藏
- 技术栈：树莓派、FFmpeg、Nginx、Python、REID、TCP
- 内容：
    - 实现了局域网视频传输方案，基于Nginx的流转发服务，通过flv格式传输RTMP视频流，由Python的Reid算法程序拉流并解析
    - 云端算法将目标识别框数据通过裸TCP传输至树莓派，通过Python程序控制云台转动始终追踪目标

### 简易前端低代码页面
- 职责：前端开发、后端开发
- 时间：2021.08~2021.09
- 技术栈：Mysql、Nodejs、JavaScript、Html、CSS
- 隐藏
- 内容：
    - 使用原生JS实现在Canvas上添加图形（三角、圆、矩形、星形），调整位置与大小，设置颜色，设置叠放次序，添加文本、设置背景图片
    - 设计并实现将画布内容序列化为JSON的格式/反序列化从JSON读取内容
    - 使用Nodejs实现后端并与Mysql交互完成持久化

### 安卓平台仿制网易云音乐
- 职责：前端开发、后端开发、UI设计
- 时间：2021.02~2021.05
- 技术栈：Nodejs、Android Studio、JSON、HTTP
- hide
- 内容：
    - 调用开源API建立Node服务器将请求转发给网易云服务器
    - 设计并实现推荐歌单、心动模式、个人歌单、歌词滚动显示、通过URL播放音乐、查看歌单内容、收藏歌单、随机播放（fisher-yates shuffle）等功能，通过账号与密码登录
    - 设计与绘制UI界面与风格，基于代码实现UI交互的视觉效果
    <!-- - 密码使用MD5摘要后传输，大量信息压缩后传输 -->

### 微信背单词小程序
- 职责：小程序开发
- 隐藏
- 时间：2020.04~2020.04
- 技术栈：微信小程序、微信云数据库
- 内容：
    - 用户自行录入单词，为用户提供多种测试手段包括随机抽取、最难抽取等功能，并给出评价，允许用户通过不同的顺序浏览已储存单词
    - 使用微信openid自动登录
