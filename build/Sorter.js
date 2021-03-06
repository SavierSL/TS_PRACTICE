"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var x = 0; x < length; x++) {
            for (var y = 0; y < length - 1; y++) {
                if (this.collection.compare(y, y + 1)) {
                    this.collection.swap(y, y + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
