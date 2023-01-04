let start = 0;
let swappedName = "elZerO";



let word = [];
for (let i = start; i < swappedName.length ; i++ ) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        word.push(swappedName[i].toLowerCase())
    }else {
        word.push(swappedName[i].toUpperCase());
    }
}
let final = word.join("");
console.log(final);


// Output "ELzERo"