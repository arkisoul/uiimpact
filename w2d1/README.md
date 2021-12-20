# Modules in Nodejs

- Javascript did not have any inbuild mechanism for creating modules till es5 version.
- Some pattern were developed by the community members.
  - CommonJS pattern
  - UMD pattern
- With es6 we got esm.

## Nodejs modules

- Nodejs picked up the common js pattern for creating modules.
- Every single js or ts file that includes either a import or export or both the statements.

```javascript
(function (module.exports, require, module, __filename, __dirname) {
})
```

```javascript
(function (exports, require, module, __filename, __dirname) {
    const someFun = require("./somefun.js")
  const MYVAR = "Hello World!";

  const myFun = () => {
    return MYVAR;
  };

  exports.aFun = myFun;
  exports.aVar = MYVAR;
  module.exports = myFun;
  module.exports.aFun = myFun;
  module.exports.aVar = MYVAR;
  module.exports = {
    myFun,
    MYVAR,
  };
});
```
