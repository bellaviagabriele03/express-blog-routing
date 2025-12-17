console.log("Hello Boolean !!");

import { log } from "console";
import express from "express"
import { title } from "process";

//express senza sicilia (questo mi fa male...)
const app = express();
const port = 3000;

//per rendere la cartella public publica (mano sui capelli...)
//url per le immagini: localhost:3000/images/ciambellone.jpeg ----> restituisce l'immagine !!!!!!!
app.use(express.static("public"));

//API base che restituisce la scritta: "IL MIO SERVER"
app.get("/", (req, res) => {
    res.send("IL MIO SERVER")
})




app.get("/bacheca", (req, res) => {
   const tag = req.query.tag
   console.log(tag);
   
   res.json(posts)
})



//ascolto del server (ma c'è davvero bisogno di spiegare tutto ? )
app.listen(port, () => {
    console.log(`Server avviato con successo nella porta ${port}`);

})

