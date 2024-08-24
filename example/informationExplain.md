1. 个人信息模块用于展示个人的信息。
2. 通常，整个简历的title是姓名，那么此时可以用别名功能实现：`##[孙中杰](个人信息)`
3. **性别**：在列表项中，使用`性别：任意`/`gender: any`表示
4. **年龄**：年龄有两种表达方式，如果共存，则会优先采用第一种：
   1. `年龄：123`/`age:123`
   2. `生日：yyyy-mm-dd`/`birthday:yyyy-mm-dd`，这一方式会根据当前日期计算生日，有这个功能是因为本人在开发过程中过了一次生日，导致在一段时间内简历年龄＜真实年龄
5. **电话**：`电话`/`phone`
6. **邮箱**：`邮箱`/`email`
7. **微信**：`微信`/`wechat`
8. **住址**：`住址`/`address`
9. **期望岗位**：`期望岗位`/`expection`
10. **经验**：`经验`/`work`
11. **头像**：`头像`/`avatar`，其value采用markdown语法即`![](./avatar.png)`