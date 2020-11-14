## 侧边栏

- `a-menu` 导航栏的主题

    

- `a-menu-item` 导航栏子菜单，可点击


- `a-sub-menu` 可展开折叠的栏目

---

 ### `menu.vue` --- 子菜单

    `key`: 唯一标识， 这里可以父路由+自身路由

    点击之后判断是否有父，有的话+父路由，没有的话就是它自身（router.path）
    

 ### `sub.vue` --- 折叠菜单
    | 参数 | 说明 |  类型 | 
    |----- |------|-------|
    | | | |
    | popupClassName | 子菜单样式 | string |
    |disabled|是否禁用|boolean|
    |key|唯一标志|string|
    |title|子菜单项值|string、slot|
    |expandIcon|自定义Menu展开收起图标|slot|
				

 ### `item.vue` --- 判断路由生成菜单还是折叠菜单

    使用 `component` 中的 `is` 判断是折叠菜单还是子菜单

 ### `side.vue` --- 侧边栏整体

