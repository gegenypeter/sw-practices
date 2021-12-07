function testFor() {
    const resultArr = [];
    for (const age of ages) {
        if (age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr; 
}


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

//

const array = [2, 4, 8, 14];
const map1 = array.map(x => x*3);
console.log(map1);

const array2 = [2, 4, 8, 14];
const map2 = array2.map(myFunction);

function myFunction(num){
    return num * 5;
}

console.log(map2)

const array3 = [2, 4, 8, 14];
const map3 = array3.map((x, i) => x*i);
console.log(map3);

let array4 = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

let reformattedArray = array4.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value*10;
    return rObj
})

const numbers = [1, 25, 33, 46];
let minimum = numbers[0];


for (let i = 0; i < numbers.length; i++){
    if(minimum > numbers[i]) {
        minimum = numbers[i];
    }
}
console.log(minimum);


const reducer = (prev, curr) => Math.min(prev, curr);
minimum = numbers.reduce(reducer);

//

const names = ['Alice', 'Bob', 'Alice', 'Tiff', 'Ubul'];

const counter = {};

for (let i = 0; i < names.length; i++) {
    if(counter[names[i]]){
        counter[names[i]]++;
    }
    else {
        counter[names[i]] = 1;
    }
}


let countedNames = names.reduce(function(allNames, name){
    if(name in allNames){
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
})

let person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        "street": "Peachfield",
        "city": "Budapest",
        "country": "Hungary"
    }
}

const p1 = {...person}
console.log(p1);


const p2 = Object.assign({} ,person)

//p2.firstName = "Jane";
//p2.address.street = "Main street";

console.log("preson: ", person);
console.log("p2:", p2);

const p3 = JSON.parse(JSON.stringify(person));
console.log("p3:", p3);

p3.firstName = "Jane";
p3.address.street = "Main street";

let nums = [2, 3];
let nums2 = [1, ...nums, 4];
console.log(nums2);


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    console.log('for ciklussal', testFor());
    console.log('filterrel', result);

    function multiply(callback, a, b){
       return callback(a, b) *  10
    }

    function add(a, b){
        return a + b;
    }

    function sub(a, b){
        return a - b;
    }

    console.log(multiply(add, 2, 3));
    console.log(multiply(sub, 2, 3));

});
