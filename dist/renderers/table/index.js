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
var html_react_parser_1 = __importDefault(require("html-react-parser"));
var THead = function (_a) {
    var row = _a.row;
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null, row === null || row === void 0 ? void 0 : row.map(function (cell, i) { return (react_1.default.createElement("th", { key: "".concat(i), scope: "col" }, (0, html_react_parser_1.default)(cell))); }))));
};
var Tr = function (_a) {
    var row = _a.row, withHeadings = _a.withHeadings;
    return (react_1.default.createElement("tr", null, row.map(function (cell, i) {
        return i === 0 && withHeadings ? (react_1.default.createElement("th", { key: i, scope: "row" }, (0, html_react_parser_1.default)(cell))) : (react_1.default.createElement("td", { key: i }, (0, html_react_parser_1.default)(cell)));
    })));
};
var Table = function (_a) {
    var data = _a.data, _b = _a.className, className = _b === void 0 ? '' : _b;
    var tableprops = {};
    if (className) {
        tableprops.className = className;
    }
    var content = (data === null || data === void 0 ? void 0 : data.withHeadings) ? data === null || data === void 0 ? void 0 : data.content.slice(1) : data === null || data === void 0 ? void 0 : data.content;
    var header = (data === null || data === void 0 ? void 0 : data.withHeadings) ? data === null || data === void 0 ? void 0 : data.content[0] : data === null || data === void 0 ? void 0 : data.header;
    var withRowHeadings = !!(data === null || data === void 0 ? void 0 : data.header);
    return (react_1.default.createElement("table", __assign({}, tableprops),
        react_1.default.createElement(react_1.default.Fragment, null,
            (data === null || data === void 0 ? void 0 : data.caption) && react_1.default.createElement("caption", null, (0, html_react_parser_1.default)(data.caption)),
            header && react_1.default.createElement(THead, { row: header })),
        react_1.default.createElement("tbody", null, content === null || content === void 0 ? void 0 : content.map(function (row, i) { return (react_1.default.createElement(Tr, { key: i, row: row, withHeadings: withRowHeadings })); })),
        (data === null || data === void 0 ? void 0 : data.footer) && (react_1.default.createElement("tfoot", null,
            react_1.default.createElement(Tr, { row: data === null || data === void 0 ? void 0 : data.footer, withHeadings: withRowHeadings })))));
};
exports.default = Table;
//# sourceMappingURL=index.js.map