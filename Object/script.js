/****************************************************  Object  ***********************************************************/

// 1. Create an object representing a person with properties name, age, and city. Print out the person's name.

const name = {
    myName: "Ganpat",
    age: 20,
    city: "Deesa",
}

// console.log(name.myName)
// console.log(name.age)
// console.log(name.city)


// 2. Create a function that takes an object as a parameter and returns the number of properties in the object.

function returnProprties(obj) {
    return Object.getOwnPropertyNames(obj)
    // return Object.keys(obj)
}

console.log(returnProprties(name));


// 3. Write a function that takes two objects as parameters and returns a new object that contains only the properties that are common to both objects.

const obj1 = {
    age: 20,
    city: "Deesa",
}

const names = {
    myName: "Ganpat",
    age: 20,
    city: "Deesa",
}

function returnSameProparty(obj1, obj2) {

    return (obj1, obj2)
}

console.log(returnSameProparty(obj1, names));





const object1 = { Name: "Rahim", City: 'abc', Country: "India" };
const object2 = { Name: "Rahim", City: 'abc', Country: "India" };

console.log(isEqual(object1, object2));




