import express from "express";

let day="";
let ads="";
const app = express();
const port = 3000;
function advixe(req,res,next){
    const date = new Date;
    let days = date.getDay();
    if (days>=1&&days<=5) {
        day="weekday";
        ads="padhle";
    }
    else {
        day="weekend";
        ads="sweta";
    }
    next();
}
app.use(advixe);
app.get("/",(req,res)=>{
    res.render("index.ejs",{daytype: day,advice: ads});
})
app.listen(port, ()=>{
    console.log(`Port running on ${port}`);
});