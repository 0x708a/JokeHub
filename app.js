const c1 = document.querySelector(".c1");
const c2 = document.querySelectorAll(".c2");
const c3 = document.querySelectorAll(".c3");
const laugh = document.querySelectorAll(".laugh");
const share = document.querySelectorAll(".share");
const title = document.querySelector(".title");


postTemplate = {
    "user": "Google",
    "content": "Google is a very PogChamp company",
    "likes": 100000
}

info = new Info()
info.getPosts()
setTimeout(function(){
    console.log(info.posts);
    console.log(Object.keys(info.posts).length);
    for (i = 0; i < Object.keys(info.posts).length; i++) {
        new Post(info.posts[i]["user"], info.posts[i]["content"], info.posts[i]["likes"]);
    }
},1000);




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

if (window.innerWidth <= 1154) {
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

console.log(document.querySelectorAll("div"))
