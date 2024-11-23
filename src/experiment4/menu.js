const menuComponent = {
props:["menus"],
inherAttrs:false,
template:`
	<ul id="app">
		<li v-for="menu in menus">
			<a :href="menu.url">{{menu.name}}</a>
			<ul v-show="menu.show">
				<li v-for="submenu in menu.subMenus">
					<a :href="submenu.url">{{submenu.name}}</a>
				</li>
			</ul>
		</li>
	</ul>
	`
	}
//样式阻止根透传（禁用继承），使用$attrs设置子菜单样式






		const menulist={
			menus:[
				{
					name: "我的淘宝",
					url: "#",
					show:false,
					subMenus:[{name:"已买到的宝贝",url:"#"},{name:"已卖出的宝贝",url:"#"}]
				},
				{
					name: "收藏夹",
					url: "#",
					show:false,
					subMenus:[{name:"收藏的宝贝",url:"#"},{name:"收藏的店铺",url:"#"}]
				}
			]
		}




