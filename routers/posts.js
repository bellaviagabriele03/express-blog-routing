import posts from "../data/data.js";

import express, { Router } from "express";

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
rounter.post("/", (req, res) => {
    res.send("creato nuovo post")
})


//UPDATE
rounter.put("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.send("modificato il post con id:" + id)
})

//MODIFY
rounter.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.send("modica parziale del post con id:" + id)
})
//DESTROY 
rounter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    res.send("hai eliminato il post con id:" + id)
})



export default rounter;