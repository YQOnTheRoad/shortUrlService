var express=require('express');
var router=express.Router();
var urlService=require('../services/urlService.js');

router.get("*",function(req,res){
    var shortUrl=req.originalUrl.slice(1);//originalUrl is path including all router paths and query strings.
    var longUrl=urlService.getLongUrl(shortUrl);
    //console.log(longUrl);
    if (longUrl){
    res.redirect(longUrl);
    }
//    console.log({originalUrl:res.originalUrl});
//    res.send("Hello.");
});

module.exports=router;