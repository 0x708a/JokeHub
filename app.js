const c1 = document.querySelectorAll(".c1");
const c2 = document.querySelectorAll(".c2");
const c3 = document.querySelectorAll(".c3");
const laugh = document.querySelectorAll(".laugh");
const share = document.querySelectorAll(".share");
const title = document.querySelector(".title");
const menu = document.querySelector(".menu");
const home = document.querySelector(".home");
const discover = document.querySelector(".discover");
const profile = document.querySelector(".profile");
const settings = document.querySelector(".settings");
const close = document.querySelector(".close");

title.textContent = "JokeHub (" + window.innerWidth + ")";

info = new Info()
info.getPosts()

setTimeout(function() {
    for (i = 0; i < Object.keys(info.posts).length; i++) {
        new Post(info.posts[i]["user"], info.posts[i]["content"], info.posts[i]["likes"]);
    }
}, 1000)


console.log(window.innerWidth);

title.addEventListener("click", () => {
    window.location.href = "#"
})

if (window.innerWidth >= 1155) {
    for (i = 0; i < c2.length; i++) {
        c2[i].style.position = "relative";
        c2[i].style.left = "25%";
        c2[i].style.marginTop = "50px";
        c2[i].style.maxWidth = "50%";
        c2[i].style.minHeight = "12%";
        c2[i].style.padding = "10px";
    }
}

if (window.innerWidth <= 1154 && window.innerWidth > 980) {
    document.querySelector(".trends").textContent = "Trending";
    document.querySelector(".trends").style.top = "25%";
    document.querySelector(".t1").style.top = "30%";
    document.querySelector(".t2").style.top = "35%";
    document.querySelector(".t3").style.top = "40%";
    document.querySelector(".t4").style.top = "45%";

    document.querySelector(".trends").style.left = "5%";
    document.querySelector(".t1").style.left = "5%";
    document.querySelector(".t2").style.left = "5%";
    document.querySelector(".t3").style.left = "5%";
    document.querySelector(".t4").style.left = "5%";

    for (i = 0; i < c2.length; i++) {
        c2[i].style.position = "relative";
        c2[i].style.left = "27%";
        c2[i].style.marginTop = "50px";
        c2[i].style.maxWidth = "68%";
        c2[i].style.minHeight = "12%";
        c2[i].style.padding = "10px";
    }

    for (i = 0; i < laugh.length; i++) {
        laugh[i].style.width = "5%";
        laugh[i].style.height = "5%";
    }

    for (i = 0; i < share.length; i++) {
        share[i].style.width = "5%";
        share[i].style.height = "5%";
    }
}

if (window.innerWidth <= 980) {
    document.querySelectorAll(".joke").style.fontSize = "3rem";
    document.querySelectorAll(".user").style.fontSize = "2rem";
    menu.style.opacity = 1;
    title.style.opacity = 0;

    for (i = 0; i < c2.length; i ++) {
        c2[i].style.minWidth = "78%";
        c2[i].style.left = "10%";
    }

    for (i = 0; i < c1.length; i++) {
        c1[i].style.opacity = 0;
        c1[i].style.zIndex = -10;
    }

    for (i = 0; i < c3.length; i++) {
        c3[i].style.opacity = 0;
        c3[i].style.zIndex = -10;
    }


    title.style.zIndex = -10;
}

menu.addEventListener("click", () => {

    menu.style.opacity = 0;
    menu.style.zIndex = -10;

    document.querySelector(".body").style.height = "100%";
    document.querySelector(".body").style.overflow = "hidden";

    for (i = 0; i < c2.length; i++) {
        c2[i].style.opacity = 0;
        c2[i].style.zIndex = -10;
    }

    for (i = 0; i < c1.length; i++) {
        c1[i].style.opacity = 1;
        c1[i].style.zIndex = 1;
    }

    close.style.opacity = 1;
    close.style.zIndex = 1;

});

close.addEventListener("click", () => {
    close.style.opacity = 0;
    close.style.zIndex = -10;

    document.querySelector(".body").style.height = "";
    document.querySelector(".body").style.overflow = "unset";

    for (i = 0; i < c2.length; i++) {
        c2[i].style.opacity = 1;
        c2[i].style.zIndex = 1;
    }

    for (i = 0; i < c1.length; i++) {
        c1[i].style.opacity = 0;
        c1[i].style.zIndex = -10;
    }

    menu.style.opacity = 1;
    menu.style.zIndex = 1;

})

window.addEventListener("load", () => {
    window.location.href = "#";
    console.log("pohg")
})
