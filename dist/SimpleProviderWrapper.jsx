"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleProviderWrapper = void 0;
var SimpleProviderWrapper = function (_a) {
    var RealProvider = _a.RealProvider, children = _a.children, value = _a.value;
    return (<RealProvider value={value}>{children}</RealProvider>);
};
exports.SimpleProviderWrapper = SimpleProviderWrapper;
