/**
 * Created by Administrator on 2017/12/28/028.
 */
// 轮播图
{

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
// 左侧导航
{

    let back=document.querySelector(".back");
    back.onclick=function(){
        document.documentElement.scrollTop=0;
    }

}
// 头部
{
    let flag=true;
    let head2=document.querySelector(".head2");
    let menu=document.querySelector(".menu");
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
                if (st >= value.offsetTop-110) {
                    for (let i = 0; i < lists.length; i++) {
                        floors[i].classList.remove("active");
                        em[i].style.display="block";
                        zi[i].style.display="none";
                    }
                    floors[index].classList.add("active");
                    em[index].style.display="none";
                    zi[index].style.display="block";
                }
            })
        }
    }


    let lists = document.querySelectorAll(".item");
    let floors = document.querySelectorAll(".menu ul li");
    let em=document.querySelectorAll(".menu ul li em");
    let zi=document.querySelectorAll(".menu ul li span");
    console.log(zi);
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
// 侧导航
{
    let box=document.querySelectorAll(".banner-left li");
    let item=document.querySelectorAll(".banner-box .navbox");
    box.forEach(function(value,index){
        value.onmouseover=function(){
            for(let i=0;i<box.length;i++){
                item[i].classList.remove("xianshi")
            }
            item[index].classList.add("xianshi")
        }
        value.onmouseout=function(){
            for(let i=0;i<box.length;i++){
                item[i].classList.remove("xianshi")
            }
        }
    })
}

// 优惠专区
{
    let box=document.querySelector(".promotion-right");
    let inner=document.querySelector(".yhcon");
    let right=document.querySelector(".yhpre");
    let left=document.querySelector(".yhnext");
    let n=4;
    let dir="right";
    let st=setInterval(movefn,3000);
    function movefn(){
        inner.style.transition="all .5s";
        if(dir==="right") {
            n++;
        }else {
            n--;
        }
        inner.style.marginLeft=-n*242+"px";
    }
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===11){
            inner.style.transition="none";
            inner.style.marginLeft="-968px";
            n=4;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1694px";
            n=7;
        }
    })
    window.onblur=box.onmouseover=function(){
        clearInterval(st);
    }
    window.onfocus=box.onmouseout=function(){
        st=setInterval(movefn,3000)
    }
    let flag=true;
    right.onclick=function(){
        if(flag){
            dir="right";
            flag=false;
            movefn();
        }
    }
    left.onclick=function(){
        if(flag){
            dir="left";
            flag=false;
            movefn();
        }
    }
}

