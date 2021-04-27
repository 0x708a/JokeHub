class Info {
    constructor() {
        this.posts = ""
        this.p = ""
    }

    async getPosts() {
        let response = await fetch("https://d2c3004b8f4d.ngrok.io/msg/get")
        this.posts = JSON.parse(await response.text());
        console.log(this.posts)
        if (response.ok) {
            let json = await response.text;
        } else {
            alert("HTTP-Error: " + response.status);
        }

    }
}
