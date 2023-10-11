function arrayIntersection(arr1, arr2){
    const newArr = [];

    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i]) && !newArr.includes(arr1[i])){
            newArr.push(arr1[i])
        }
    }
    console.log(newArr)
}

arrayIntersection([1, 2, 4, 8], [2, 4, 6, 8, 10])