function temp() {
    const top = document.getElementById("fade").getBoundingClientRect().top;
    if (top < window.innerHeight) {
        document.getElementById("fade").classList.remove("hiding");
    } else {
        document.getElementById("fade").classList.add("hiding");
    }
    requestAnimationFrame(temp);
}
requestAnimationFrame(temp)

function temp2() {
    const top = document.getElementById("fade2").getBoundingClientRect().top;
    if (top < window.innerHeight) {
        document.getElementById("fade2").classList.remove("hiding2");
    } else {
        document.getElementById("fade2").classList.add("hiding2");
    }
    requestAnimationFrame(temp2);
}
requestAnimationFrame(temp2)

function temp3() {
    const top = document.getElementById("fade3").getBoundingClientRect().top;
    if (top < window.innerHeight) {
        document.getElementById("fade3").classList.remove("hiding3");
    } else {
        document.getElementById("fade3").classList.add("hiding3");
    }
    requestAnimationFrame(temp3);
}
requestAnimationFrame(temp3)

function temp4() {
    const top = document.getElementById("fade4").getBoundingClientRect().top;
    if (top < window.innerHeight) {
        document.getElementById("fade4").classList.remove("hiding4");
    } else {
        document.getElementById("fade4").classList.add("hiding4");
    }
    requestAnimationFrame(temp4);
}
requestAnimationFrame(temp4)

let audiO = document.getElementById("audiO");//获取audio的id
let Play = document.getElementById("Bplay");//播放
let bofang = document.getElementById("bofang");//播放img
let zanting = document.getElementById("zanting");//暂停img
let onFout = false;//播放标记
Play.onclick = function (){
    if(onFout===true){
        audiO.play();
        bofang.style="display: none;"
        zanting.style="display: block;"
        onFout = false;
    }else{
        audiO.pause();
        bofang.style="display: block;"
        zanting.style="display: none;"
        onFout = true;
    }
}