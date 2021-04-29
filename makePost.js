class Post {
    constructor(user, content, likes) {
        var post = document.createElement("div");
        var userE = document.createElement("p");
        var contentE = document.createElement("h1");
        var laughE = document.createElement("img");
        var shareE = document.createElement("img");

        console.log(post)

        laughE.src = "./laughing.png";
        shareE.src = "./share.png";

        post.classList.add("border");
        post.classList.add("border-primary");
        post.classList.add("c2");

        post.appendChild(userE);
        post.appendChild(contentE);
        post.appendChild(laughE);
        post.appendChild(shareE);

        if (window.innerWidth <= 500) {
            console.log("POGCHAMP")
            post.style.position = "relative";
            post.style.left = "10%";
            post.style.marginTop = "50px";
            post.style.maxWidth = "78%";
            post.style.minHeight = "12%";
            post.style.padding = "10px";
        } else {
            console.log("pog")
            post.style.position = "relative";
            post.style.left = "25%";
            post.style.marginTop = "50px";
            post.style.maxWidth = "50%";
            post.style.minHeight = "12%";
            post.style.padding = "10px";
        }

        laughE.style.width = "3%";
        laughE.style.height = "3%";
        laughE.style.cursor = "pointer";

        shareE.style.width = "3%";
        shareE.style.height = "3%";
        shareE.style.paddingLeft = "5px";
        shareE.style.cursor = "pointer";

        userE.textContent = "@" + user;
        contentE.textContent = content

        document.body.appendChild(post);


    }
}
