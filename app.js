const express = require('express');
const path  = require('path');
const app = express();
const port = 3000;
 
// to srve static files 

app.use('/static',express.static("static"));

// to serve pug file
app.set('view engine', 'pug');
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
      res.status(200).render("index.pug");
});
app.get("/plants",(req,res)=>{
    res.status(200).render("plants.pug");
});
app.get("/flowerplants",(req,res)=>{
    res.status(200).render("flowerplants.pug");
});
app.get("/fruitplants",(req,res)=>{
    res.status(200).render("fruitplants.pug");
});
app.get("/vegetableplants",(req,res)=>{
    res.status(200).render("vegetableplants.pug");
});
app.get("/gardtool",(req,res)=>{
    res.status(200).render("gardtool.pug");
});
app.get("/fertilizer",(req,res)=>{
    res.status(200).render("fertilizer.pug");
});



app.listen(port,()=>{
    console.log(`services is run on ${port}`);
})