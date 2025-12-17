import posts from "../data/data.js";

import express from "express";

const rounter = express.Router();


//INDEX 
rounter.get("/", (req, res) => {
    const object = {
        count: posts.length,
        result: posts
    }
    res.json(object)
})

//SHOW 
rounter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)
    res.json(post)
})
//STORE

//UPDATE

//MODIFY

//DESTROY 



export default rounter;