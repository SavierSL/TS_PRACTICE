import { NumberCollection } from "./NumbersCollection";
export class Sorter {
  constructor(public collection: NumberCollection) {}
  sort(): void {
    const { length } = this.collection;
    for (let x = 0; x < length; x++) {
      for (let y = 0; y < length - 1; y++) {
        if (this.collection.compare(y, y + 1)) {
          this.collection.swap(y, y + 1);
        }
      }
    }
  }
}
