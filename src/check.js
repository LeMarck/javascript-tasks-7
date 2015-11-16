'use strict';

function checkContainsKeys(keys) {
    var elements = Object.keys(this);
    for (var indexElem in keys) {
        if (elements.indexOf(keys[indexElem]) == -1 && typeof keys[indexElem] != "function") {
            return false;
        }
    }
    return true;
}

function checkHasKeys(keys) {
    if (Object.keys(keys).length != Object.keys(this).length) {
        return false;
    }
    return this.checkContainsKeys(keys);
}

function checkContainsValues(values) {
    for (var indexElem in values) {
        if (this.indexOf(values[indexElem]) == -1 && typeof values[indexElem] != "function") {
            return false;
        }
    }
    return true;
}

function checkHasValues(values) {
    if (Object.keys(values).length != Object.keys(this).length) {
        return false;
    }
    return this.checkContainsValues(values);
}

function checkHasValueType(key, type) {
    return typeof this[key] === type.name.toLowerCase();
}

function checkHasLength(length) {
    return this.length === length;
}

function checkHasParamsCount(count){
    return this.length == count;
}

function checkHasWordsCount(count){
    return this.split(/\s+/).length == count;
}

exports.init = function () {

    Object.prototype.checkContainsKeys = checkContainsKeys;
    Array.prototype.checkContainsKeys = checkContainsKeys;

    Object.prototype.checkHasKeys = checkHasKeys;
    Array.prototype.checkHasKeys = checkHasKeys;

    Object.prototype.checkContainsValues = checkContainsValues;
    Array.prototype.checkContainsValues = checkContainsValues;

    Object.prototype.checkHasValues = checkHasValues;
    Array.prototype.checkHasValues = checkHasValues;

    Object.prototype.checkHasValueType = checkHasValueType;
    Array.prototype.checkHasValueType = checkHasValueType;

    Array.prototype.checkHasLength = checkHasLength;
    String.prototype.checkHasLength = checkHasLength;

    Function.prototype.checkHasParamsCount = checkHasParamsCount;

    String.prototype.checkHasWordsCount = checkHasWordsCount;
};
