function countOccourances(str, char){
    let letters = str.split("");
    let count = 0;
    
    for(let i=0; i < letters.length; i++){
        if(letters[i] === char){
            count += 1;
        }
    }
    return(count);
}

countOccourances("vivevVk", "v")