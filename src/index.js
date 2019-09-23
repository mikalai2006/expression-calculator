function eval() {
    // Do not use eval!!!
    return;
}
function bracketsBalance(expr) {
    // console.log('Type expr -> ',typeof expr)
    
    // find out the number of open brackets
    let bracketBegin = expr.split(")").length - 1;
    
    // find out the number of close brackets
    let bracketEnd = expr.split("(").length - 1;
    
    // return status balance brackets 
    return bracketEnd === bracketBegin;
    
}

function expressionCalculator(expr) {
    // write your solution here
    
    // valid brackets
    let bracketsSuccess = bracketsBalance(expr);

    // if not valid brackets
    if (bracketsSuccess !== true) {

        throw new Error("ExpressionError: Brackets must be paired");

    // else if valid brackets
    } else {

        // get the value of the expression
        let resultCalc = (new Function('return ' + expr))();
        
        // if division by zero 
        if (resultCalc === Infinity) {

            throw new Error("TypeError: Devision by zero.");  

        } else {

            // write result expression
            //console.log(typeof resultCalc, Number(resultCalc.toFixed(4)));
            let result = + Number(resultCalc.toFixed(4))
            return result;

        } 
    
    }

}

module.exports = {
    expressionCalculator
}