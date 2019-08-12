"use strict";
exports.__esModule = true;
/// <reference path="../storage.ts" />
var chai_1 = require("chai");
var storage_1 = require("../storage");
var StorageClass = storage_1.StorageModule.StorageClass;
var data = {};
var storage = new StorageClass(data);
describe("StorageClass", function () {
    beforeEach(function () { return console.log('test begin'); });
    afterEach(function () { return console.log('test end'); });
    // it("add element", function () {
    //
    // });
    it("delete element", function () {
        var length1 = Object.keys(storage.getData()).length;
        storage.delElement('1');
        chai_1.assert.strictEqual(Object.keys(storage.getData()).length, --length1);
    });
});
