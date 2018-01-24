var longToShortHash={};
var shortToLongHash={};

encode=[];
var genArray=function(char1,char2){
    var temp=[];
    var i=char1.charCodeAt(0);
    var j=char2.charCodeAt(0);
    if(i<j){
        for(;i<=j;i++)
        {
            temp.push(String.fromCharCode(i));
        };
    };
    return temp;
};
encode=encode.concat(genArray('0','9'));
encode=encode.concat(genArray('a','z'));
encode=encode.concat(genArray('A','Z'));


var getShortUrl=function(longUrl){
    //this URL check function need to be modified
    if(longUrl.indexOf('http')===-1){
        longUrl="http://"+longUrl;
    }
    //the following method will cause "http://www.google.com" and "https://www.google.com" generate two different items.
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
    return convertTo62(Object.keys(longToShortHash).length);
};

var convertTo62=function(num){
    result="";
    do{
        result=encode[num%62]+result;
        num=Math.floor(num/62);
    }while(num!=0);
    return result;
};

var getLongUrl=function(shortUrl){
    return shortToLongHash[shortUrl];
};

module.exports={
    getShortUrl : getShortUrl,
    getLongUrl : getLongUrl
}; 