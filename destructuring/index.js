import animals, {useAnimals} from "./animal.js";

//Destructuring an array
const [billi, kutta] = animal;
// console.log(billi);

//Destructuring an object
const {age, name, breed, feedingRequirements: {food, water}} = billi;
// console.log(breed, age, name, food, water);

//Provide alternative variable name.
//Added a new value to age as default value to the dog.
const{name: dogName, age: dogAge = 12} = kutta;
// console.log(dogName, dogAge);


const[animal, makeSound] = useAnimals(billi);
console.log(animal);
makeSound();