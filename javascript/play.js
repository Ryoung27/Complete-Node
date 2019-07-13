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

