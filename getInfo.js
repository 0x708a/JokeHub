class Info {
    constructor() {
        this.posts = ""
        this.p = ""
    }

    async getPosts() {
        let response = await fetch("server url")
        this.posts = JSON.parse(await response.text());
        console.log(this.posts)
        if (response.ok) {
            let json = await response.text;
        } else {
            alert("HTTP-Error: " + response.status);
        }

    }
}
