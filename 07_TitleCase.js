const titleCase = str => {
    let lowerCaseStr = str.toLowerCase().split(" ");

    
    for(let i=0; i < lowerCaseStr.length; i++){
        lowerCaseStr[i] = lowerCaseStr[i][0].toUpperCase() + lowerCaseStr[i].slice(1);
    }
    console.log(lowerCaseStr.join(" "));
}



titleCase("VivEk is GoinG to loNdoN")

