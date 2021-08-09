 const countryName = ["America", "Greece", "Britain", "Canada", "China"]
// 重构 
 let number = 0 

document.write("在以下字符中：<br/>");
//map

countryName.forEach( country => {
    document.write(country)
} )
document.write('<br/>包含字母A，a的国家有：<br/>')

countryName.forEach( country => {
    if(country.indexOf("A") != -1 || country.indexOf("a") != -1){
        document.write(country)
    }
})

