function countVowels(str){
    let formattedStr = str.toLowerCase();
    let count = 0;

    for(let i=0; i < formattedStr.length; i++){
        const char = formattedStr[i]

        if (
            char == "a" ||
            char == "e" ||
            char == "i" ||
            char == "o" ||
            char == "u"
        ){
            count++;
        }
    }
    console.log(count);
}

countVowels("Vivek")