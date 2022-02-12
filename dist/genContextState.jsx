"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genStateContext = void 0;
var react_1 = require("react");
var genContext_1 = __importDefault(require("./genContext"));
var genStateContext = function (defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return genContext_1.default(function (_a) {
        var RealProvider = _a.RealProvider, children = _a.children;
        return (<RealProvider value={react_1.useState(defaultValue)}>{children}</RealProvider>);
    });
};
exports.genStateContext = genStateContext;
