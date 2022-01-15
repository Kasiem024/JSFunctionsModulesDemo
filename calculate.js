'use strict';

import { arrBases, arrUniqueCars } from './one.js';

console.log('calculate.js is alive');

const functionBtnClickCalcBases = () => {

    document.getElementById('divShowBases').innerHTML = null;

    arrBases.forEach(element => {

        const li = document.createElement('li');
        li.textContent = `${Math.sqrt(element)} (${element})`;
        document.getElementById('divShowBases').appendChild(li);
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

export { funcBtnClickShowCars, functionBtnClickCalcBases };