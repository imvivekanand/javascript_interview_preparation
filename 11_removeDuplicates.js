const removeDuplicates = arr => {

    //Sol - 1

    // const uniqueArr = [];

    // for(let i=0; i< arr.length; i++){
    //     if(!uniqueArr.includes(arr[i])){
    //         uniqueArr.push(arr[i])
    //     }
    // }
    // console.log(uniqueArr);

    //Sol - 2

    console.log(new Set(arr));
}

removeDuplicates([1, 1, 4, 6, 9, 9, true, true, false, true, "vivek", "anand", "vivek"])