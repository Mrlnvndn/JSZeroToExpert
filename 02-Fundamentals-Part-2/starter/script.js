'use strict';
/*
//Assignment 1
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million poeple and its capital city is ${capitalCity}`
}

console.log(describeCountry(`Belgium`, 12, `Brussels`))

//Assignment 2
function percentageOfWorld1(population) {
    return `${population / 7900 * 100}%`
}

console.log(percentageOfWorld1(1441))

const percentageOfWorld2 = function (population) {
    return `${population / 7900 * 100}%`
}

console.log(percentageOfWorld2(1441))

//Assignment 3
const percentageOfWorld3 = population => `${population / 7900 * 100}%`

console.log(percentageOfWorld3(1441))

// coding challenge 1

function calcAverage(score1, score2, score3) {
    return score1 + score2 + score3
}

function checkWinner(average1, average2) {
    return average1 > 2 * average2 ? average1 : average2 > 2 * average1 ? average2 : null;
}

const avgDolphins = calcAverage(12, 234, 12)
const avgKoalas = calcAverage(34, 36, 23)

console.log(`${checkWinner(avgKoalas, avgDolphins)} won (${avgDolphins} ${avgKoalas})`)

// coding challenge 2

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.20;

console.log(calcTip(100))

const bills = [125, 555, 44]
let tips = [];

function calcTips(bills) {

    for (let i = 0; i < bills.length; i++) {
        tips.push(calcTip(bills[i]));
    }
    return tips;
}

console.log(`alle tips: ${calcTips(bills)}`)


//  coding challenge 3

const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
}

const John = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }
}

if (John.calcBMI() > Mark.calcBMI()) {
    console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`);
} else {
    console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI}) `);
}
*/
// coding challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.20;

function calcTips(bills) {
    for (let i = 0; i < bills.length; i++) {
        tips.push(calcTip(bills[i]));
        totals.push(tips[i] + bills[i]);
    }
}

calcTips(bills);
console.log(tips)
console.log(totals)

function calcAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length
}

console.log(calcAverage(totals))