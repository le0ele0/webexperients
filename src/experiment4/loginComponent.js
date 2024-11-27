const loginComponent={
    emits:['click'],
    data(){
        return{
            email:'**********@qq.com',
            password:'*******'
        }
    },
    template:`
    <div style = "margin:10px;">
        Email:<input type="text" v-model="email"><br>
        Password:<input type="password" v-model="password"><br>
       <span style = "float : right;"> <button @click = "$emit('click',email)">登录</button><a href = "#">我要注册</a></span>
        </br>
        </br>
    </div>
    `


}