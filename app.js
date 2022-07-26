const express =require("express");
const bodyParser = require("body-parser");
const app=express();
let ejs = require('ejs');
var items=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var today=new Date();
    var object={
        weekday: "long",
        day :"numeric",
        month: "long",
    }
    
     var day = today.toLocaleDateString("en-us",object);
    res.render('list', {dayofweek: day, NewListItem: items });
    
});
app.post("/",function(req,res){
    let item = req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
});
app.listen(2000,function(){
    console.log("server is starting on port 2000");
});