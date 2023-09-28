const animals = [
    {
        name: "Billa",
        breed: "Cat",
        age: 2,
        feedingRequirements: {
            food: 2,
            water: 3
        }
    },
    {
        name: "Kutta",
        breed: "Dog",
    },
]

function useAnimals(animal) {
    return [
        animal.name,
        function () {
            console.log(animal.sound);
        }
    ]
}
export default animals;
export { useAnimals };