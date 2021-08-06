// 可以不用写的这么麻烦。直接 = ["America", "Greece" ...]
const contryName = new Array("America", "Greece", "Britain", "Canada", "China")
let count = 0;

document.write("在以下字符中：<br/>");
for (let i=0; i<contryName.length; i++)
    document.write(contryName[i] + "<br/>");

// 及时换行，不然可读性太差
for (let i =0; i<contryName.length; i++) {
    if(contryName[i].indexOf("A") != -1 || contryName[i].indexOf("a") != -1)
        count ++;
}document.write("<br/>"+"共有" + count + "个包含a / A 。")

/**
 * var, let, const区别
 * 有了解过map方法么，for循环可以改写
 * Array的一些方法，例如filter，foreach，map
 * **/