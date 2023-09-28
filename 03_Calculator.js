function calculator(num1, num2, operator){
    let result;

    if(operator === "+"){
        result = (num1 + num2);
    }
    else if(operator === "-"){
        result = (num1 - num2);
    }
    else if(operator === "*"){
        result = (num1 * num2);
    }
    else if(operator === "/"){
        result = (num1 / num2);
    }
    else{
        throw new Error("Enter a valid operator!");
    }

    return console.log(result); 
}

calculator(9, 2, "-")