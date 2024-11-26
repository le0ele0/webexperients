const addMinusComponent = {
    props:["modelValue"],
    emits:["update:modelValue"],
    template:`
    <button @click = "$emit('update:modelValue',modelvalue-1)">-</button>
    {{modelValue}}
    <button @click = "$emit('update:modelValue',modelvalue+1)">+</button>
    `
}