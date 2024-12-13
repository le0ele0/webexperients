
	const goodCart = {
        props:["modelValue","books"],
        emits:["update:modelValue"],
        template: `
        <div>
		<table>
        <tr>
        <th>序号</th>
        <th>商品名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>金额</th>
        <th>操作</th>
        </tr>
        <tr v-for="(book,index) in books" >
        <td>{{book.id}}</td>
        <td>{{book.title}}</td>
        <td>{{book.price}}</td>
        <td>
        <button v-bind:disabled="book.count===0" v-on:click="deleteBook(index)">-</button>
        {{book.count}}
        <button v-on:click="addBook()">+</button>
				</td>
				<td>{{itemPrice(book.price, book.count)}}</td>
				<td>
					<button @click="deleteItem(index)">删除</button>
				</td>
			</tr>
		</table>
		<span>总价：{{totalPrice}}元</span>
	</div>
    `,
    methods:{
        addBook(index) {
      // 创建一个新的对象数组副本，以避免直接修改 props
      const newBooks = [...this.modelValue];
      // 更新指定索引处的对象的 name 属性
      newItems[index] = { ...newBooks[index], count: count+1 };

      // 触发 update:modelValue 事件，传递新的对象数组给父组件
      this.$emit('update:modelValue', newItems);
        },
        deleteBook(index) {
            const newBooks = [...this.modelValue];
            newItems[index] = { ...newBooks[index], count: count-1 };
            this.$emit('update:modelValue', newItems);
              }
     
	},
}

