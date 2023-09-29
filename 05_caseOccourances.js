// const caseOccourances = (str, char) => {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === char){
//             count ++;
//         }
//     }
//     return(count);
// }

const caseOccourances = (str, char) => {
    return(str.split(char).length - 1);
}

caseOccourances("Vivvek", "v")