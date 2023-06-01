const express=require("express");
const bodyParser=require("body-parser")
const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
  console.log(__dirname);
  res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res) {
  var name =req.body.name;
  var email=req.body.email;
  var password=req.body.password;
  console.log(name,email,password);
  res.sendFile(__dirname+"/index.html");
});

app.get("/signin", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/signin.html"));
});

app.listen(3000,function(){
  console.log("server is on port 3000");

});
