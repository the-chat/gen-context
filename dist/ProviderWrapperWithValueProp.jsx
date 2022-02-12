"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderWrapperWithValueProp = void 0;
var ProviderWrapperWithValueProp = function (_a) {
    var children = _a.children, value = _a.value, RealProvider = _a.RealProvider;
    return (<RealProvider value={value}>{children}</RealProvider>);
};
exports.ProviderWrapperWithValueProp = ProviderWrapperWithValueProp;
