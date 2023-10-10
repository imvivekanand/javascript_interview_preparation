const reverseString = (str) => {

    //SOl-1
    // return str.split("").reverse().join("");
    //reverse function reverse an array. We cannot reverse the string.

    //SOL-2
    // let revArray = [];

    // for(let i=str.length - 1; i >= 0; i--){
    //     revArray.push(str[i])
    // }
    // console.log(revArray.join(""));

    //SOL-3
    let revStr = "";

    for(let i=str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
    console.log(revStr);




}
reverseString("Vivek");
