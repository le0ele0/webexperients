const menuComponent = {
props:["menus","modelValue"],
emits:["update:modelValue"],
inheritAttrs:false,
template:`
	<ul :class="$attrs.class">
		<li v-for="menu in menus">
		<font style ="cursor:pointer;" @click = "menu.show=false" v-if="menu.show">-</font>
		<font style = "cursor:pointer;" @click = "menu.show=true" v-if ="!menu.show">+</font>
			<a :href="menu.url" @click="$emit('update:modelValue',menu.name)">{{menu.name}}</a>
			<ul  :class="$attrs.class" v-show="menu.show" >
				<li v-for="submenu in menu.subMenus">
					<a :href="submenu.url" @click="$emit('update:modelValue',menu.name)">{{submenu.name}}</a>
				</li>
			</ul>
		</li>
	</ul>
	`
	}

