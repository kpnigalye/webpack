function createQuote(quote, callback) {
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}

function logQuote(quote) {
    console.log(quote);
}

createQuote("dont give up on your dreams!", logQuote);
createQuote("follow your dreams!", logQuote);