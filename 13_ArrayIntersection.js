// function arrayIntersection(arr1, arr2){
//     const newArr = [];

//     for(let i=0; i<arr1.length; i++){
//         if(arr2.includes(arr1[i]) && !newArr.includes(arr1[i])){
//             newArr.push(arr1[i])
//         }
//     }
//     console.log(newArr)
// }


const arrayIntersection = (arr1, arr2) => {
    const set1 = new Set(arr1);

    const intersectionArr = [];

    for (let num of arr2) {
        if (set1.has(num)) {
            intersectionArr.push(num)
        }
    }
    console.log(intersectionArr);
}

arrayIntersection([1, 2, 4, 8], [2, 4, 6, 8, 10])
