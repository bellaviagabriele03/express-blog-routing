import posts from "../data/data.js";

import express from "express";

const rounter = express.Router();


//INDEX 
rounter.get("/", (req, res) => {
    res.json(posts)
})

//SHOW 

//STORE

//UPDATE

//MODIFY

//DESTROY 



export default rounter;