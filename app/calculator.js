class Calculator  {
    constructor() {
    };
    add(num1 , num2 ){

        if(typeof num1 !== "number" || typeof num2 !== "number"){
            return "something went wrong";
        }else {
            const sum = num1 + num2;
            if(sum === Number.MAX_SAFE_INTEGER || sum === Number.MIN_VALUE){
                return "maybe it is not correct  " + sum ;
            }else {
                return sum;
            }
        }
    }


    multiply(num1 , num2){
        if(typeof num1 !== "number" || typeof num2 !== "number") {
            return "something went wrong";
        }
        else {
            return num1 * num2;
        }
    }
};


module.exports = Calculator;