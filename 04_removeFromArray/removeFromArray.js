const removeFromArray = function(arrayToRemoveFrom) {
    const args = Array.from(arguments);
    args.shift();
    return arrayToRemoveFrom = arrayToRemoveFrom.filter( (element) => !args.includes( element ));
};

// Do not edit below this line
module.exports = removeFromArray;
