import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
const numbers = new NumberCollection([101, 3, -5, 0]);
const sorter = new Sorter(numbers);

sorter.sort();
console.log(numbers.data);
