const repeatString = function(phrase, repeatAmount) {
    let fullPhrase = '';
    if (repeatAmount < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < repeatAmount; i++) {
        fullPhrase += phrase;
    }
    return fullPhrase;
};

// Do not edit below this line
module.exports = repeatString;
