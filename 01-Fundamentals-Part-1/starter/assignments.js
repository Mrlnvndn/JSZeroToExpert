/*
// assignment 1
let country = "The Netherlands";
const continent = "Europe";
let population = 18;

console.log("Country: " + country + ", Continent: " + continent + ", Population: " + population)

//assignment 2
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Assignment 3

language = "english";

//continent = "Australia"

//Assignment 4
let halfPopulation = population / 2;
population += 1;

console.log(population);
console.log(population > 6);
console.log(population < 33);

//let description = country + " is in " + continent + " and its " + population + " million people speak " + language

let description = `${country} is in ${continent} and its ${population} million people speak ${language}`
console.log(description);

//Coding Challenge #1
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

//Assignment 5
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

//Coding Challenge #2
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
}

//Assignment 6
4
'617'
23
false
1143

//Assignment 7
const numNeighbours = Number(prompt('How may neighbouring courtries does your country have?'))

if (numNeighbours === 1) {
    console.log("Only 1 border!")
} else if (numNeighbours > 1) {
    console.log("more than 1 border")
} else if (numNeighbours === 0) {
    console.log("no borders")
}


//Assignment 8
if (language === "english" && population < 50 && !isIsland) {
    console.log(`${country} is the right country!`)
} else {
    console.log(`${country} does not meet your criteria`)
}

//Coding Challenge #3
let dolphinsScore = [81, 108, 100];
let koalasScore = [108, 80, 100];


let dolphinsTotal = 0;
let koalasTotal = 0;

for (let i = 0; i < dolphinsScore.length; i++) {
    dolphinsTotal += dolphinsScore[i];
}
for (let i = 0; i < koalasScore.length; i++) {
    koalasTotal += koalasScore[i];
}

let dolphinsAvg = dolphinsTotal / dolphinsScore.length;
let koalasAvg = koalasTotal / koalasScore.length;


if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log(`Koalas win! (${koalasAvg} > ${dolphinsAvg})`);
} else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolhpins win! (${dolphinsAvg} > ${koalasAvg})`);
} else if (dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log(`It's a draw! (${koalasAvg} = ${dolphinsAvg})`)
} else {
    console.log(`No winner!`)
}

//assignment 9

const language = `mandarin`;

switch (language) {
    case 'mandarin':
    case 'chinese':
        console.log(`MOST number of native speakers`)
        break;
    case 'english':
        console.log('3rd place')
        break;
}

//assignment 10
let population = 35

console.log(`Portugal's population is ${population > 33 ? 'above' : 'below'} average`)

*///
const bill = 200;
const tip = (bill > 50 && bill < 300) ? bill * 0.15 : bill * 0.20;

console.log(tip)