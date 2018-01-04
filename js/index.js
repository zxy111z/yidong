/**
 * Created by Administrator on 2017/12/28/028.
 */
{
    // 轮播图
    let imgs=document.querySelectorAll(".imgs-box li");
    let pages=document.querySelectorAll(".lunbo-box li");
    pages.forEach(function(value,index){
        value.onclick=function() {
            for(var i=0;i<pages.length;i++){
                pages[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    })

    // 自动轮播
    let banner=document.querySelector(".banner-center");
    let n=0;
    function bannerfn(dir="r"){
        if(dir==="r"){
            n++;
            if(n===imgs.length){
                n=0;
            }
        }else if(dir==="l"){
            n--;
            if(n===-1){
                n=imgs.length-1;
            }
        }
        for(var i=0;i<pages.length;i++){
            pages[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pages[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    let t=setInterval(bannerfn,5000);
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(bannerfn,5000);
    }

    // 左右箭头
    let left=document.querySelector(".prev");
    let right=document.querySelector(".next");
    let flag=true;
    right.onclick=function(){
        if(flag){
            flag=false;
            bannerfn();
        }
    }
    left.onclick=function(){
        if(flag){
            flag=false;
            bannerfn("l");
        }

    }
    imgs.forEach(function(val,index){
        val.addEventListener("transitionend",function(){
            flag=true;
        });
    })
}

{
    // 左侧导航
    let back=document.querySelector(".back");
    back.onclick=function(){
        document.documentElement.scrollTop=0;
    }

}

{
    // 头部
    let flag=true;
    let head2=document.querySelector(".head2");
    let menu=document.querySelector(".menu");
    console.log(menu);
    window.onscroll=function(){
        if(flag) {
            let st = document.documentElement.scrollTop;
            if (st >= 530) {
                head2.style.display = "block";
            } else {
                head2.style.display = "none";
            }
            if (st >= 560) {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
            lists.forEach(function (value, index) {
                if (st >= value.offsetTop) {
                    for (let i = 0; i < lists.length; i++) {
                        floors[i].classList.remove("active");
                    }
                    floors[index].classList.add("active");
                }
            })
        }
    }


    let lists = document.querySelectorAll(".item");
    let floors = document.querySelectorAll(".menu ul li");
    floors.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = lists[index].offsetTop;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) * 30 / 400;
            let time = 0;
            flag=false;
            let t = setInterval(function () {
                now += speed;
                time += 30;
                if (time === 300) {
                    clearInterval(t);
                    now = ot;
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 30)
        }
    })
}

