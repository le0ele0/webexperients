const menuComponent = {
props:["menus"],
inherAttrs:false,
template:`
	<ul id="app">
		<li v-for="menu in menus">
		<font style ="cursor:pointer;" @click = "menu.show=false" v-if="menu.show">-</font>
		<font style = "cursor:pointer;" @click = "menu.show=true" v-if ="!menu.show">+</font>
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




