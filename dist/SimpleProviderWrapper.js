"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleProviderWrapper = void 0;
var react_1 = __importDefault(require("react"));
var SimpleProviderWrapper = function (_a) {
    var RealProvider = _a.RealProvider, children = _a.children, value = _a.value;
    return (react_1.default.createElement(RealProvider, { value: value }, children));
};
exports.SimpleProviderWrapper = SimpleProviderWrapper;
