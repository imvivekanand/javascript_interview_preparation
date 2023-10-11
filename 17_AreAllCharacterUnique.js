//fix this

function areAllCharacterUnique(str){
    const charSet = new Set();

    for(let i=0; i<str.length; i++){
        const char = str[i];

        if(charSet.has(char)){
            return false;
        }

        charSet.add(char);
    }

    return true;
}

console.log(areAllCharacterUnique("v", "i", "V", "e", "K"));