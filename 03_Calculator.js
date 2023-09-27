function calculator(num1, num2, operator){
    let result;

    if(operator === "+"){
        console.log(num1 + num2);
    }
    else if(operator === "-"){
        console.log(num1 - num2);
    }
    else if(operator === "*"){
        console.log(num1 * num2);
    }
    else if(operator === "/"){
        console.log(num1 / num2);
    }
    else{
        console.log("Enter a valid operator!");
    }
}

calculator(9, 2, "*")