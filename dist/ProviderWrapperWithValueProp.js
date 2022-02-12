"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderWrapperWithValueProp = void 0;
var react_1 = __importDefault(require("react"));
var ProviderWrapperWithValueProp = function (_a) {
    var children = _a.children, value = _a.value, RealProvider = _a.RealProvider;
    return (react_1.default.createElement(RealProvider, { value: value }, children));
};
exports.ProviderWrapperWithValueProp = ProviderWrapperWithValueProp;
