function error(){
var number = document.getElementById('number');
number.style.borderColor = "red";
number.value = null;
}
function check(){
var number = document.getElementById('number');
var num = number.value;
var N = num.toString();
if(parseInt(num)!=num && N.length != 11)
error();
var mid = N.slice(3,7);
if(mid != "6621"&&mid != "0532"&&mid != "0531")
error();
}
