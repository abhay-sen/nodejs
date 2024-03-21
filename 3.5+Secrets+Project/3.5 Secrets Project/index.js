//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var result = "";
app.use(bodyParser.urlencoded({extended:true}));
function validate(req,res,next){
    
    if(req.body["password"]=="iloveprogramming"){
        result = "/public/secret.html";
    }
    else{
        result = "/public/index.html";
    }
    
    next();

}
app.use(validate);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/check",(req,res)=>{
    res.sendFile(__dirname+ result);

});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});