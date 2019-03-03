// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return {};
    }
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency > 0 && currency < 10000) {
        var half = 0; // 50
        var quarter = 0; // 25
        var dime = 0; // 10
        var nickel = 0; // 5
        var penny = 0; // 1
        var result = {
            "H": half,
            "Q": quarter,
            "D": dime,
            "N": nickel,
            "P": penny
        }
        half = currency % 50;
        currency = currency - half * 50;
        quarter = currency % 25;
        currency = currency - quarter * 25;
        dime = currency % 10;
        currency = currency - dime * 10;
        nickel = currency % 5;
        currency = currency - nickel * 5;
        penny = currency / 1;

        for (var key in result) {
            if (result[key] === 0 {
                delete result[key];
            })
        }

    }

    return result;
}
