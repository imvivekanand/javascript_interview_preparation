const displayLikes = (names) => {
    const length = names.length;

    if (length == 0) {
        console.log("No one likes this.");
    } else if (length = 1) {
        console.log(`${names[0]} like this.`);
    } else if (length = 2) {
        console.log(`${names[0]} and ${names[1]} like this.`);
    } else {
        console.log(`${names[0]}, ${names[1]} and ${length - 2} others like this`);
    }


}

displayLikes(["Vivek", "Anand", "Saloni", "Priya", "Sumit"])