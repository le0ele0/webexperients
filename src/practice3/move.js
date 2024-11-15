function move(){
var i;
var options = document.getElementsByTagName("option");
var arrOptions = Array.from(options);
var left = arrOptions.slice(0,5);
var leftValues = left.map(option=>option.value);
for(i = 6 ;i <=11;i++){
options[i].text = leftValues[i-6];
options[i-6].text = '';
}
}


//用.text或innerHTML 改變option的內容,.text是option专属
//.map类数组对象不能使用，要先用Array.from（）转化为真数组