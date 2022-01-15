'use strict';

import { funcBtnClickShowCars, functionBtnClickCalcBases } from './calculate.js';

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

    arrUniqueCars = [];

    let arrTemp = [...new Set(arrAllCars.map(item => item))];

    arrTemp.forEach(element => {
        arrUniqueCars.push({ "make": element, "counter": 0 });
    });

    arrUniqueCars.forEach(element1 => {
        let counterUnique = 1;

        arrAllCars.forEach(element2 => {

            if (element2 == element1.make) {
                element1.counter = counterUnique;
                counterUnique++;
            }
        });
    });
}

const functionBtnClickAddBases = () => {

    const currentValue = document.getElementById('inputBases').value;

    const tempArr = currentValue.split(' ');

    tempArr.forEach(element => {

        element *= element;
        arrBases.push(parseInt(element));
    });

    arrBases.sort((first, second) => first - second);
}

export { arrAllCars, arrBases, arrUniqueCars };