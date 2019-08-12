/// <reference path="../storage.ts" />
import { assert } from "chai";
import {StorageModule} from "../storage";
import StorageClass = StorageModule.StorageClass;

describe("StorageClass", function () {

    beforeEach(() => console.log('test begin'));
    afterEach(() => console.log('test end'));

    it("initialising", function () {
       let data = {'1': 1, '2': 2};
       let storage = new StorageClass(data);
       assert.strictEqual(data, storage.getData());
    });

    it("adding element works", function () {
       let data = {};
       let storage = new StorageClass(data);
       storage.addElement(1,1);
       assert.include(Object.keys(storage.data), '1')
    });

    it("adding element allow to work with element", function () {
        let data = {};
        let storage = new StorageClass(data);
        storage.addElement(1,111);
        assert.strictEqual(storage.getElement('1'), 111);
    });

    it("adding element increase data.length", function () {
        let data = {};
        let length1 = Object.keys(data).length;
        let storage = new StorageClass(data);
        storage.addElement(1, 1);
        assert.isAbove(Object.keys(storage.data).length, length1)
    });

    it("delete element from data(not empty) decrease data.length", function () {
        let data = {'1': 1, '2': 2};
        let storage = new StorageClass(data);
        let length1 = Object.keys(data).length;
        storage.delElement('1');
        assert.isBelow(Object.keys(storage.data).length, length1);
    });

    it("delete element return null")
});