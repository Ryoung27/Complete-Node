var name = 'Richie';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return 'Name is ' + userName + ', age is ' + userAge + ' has hobbies ' + userHasHobby;
}

console.log(summarizeUser(name, age, hasHobbies))
console.log(summarizeUser('Ronnie', '30', false))