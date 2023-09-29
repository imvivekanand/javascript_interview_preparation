// function findMaxNumber(arr){
//     console.log(Math.max(...arr));
// }

function findMaxNumber(arr){
    let max = arr[0];

    for(let i=1; i < arr.length; i++){
        if(max < arr[i]){
           max = arr[i]
        }
    }
    console.log(max);
}

findMaxNumber([12, 5, 393, 55, 65, 9, 1])