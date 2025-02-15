"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Delimiter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var props = {};
    if (className) {
        props.className = className;
    }
    return react_1.default.createElement("hr", __assign({}, props));
};
exports.default = Delimiter;
//# sourceMappingURL=index.js.map