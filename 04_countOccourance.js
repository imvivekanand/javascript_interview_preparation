// function countOccourances(str, char){
//     let count = 0;
    
//     for(let i=0; i < str.length; i++){
//         if(str[i] === char){
//             count ++;
//         }
//     }
//     console.log(count);
// }

function countOccourances(str, char){
    let letters = str.split(char).length - 1;
    console.log(letters);
    // let count = 0;
    
    // for(let i=0; i < letters.length; i++){
    //     if(letters[i] === char){
    //         count += 1;
    //     }
    // }
    // console.log(count);
}

countOccourances("vivek", "v")