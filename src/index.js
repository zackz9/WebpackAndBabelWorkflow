import {addTitle, bodyStyling, thisTitle} from './dom';
import dataCars, {getTunnedCars} from './data';
console.log('index file');

bodyStyling();
addTitle('Webpack example from index FILE');

console.log(thisTitle);

const tunedCars = getTunnedCars(dataCars)
console.log(dataCars, tunedCars);

console.log('test');