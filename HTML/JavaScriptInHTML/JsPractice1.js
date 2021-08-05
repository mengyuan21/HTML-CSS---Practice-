var contryName = new Array("America", "Greece", "Britain", "Canada", "China")
var count = 0;

document.write("在以下字符中：<br/>");
for (var i=0; i<contryName.length; i++) 
    document.write(contryName[i] + "<br/>");

for (var i =0; i<contryName.length; i++) {
    if(contryName[i].indexOf("A") != -1 || contryName[i].indexOf("a") != -1)
        count ++;
}document.write("<br/>"+"共有" + count + "个包含a / A 。")
