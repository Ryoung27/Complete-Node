const name = 'Richie';
let age = 29;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {

    return 'Name is ' + userName + ', age is ' + userAge + ' has hobbies ' + userHasHobby;
}

// const add = (a,b) => {
//     return a + b;
// }

const add = (a,b) => a +b;

console.log(add(1,2));

console.log(summarizeUser(name, age, hasHobbies))
console.log(summarizeUser('Ronnie', '30', false))

const person = {
    name: 'Richie',
    age: 29,
    greet(){
        console.log("Hi, I am " + this.name)
    }
}

console.log(person)
console.log(person.name)
console.log(person.age)
person.greet()

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2);
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// console.log(hobbies)

//Spread
const copiedArray = hobbies.slice();
console.log(copiedArray);

//Spread is a method that will pull all the properties of an array or object and basically pull it out.
const newCopiedArray = [...hobbies];
console.log(newCopiedArray)

const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));

//Destructuring

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// const { name, age } = person;
// console.log(name, age);
