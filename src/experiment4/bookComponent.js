const bookComponent={
    props:["bookInfo","imageStyle","bookStyle"],
    components:{
        addMinusComponent
    },
    template:`
    <div :class = "bookStyle">
        <img :src = "bookInfo.path" :class = "imageStyle"><br>
        书名：{{bookInfo.name}}<br>
        作者：{{bookInfo.author}}<br>
        单价：{{bookInfo.price}}
        <add-minus-component v-model.number="bookInfo.count" tyle = "float:right"></add-minus-component>    
    </div>
    `,
}