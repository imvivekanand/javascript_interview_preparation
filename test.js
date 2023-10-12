// function greet() {
//     console.log(this.name);
//   }
  
//   const person = {
//     name: "John",
//     sayHello: greet,
//   };

//   const me = {
//     name: "Vivek",
//     what: greet
//   }
  
//   person.sayHello(); // 'this' inside greet refers to 'person' object
//   me.what();
// function mapping(n){
// let arr = [];

// for(let i = 1; i<=n; i++){
//   arr.push(i)
// }

// let initial = 1;
// let result = arr.reduce((Accu,Curr)=>{return Accu * Curr} , initial)

// console.log(result);
// }

// var v = new Promise(function(a, b){
//   return a("done")
// })

// v.then(function(data){
//   console.log(data);
// })


// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }

// console.log(reverseBySeparator(string, " "));

// mapping(5)

// function a(str){
  // let b = str.split("a").join("m").toUpperCase();
  // console.log(b);
  // return str.replace(/a/g,"m").toUpperCase();
  // return str.replace("a","m").toUpperCase();
// }
// console.log(a("Almabetter"));

function generateFibonacciSeries(n) {
  let fibSeries = [];
  if (n >= 1) {
    fibSeries.push(0);
  }
  if (n >= 2) {
    fibSeries.push(1);
  }
  for (let i = 2; i < n; i++) {
    const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
    if (nextFib <= n) {
      fibSeries.push(nextFib);
    } else {
      break;
    }
  }
  return fibSeries;
}

const n = 100; // Change 'n' to the desired number
const fibonacciSeries = generateFibonacciSeries(n);

console.log("Fibonacci series up to " + n + ":");
console.log(fibonacciSeries);
