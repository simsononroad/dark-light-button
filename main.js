var checkbox = document.getElementById("checkbox")
var isGrayBackground = 0

function light(){
    if (isGrayBackground == 0){
        var body = document.querySelector("body").style.backgroundColor = "gray"
        isGrayBackground = 1
        var icon = document.getElementById("checkbox").innerText="☀️"
    }else{
        var body = document.querySelector("body").style.backgroundColor = "white"
        isGrayBackground = 0
        var icon = document.getElementById("checkbox").innerText="🌑"
    }
    
}