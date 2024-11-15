var secondly = setInterval(updateTime, 1000);
var daily = setInterval(updateDate, 1000);
var rolling = setInterval(rolling, 3000);
var former_p = '1.权利人对涉嫌侵权内容拥有商标权、著作权和/或其他依法可以行使权力的权属证明。<br>2.请充分、明确地描述确信被侵犯了权利人合法权益的内容并请提供非法登载该作品的第三方地址<br>3.请指明涉嫌侵权网页的哪些内容侵犯了第2项中列明的权利人的合法权益。<br>4.请提供权利人的具体的联络信息，包括姓名、身份证或护照复印件（对自然人）、单位登记证明复印件（对单位）、通信地址、电话号码、传真和电子邮件。<br>5.请提供涉嫌侵权内容在信息网络上的位置（如指明您举报的含有侵权内容的出处，即：指网页地址或网页内的位置）以便我们与您举报的含有侵权内容的网页的所有权人/管理人联系。';

function updateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var hours = document.getElementById("hour");
    hours.innerHTML = hour;
    var minutes = document.getElementById("minute");
    minutes.innerHTML = minute;
    var seconds = document.getElementById("second");
    seconds.innerHTML = second;
}

function updateDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var week = now.getDay();
    var days = document.getElementById("day");
    days.innerHTML = day;
    var months = document.getElementById("month");
    months.innerHTML = month;
    var years = document.getElementById("year");
    years.innerHTML = year;
    switch (week) {
        case 0:
            week = "星期日";
            break;
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
    }
    var weeks = document.getElementById("week");
    weeks.innerHTML = week;
}





//实现选项卡
function page1(){
var body1 = document.getElementById("body1");
body1.style.display = "block";
var body2 = document.getElementById("body2");
body2.style.display = "none";
}
function page2(){
var body1 = document.getElementById("body1");
body1.style.display = "none";
var body2 = document.getElementById("body2");
body2.style.display = "block";
}


//搜索功能
          function search() {
            var content = document.getElementsByTagName("p")[0];
            var result = content.innerHTML;
            var keyword = document.getElementById("keyword").value;

            if (keyword === "") {
                alert("请输入关键词");
                return;
            }
            // 使用正则表达式替换所有匹配的关键词
            var highlightedResult = result.replace(new RegExp(keyword, 'gi'), match => `<span style='background:yellow;'>${match}</span>`);
            content.innerHTML = highlightedResult;
        }
        function clearing(){
        console.log("触发clear");
        var content = document.getElementsByTagName("p")[0];
        content.innerHTML = former_p;
        }
//全选和取消全选兴趣
function select_all(){
var checkboxes = document.getElementsByName("hobby");
var i = 0;
for (i = 0; i < checkboxes.length; i++) {
checkboxes[i].checked = true;
}
}
function cancel_select_all(){
var checkboxes = document.getElementsByName("hobby");
var i = 0;
for (i = 0; i < checkboxes.length; i++) {
checkboxes[i].checked = false;
}
}

//select中关键词的移动
const option_value = ["程序员","C++","Java","JavaScript","深度学习","区块链"];
function r_a_move() {
    var i;
    var l_select = document.getElementById("left");
    var r_select = document.getElementById("right");
    var l_options = l_select.getElementsByTagName("option");
    var r_options = r_select.getElementsByTagName("option");
    for (i = 0; i <= 5; i++) {
        r_options[i].text = option_value[i];
        l_options[i].text = '';
    }
}
function l_a_move() {
    var i;
    var r_select = document.getElementById("right");
    var l_select = document.getElementById("left");
    var r_options = r_select.getElementsByTagName("option");
    var l_options = l_select.getElementsByTagName("option");
    for (i = 0; i <= 5; i++) {
        l_options[i].text = option_value[i];
        r_options[i].text = '';
    }
}
function r_move() {
        var l_select = document.getElementById("left");
        var l_option = l_select.getElementsByTagName("option")[l_select.selectedIndex];
        var r_select = document.getElementById("right");
        var r_options = r_select.getElementsByTagName("option");
        var r_arrOptions = Array.from(r_options);
        for (i = 0; i <= 5; i++) {
            if (r_options[i].text == '') {
                r_options[i].text = l_option.text;
                l_option.text = '';
            }
        }
    }

function l_move() {
        var r_select = document.getElementById("right");
        var r_option = r_select.getElementsByTagName("option")[r_select.selectedIndex];
        var l_select = document.getElementById("left");
        var l_options = l_select.getElementsByTagName("option");
        var l_arrOptions = Array.from(l_options);
        for (i = 0; i <= 5; i++) {
            if (l_options[i].text == '') {
                l_options[i].text = r_option.text;
                r_option.text = '';
            }
        }
    }

//检查年龄生日等的输入
function check() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const mail = document.getElementById("e-mail").value;
    const birthday = document.getElementById("birthday").value;
    var flag = true;
    if (name == '') {
        alert("请输入姓名");
        flag = false;
    } else if (age == '') {
        alert("请输入年龄");
       flag = false;
    } else if (mail == '') {
        alert("请输入邮箱");
        flag = false;
    } else if (birthday == '') {
      flag = false;
        alert("请输入生日");
    } else {
        // 检查年龄是否为有效整数
        const parsedAge = parseInt(age, 10);
        if (isNaN(parsedAge)) {
          flag = false;
            alert("请输入阿拉伯数字表示年龄");
        } else if (parsedAge < 0 || parsedAge > 120) {
          flag = false;
            alert("请输入0到120之间的年龄");
        } else {
            // 邮箱格式验证
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(mail)) {
              flag = false;
                alert("请输入有效的邮箱地址");
            }
            if (flag) {
            alert("提交成功");
            }
        }
    }
}

        var index = 0;
        function rolling(){
        const images =[
        'pictures/slide5.png',
        'pictures/slide1.png',
        'pictures/slide2.png',
        'pictures/slide3.png',
        'pictures/slide4.png'
        ]
            var slideImage = document.getElementById('slide-images');
            slideImage.src = images[index];
            index = (index + 1) % images.length; // 当到达最后一张图片时，重新开始循环
        }
