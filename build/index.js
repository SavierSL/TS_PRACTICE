"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumberCollection([101, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(numbers.data);
