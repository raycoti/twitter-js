const express = require( 'express' );
const app = express();

app.use('/',(req,res,next)=>{
    console.log(req.method + " "  + req.path);
    next();
});
app.use('/special/',(req,res,next)=>{
    console.log("you reached the special area");
    next();
});

app.get('/welcome', (req , res)=>{
    res.send('Welcome');
});


app.listen(3000,function(){
    console.log("server listening");
});