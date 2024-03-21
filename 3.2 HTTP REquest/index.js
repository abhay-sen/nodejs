import express from "express";
const app= express();
const port = 3000;
app.get("/",(req,res)=>{
    res.send("<h1>Ilovesweta</h1>");
});
app.get("/about",(req,res)=>{
  res.send("<h1>ABhay</h1>")
});
app.get("/contacts",(req,res)=>{
  res.send("<h1>9179001518</h1>")
});
app.listen(port, () => {
  console.log(`Server running on port ${port}.`); //callback funtion
});
