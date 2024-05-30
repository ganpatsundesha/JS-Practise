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

// console.log(returnProprties(name));


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

// console.log(returnSameProparty(obj1, names));





const object1 = { Name: "Rahim", City: 'abc', Country: "India" };
const object2 = { Name: "Rahim", City: 'abc', Country: "India" };

// console.log(isEqual(object1, object2));





//  4. Create a JavaScript object named car with properties make, model, and year. Then, write a function to return the value of the model property.

const car = {
    make: 2024,
    model: "Mercedis mybatch",
    year: 2023,
}

function getModel(obj) {
    return obj.model
}

// console.log(getModel(car));


// 5. Add a method getFullName to the person object that returns the full name (concatenation of first and last name). Example person = {firstName: "John", lastName: "Doe"}.

const person = {
    fName: "Ganpat",
    lName: "Sundesha",
    fullName() {
        return this.fName + " " + this.lName
    }
}

// console.log(person.fullName());



// 6. Write a function that takes an object and a key-value pair and adds the pair to the object. If the key already exists, update the value.





//  7. create a function multuplayByTwo(obj) that ultiplies all numerical property values of nums by 2.

let nums = {
    a: 100,
    b: 200,
    c: "20",
}

function multuplayByTwo(par) {
    for (key in par) {
        if (typeof par[key] === "number") {
            par[key] *= 2
        }
    }
}

multuplayByTwo(nums);
// console.log(nums);


// 8. what will be output of the following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" }

a[b] = 123;
a[c] = 456;

// console.log(a[b]);


// 9. What is JSON.stringify and JSON.prse?

//   =>  JSON.stringify is use for convert obj to string
//   =>  JSON.prse is use for convert string obj to real obj 


// 10. What's the output?

// console.log([..."ganpat"]);
// console.log(...{ a: "test", b: "test2" });


//  11. What's the output?

const settings = {
    userName: "Ganpat",
    level: 1,
    health: 80,
};

const data = JSON.stringify(settings, ["level", "health"])
const data2 = JSON.stringify(settings, ["test", "level", "health"])
// console.log(data);
// console.log(data2);




//  12. What's the output?

const shape = {
    redius: 10,
    diametor() {
        return this.redius * 2
    },
    perimeter: () => 2 * Math.PI * this.redius
};

// console.log(shape.diametor());
// console.log(shape.perimeter());

// in 2nd case function refur to the window object thats why it is going you this result. this.redius is not number because this is not exist in this case 





//  13. What is destructuring in Object?

let user = {
    myName: "Ganpat",
    age: 24,
}

const { myName, age } = user

// console.log(myName);

// You can change this variable name also

const { myName: gNmae } = user
// console.log(gNmae);


// For furture nested destructuring


let user1 = {
    myName: "Ganpat",
    age: 24,
    fullName: {
        first: "Ganpat",
        last: "Sundesha",
    },
};

const { fullName: { first }, } = user1

// console.log(first);



// 14. What's the output?

function getItems(fruitlist, favoriteFruit, ...args) {
    return [...fruitlist, ...args, favoriteFruit]
}

// console.log(getItems(["banana", "apple"], "pear", "orange"));




// 15. What's the output?

let d = { greeting: "Hey!" }
let e;

e = d;
d.greeting = "hello";
// console.log(e.greeting);





// 16. What's the output?

// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});





// 17. What's the output?

let person1 = { name: "Ganpat" };
const members = [person1]

person1 = null

// console.log(members);




// 18. What's the output?

const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
}

// multiply()
// multiply()
// multiply(value)
// multiply(value)






// 19. What's the output?

function changeAgeRefrence(people) {
    people.age = 25;
    people = {
        name: "Ganpat",
        age: 24,
    };
    return people
}

const personObj1 = {
    name: "alex",
    age: 29
}

const personObj2 = changeAgeRefrence(personObj1)

// console.log(personObj1);
// console.log(personObj2);





// 20  What is Shallow and deep Copy?




// 21 How to clone / deep copy an Object?

let user2 = {
    name: "Ganpat",
    age: 24,
}

//    * note: this will not clone nested Object

//  way 1

const objClone = Object.assign({}, user2)
objClone.name = "Sundesha"

// console.log(objClone);
// console.log(user2);

// Wya 2:-  this is also not clone nested Object


let user3 = {
    name: "Ganpat",
    age: 24,
    fullName: {
        name1: "try",
        name2: "try2"
    }
}
const objClone2 = { ...user2 }

// console.log(objClone2);