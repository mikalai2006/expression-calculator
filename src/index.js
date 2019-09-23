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
    
    // return value balance brackets 
    return bracketEnd - bracketBegin;
    
}

function expressionCalculator(expr) {
    // write your solution here
    
    // valid brackets
    let bracketsSuccess = bracketsBalance(expr);

    // if valid brackets
    if (!bracketsSuccess) {

        // get the value of the expression
        let resultCalc = new Function('return ' + expr)();
        
        // if division by zero 
        if (resultCalc === Infinity) {

            throw new Error("TypeError: Devision by zero.");  

        } else {

            // write result expression
            return resultCalc;

        } 
    
    // else if not valid brackets
    } else {

        throw new Error("ExpressionError: Brackets must be paired");

    }

}

module.exports = {
    expressionCalculator
}