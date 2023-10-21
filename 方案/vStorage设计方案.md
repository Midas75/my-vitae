# vStorage设计方案
vStorage的存在目的是实现基于indexedDB的虚拟存储，主要用于文件上传。

vStorage的内容包括：
- 数据库
- 文件树

## 数据库
数据库交互上，基于indexedDB进行封装。

## 文件树
文件树是vStorage的开发难点，工作量也比较大。

### 基础思路

由于数据库是格式化存储而非层级存储的，因此对于每个文件对象，需要表述的信息不能是层级的。

此外，数据库的value可能是一个极大的值，因此遍历获取所有的value将会导致大量的消耗，对于文件树的管理大部分时候应该完全基于key实现。

key的实现实际上还是非常的自由的，由于key可以使用字符串，因此只要对这个字符串进行一系列的规定，就可以保证它的可用性。

对于一个文件系统，要表述每个对象，可能包括如下的要素：
- id
- 父对象id
- 类型
- 自身名称

对于上述内容，长度或类型可控的是前三者。因此可以保证可用性。

然而下一个问题是，indexedDB提供的autoIncrement的Id并非可控的，或者说，它不允许类似这种方式的调用`db.nextId()`以获取一个新的自增id。

对于这一问题的解决，可以使用**两次对数据库的写入**实现：
- 假设库使用key作为主键，并且设置了自增。
- 第一次，传入`{}`，此时由于key未被指定，因此得到的结果为`{key:1}`
- 第二次，根据`e.target.result`可以获得`key`，拼装key，其格式应该如下：

    `${e.target.result.key}:${parentdir.id}:${type}:${name}`
- 然后进行写入，并结束事务

这一方式可行性的依据在[W3C的key generators一节](https://www.w3.org/TR/IndexedDB/#key-generator-construct)：

If the following conditions are true:
- The object store has a key generator.
- There is a value for the key path property.


**Then the value associated with the key path property is used. The auto-generated key is not used.** In the example below the key path for the object store is "". The actual object has a value of 10 for the property, . When the object is saved in the object store the property keeps its value of 10, because that is the key value.foo.barbar{ foo: { bar: 10} }bar
### 内存中的文件树

由于key使用了复合的形式，因此根据id直接查询到指定的key或value是难以实现的，但是在浏览器端的这一轻量级场景，因此可以在内存中构建文件树从而加快查询。

构建基于内存的文件树，对于每个object事实上维护一些简单的信息即可。
- id
- name
- type
- parentId
- key（对应数据库里的key）

并且不需要构建层级结构，层级结构对于查询并不够友好。

因此，易于实现。

### 文件生命周期维护

#### 增加
增加文件/文件夹时，需要指定下述内容：
- 父文件夹id
- 类型
- 名称
- 文件内容
对于增加来说，没有什么难度。
#### 修改
修改的话，需要指定下述内容：
- id
- 父文件夹id
- 类型
- 名称
- 文件内容

实际修改时，根据传入的id查询现有内容，并进行修改即可。
增加和修改可以合并到一个操作，即：有id时为修改，没有时为增加

无论是修改还是增加，都需要进行前置校验，不允许出现重名的情况。
#### 删除
删除只需要指定id。
删除操作较难的一点在于，需要递归查询所有**以id为parentId的文件**，直至没有，然后进行删除。
因此对于构建内存文件树时，需要建立一张反转表（children），用来递归删除。
当制定了要删除的文件夹后，为了改进性能，可以先收集所有要删除的id，再用indexedDB提供的方法进行统一删除。

### 重名问题
由于使用id进行维护，因此从规则上，重名是可以被允许的。但是在实际使用时，重名会带来无法区分的问题。

为了解决重名问题，首先想到的还是进行校验。

当尝试进行增加/修改操作时，检查每个children的名字。

### 文件嵌套问题
从规则上，f/f/f是被允许的，因此也需要进行校验。

### 文件树变更检查
在内容被修改时，需要进行文件树的变更检查，从而统计出增量。
实际上该功能是非必须的。因为可以直接完全重绘。
但是为了向transition进行适配，并且保留当前的折叠/展开/选中信息，就需要实现**基于变更的重绘**，换言之，需要记录此次变更影响到的元素，并根据影响到的元素决定重绘的范围。

文件树的变更，最重要的影响是折叠状态，对于内容的增加，至少需要维护折叠状态不变。

文件树的变更算法，可以有描述如下：
1. 文件树是一个多叉树，树中每个节点node持有id与children两个信息，children是一个node数组，可能为空
2. 给定两颗多叉树node1和node2，计算node1到node2的变化
3. 将变化量绘制到div中

对于树的变化，可以归纳为如下几种情况：
1. 增加节点：在朴素场景中，旧node都在，增加了新的node。在这种情况下，则创建新的div，并将内容写入，最后append
2. 移除节点：没有新增节点，移除了一部分node。在这种情况下，只需要删除旧的div即可。
3. 节点信息修改：如果id相同而内容修改，则只需要将内容重绘到div上即可。
4. 节点移动：对于一个节点，如果之前是p1的子成员，之后变成了p2的子成员，则维护一个移动事件

综上，给出如下的处理流程：
1. 维护一张表change，该表扁平化存储所有的node，并额外存储node的初始位置（在node1中的位置）和终止位置（在node2中的位置）
2. 深搜node1开始的树，记录起始位置（第几层第几个元素）
3. 深搜node2开始的树，记录终止位置（第几层第几个元素）
4. 遍历change表，对于单个节点，查询其在node1表中的信息，并与其在node2表中的信息进行比较，对于有改变的字段，进行记录
5. 最终，change表中将会具备各个node应该表现的动画：
   1. 对于有起始没有终止的node，播放disapper动画
   2. 对于有终止没有起始的node，反向播放disapper动画
   3. 对于有起始有终止的node，记录其起始位置的全局x、全局y，计算其终止位置的全局x、全局y，进行渲染
   4. 对于起始终止位置相同的node，内容渐变
   5. 播放动画

