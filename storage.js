"use strict";
exports.__esModule = true;
var StorageModule;
(function (StorageModule) {
    var StorageClass = /** @class */ (function () {
        function StorageClass(data) {
            this.data = {};
            this.data = data;
        }
        StorageClass.prototype.addElement = function (key, value) {
            this.data[key] = value;
            return;
        };
        StorageClass.prototype.getElement = function (key) {
            return this.data[key];
        };
        StorageClass.prototype.delElement = function (key) {
            // if (Object.keys(this.data).length == 0)
            //     return;
            // else
            delete this.data[key];
            return;
        };
        StorageClass.prototype.resetAll = function () {
            for (var i in this.data) {
                delete this.data[i];
            }
        };
        StorageClass.prototype.getData = function () {
            return this.data;
        };
        return StorageClass;
    }());
    StorageModule.StorageClass = StorageClass;
    // storage.addElement(1, 10);
    // storage.addElement(2, 8);
})(StorageModule = exports.StorageModule || (exports.StorageModule = {}));
