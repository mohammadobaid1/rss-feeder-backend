const express = require('express');
const bodyParser = require('body-parser');
var Feed = require('rss-to-json');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });


app.get('/rssconverter',function(req,res){
//console.log(req);
 console.log('rssfeed');
Feed.load(req.query.rssurl, function(err, rss){
    res.send(rss);
});


});


app.listen(3000);