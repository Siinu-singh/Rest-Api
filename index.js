const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let post = [
    {
        username: "Suraj Kumar",
        post: "This is my first post"
    },
    {
        username: "Payal Suraj",
        post: "I Love You Suraj. This is my first post."
    },
    {
        username: "Sumit Singh",
        post: "I am a B.Com Student. I am thrird year student."
    },
    {
        username: "Chandni Singh",
        post: "MY name is chandni singh. I am a student of BCA."
    },
]
app.get("/post", (req, res) => {
    res.render("index.ejs",{post: post});
});

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
