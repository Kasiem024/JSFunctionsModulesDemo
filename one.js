'use strict';

let testMap = new Map();

let arr = [];
let uniqueArr = [];

console.log('one.js is alive');

window.onload = () => {
    console.log('Window loaded');

    const h2 = document.createElement('h2');
    h2.textContent = "One";
    document.getElementById('content').appendChild(h2);

    const input = document.createElement('input');
    input.id = 'inputCar';
    document.getElementById('content').appendChild(input);

    const btnAdd = document.createElement('button');
    btnAdd.innerHTML = 'Add data';
    btnAdd.addEventListener('click', functionBtnAddClick)
    document.getElementById('content').appendChild(btnAdd);

    const btnCalc = document.createElement('button');
    btnCalc.innerHTML = 'Calculate';
    btnCalc.addEventListener('click', functionBtnCalcClick)
    document.getElementById('content').appendChild(btnCalc);

    const divCalc = document.createElement('div');
    divCalc.id = 'divCalc';
    document.getElementById('content').appendChild(divCalc);
}

const functionBtnAddClick = () => {

    const currentValue = document.getElementById('inputCar').value;

    arr.push(currentValue);

    // uniqueArr = [...new Set(arr.map((item) => item))];

    let test = uniqueArr.find(element => element.make == currentValue);

    if (test == undefined) {
        uniqueArr.push({ "make": currentValue, "counter": 0 });
    }

    uniqueArr.forEach(element2 => {
        let counterUnique = 1;

        arr.forEach(element1 => {

            if (element1 == element2.make) {
                element2.counter = counterUnique;
                counterUnique++;
            }
        });
    });

    console.log(uniqueArr);
}

const functionBtnCalcClick = () => {

    console.log(uniqueArr);

    document.getElementById('divCalc').innerHTML = null;

    uniqueArr.forEach(element => {
        const li = document.createElement('li');
        li.textContent = 'There are ' + element.counter + ' ' + element.make;
        document.getElementById('divCalc').appendChild(li);
    })
}