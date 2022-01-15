'use strict';

let arrAllCars = [],
    arrUniqueCars = [],
    arrBases = [];

console.log('one.js is alive');

window.onload = () => {

    document.getElementById('btnAddCar').addEventListener('click', functionBtnClickAddCar);

    document.getElementById('btnShowCars').addEventListener('click', funcBtnClickShowCars);

    document.getElementById('btnAddBases').addEventListener('click', functionBtnClickAddBases);

    document.getElementById('btnCalcBases').addEventListener('click', functionBtnClickCalcBases);
}

const functionBtnClickAddCar = () => {

    const currentValue = document.getElementById('inputCar').value;

    arrAllCars.push(currentValue);

    // arrUniqueCars = [...new Set(arrAllCars.map((item) => item))];

    let temp = arrUniqueCars.find(element => element.make == currentValue);

    if (temp == undefined) {
        arrUniqueCars.push({ "make": currentValue, "counter": 0 });
    }

    arrUniqueCars.forEach(element2 => {
        let counterUnique = 1;

        arrAllCars.forEach(element1 => {

            if (element1 == element2.make) {
                element2.counter = counterUnique;
                counterUnique++;
            }
        });
    });
}

const funcBtnClickShowCars = () => {

    document.getElementById('divShowCars').innerHTML = null;

    arrUniqueCars.forEach(element => {
        const li = document.createElement('li');
        li.textContent = `There are ${element.counter} ${element.make}`;
        document.getElementById('divShowCars').appendChild(li);
    });
}

const functionBtnClickAddBases = () => {

    const currentValue = document.getElementById('inputBases').value;

    const tempArr = currentValue.split(' ');

    tempArr.forEach((element, counter) => {
        element *= element;
        arrBases.push(parseInt(element));
    });

    arrBases.sort((a, b) => a - b);
}

const functionBtnClickCalcBases = () => {

    document.getElementById('divShowBases').innerHTML = null;

    arrBases.forEach(element => {
        const li = document.createElement('li');
        li.textContent = `${Math.sqrt(element)} (${element})`;
        document.getElementById('divShowBases').appendChild(li);
    });
}