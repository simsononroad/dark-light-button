var isLight = false
var isDark = false
var notification = document.getElementById("noti")

function light(){
    notification.innerText="light"
    var vilagos = document.getElementById("light")
    var sotet   = document.getElementById("dark")
    sotet.style.visibility = "hidden";
    vilagos.style.visibility = "visible";
    isLight=true
    isDark=false
}

function dark(){
    notification.innerText="dark"
    var vilagos = document.getElementById("light")
    var sotet   = document.getElementById("dark")
    sotet.style.visibility = "visible";
    vilagos.style.visibility = "hidden";
    isDark=true
    isLight=false
}

function toggleBtn(){
    notification.innerText=isLight, ",", isDark
    if (isDark=="true" && isLight=="false"){
        
        light()
    }if (isLight="true" && isDark=="false"){
        alert("dark")
        dark()
    }
}