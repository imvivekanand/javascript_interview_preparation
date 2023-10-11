//Fix the error not working

const findMissingLetter = (arr) => {
    let start = arr[0].charCodeAt(0);

    // console.log(start);

    for(let i=0; i < arr.length; i++){
        const current = arr[i].charCodeAt(0);
        // console.log(current);

        if(current - start > 1){
            return String.fromCharCode(start + 1);
        }
        start = current;
    }
    console.log("");
}

findMissingLetter(["v", "w", "y", "z"])