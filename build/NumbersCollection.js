"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
var NumberCollection = /** @class */ (function () {
    function NumberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollection.prototype.compare = function (left, right) {
        return this.data[left] > this.data[right];
    };
    NumberCollection.prototype.swap = function (left, right) {
        var leftHand = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = leftHand;
    };
    return NumberCollection;
}());
exports.NumberCollection = NumberCollection;
