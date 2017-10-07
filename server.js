/**
 * Created by riyapannu on 24/07/17.
 */
var express=require('express');

var app=express();

app.use('/',express.static('public_static'));

var port=process.env.PORT || 5000;
app.listen(port, function(){
    console.log("server is listening at port "+port)
});