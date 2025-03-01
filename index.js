const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
    {
        id: "1",
        username: "Suraj Kumar",
        post: "This is my first post"
    },
    {
        id: "2",
        username: "Payal Suraj",
        post: "I Love You Suraj. This is my first post."
    },
    {
        id: "3",
        username: "Sumit Singh",
        post: "I am a B.Com Student. I am thrird year student."
    },
    {
        id: "4",
        username: "Chandni Singh",
        post: "MY name is chandni singh. I am a student of BCA."
    },
]
app.get("/posts", (req, res) => {
    res.render("index.ejs", { post: posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    const { username, post } = req.body;
    console.log(req.body);
    posts.push({ username, post });
    console.log("post added successfully");
    res.redirect("/posts");

});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    console.log(`your id is ${id}`);
    let post = posts.find(p => p.id === id);
    res.render("show.ejs", { post });
});

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
