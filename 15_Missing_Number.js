const missingNumber = arr => {

    let n = arr.length + 1;
    const expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let i=0; i<arr.length; i++){
        actualSum += arr[i]
    }

    console.log(`Missing Number is ${expectedSum - actualSum}`)
}

missingNumber([1,2,3,5,6,7])