var longToShortHash={};
var shortToLongHash={};


var getShortUrl=function(longUrl){
    //this URL check function need to be modified
    if(longUrl.indexOf('http')===-1){
        longUrl="http://"+longUrl;
    }
    //Q1:the following method will cause "http://www.google.com" and "https://www.google.com" generate two different items.
    if(longToShortHash[longUrl] != null ){
        return longToShortHash[longUrl];
    }else{
        var shortUrl=generateShortUrl();
        longToShortHash[longUrl]=shortUrl;
        shortToLongHash[shortUrl]=longUrl;
        return shortUrl;
    }
};

var generateShortUrl=function(){
    return Object.keys(longToShortHash).length;
};

var getLongUrl=function(shortUrl){
    return shortToLongHash[shortUrl];
};

module.exports={
    getShortUrl : getShortUrl,
    getLongUrl : getLongUrl
}; 