"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var genContext = function (ProviderWrapper, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    var Context = react_1.createContext(defaultValue);
    var useMyContext = function () {
        return react_1.useContext(Context);
    };
    var DoneProvider = function (_a) {
        var children = _a.children, _b = _a.value, value = _b === void 0 ? defaultValue : _b;
        return (<ProviderWrapper value={value} RealProvider={Context.Provider}>
      {children}
    </ProviderWrapper>);
    };
    return [useMyContext, DoneProvider];
};
exports.default = genContext;
