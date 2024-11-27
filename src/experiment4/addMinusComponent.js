const addMinusComponent = {
    props:{
        modelValue:{
            type:Number,
            required:true
        }
    },
    emits:["update:modelValue"],
    template:`
    <button @click = "$emit('update:modelValue',this.modelValue-1)">-</button>
    {{modelValue}}
    <button @click = "$emit('update:modelValue',this.modelValue+1)">+</button>
    `
}