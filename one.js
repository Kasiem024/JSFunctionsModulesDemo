'use strict';

let testMap = new Map();

let arr = [];
let uniqueArr = [];
let basesArr = [];

console.log('one.js is alive');

window.onload = () => {
    console.log('Window loaded');

    const br = document.createElement('br');

    const h2 = document.createElement('h2');
    h2.textContent = "One";
    document.getElementById('content').appendChild(h2);

    const input = document.createElement('input');
    input.id = 'inputCar';
    document.getElementById('content').appendChild(input);

    const btnAdd = document.createElement('button');
    btnAdd.innerHTML = 'Add Data';
    btnAdd.addEventListener('click', functionBtnAddClick)
    document.getElementById('content').appendChild(btnAdd);

    const btnCalc = document.createElement('button');
    btnCalc.innerHTML = 'Show cars';
    btnCalc.addEventListener('click', functionBtnCalcClick)
    document.getElementById('content').appendChild(btnCalc);

    document.getElementById('content').appendChild(br);

    const input2 = document.createElement('input');
    input2.id = 'inputBases';
    document.getElementById('content').appendChild(input2);

    const btnBase = document.createElement('button');
    btnBase.innerHTML = 'Add Base';
    btnBase.addEventListener('click', functionBtnBaseClick)
    document.getElementById('content').appendChild(btnBase);

    const btnCalc2 = document.createElement('button');
    btnCalc2.innerHTML = 'Calculate bases';
    btnCalc2.addEventListener('click', functionBtnCalc2Click)
    document.getElementById('content').appendChild(btnCalc2);

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

const functionBtnBaseClick = () => {

    console.log('uniqueArr');

    const currentValue = document.getElementById('inputBases').value;

    const tempArr = currentValue.split(' ');

    tempArr.forEach((element, counter) => {
        element *= element;
        basesArr.push(parseInt(element));
    });

    basesArr.sort((a, b) => a - b);

    console.log(basesArr);
}

const functionBtnCalc2Click = () => {

    console.log(uniqueArr);

    document.getElementById('divCalc').innerHTML = null;

    basesArr.forEach(element => {
        const li = document.createElement('li');
        li.textContent = `${Math.sqrt(element)} (${element})`;
        document.getElementById('divCalc').appendChild(li);
    })
}