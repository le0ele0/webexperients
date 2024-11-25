const menuComponent = {
props:["menus"],
inheritAttrs:false,
template:`
	<ul :$attrs="attrs" class="menu_ul_style">
		<li v-for="menu in menus">
		<font style ="cursor:pointer;" @click = "menu.show=false" v-if="menu.show">-</font>
		<font style = "cursor:pointer;" @click = "menu.show=true" v-if ="!menu.show">+</font>
			<a :href="menu.url" @click="$emit('update:modelValue',menu.name)">{{menu.name}}</a>
			<ul :$attrs="attrs" class="menu_ul_style" v-show="menu.show" >
				<li v-for="submenu in menu.subMenus">
					<a :href="submenu.url" @click="$emit('update:modelValue',menu.name)">{{submenu.name}}</a>
				</li>
			</ul>
		</li>
	</ul>
	`
	}

