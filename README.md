# FabricJestTestImports

Demonstration that tests don't work out of the box with the Office UI
because some imports reference module versions of the built files
even in the commonjs built files.

## Repro steps

1. Run `npm install` to install the dependencies.
2. Run `npm run test` to run the tests. You will see the following output:

```bash
$ npm run test

> fabric-test@1.0.0 test /home/gif/dev/fabric-test
> jest

 FAIL  src/MyComponent.test.tsx
  ● Test suite failed to run

    /home/gif/dev/fabric-test/node_modules/office-ui-fabric-react/lib/Styling.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import './version';
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:579:25)
      at Object.<anonymous> (node_modules/office-ui-fabric-react/lib-commonjs/components/FloatingPicker/src/components/FloatingPicker/Suggestions/SuggestionsControl.tsx:13:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.276s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! fabric-test@1.0.0 test: `jest`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the fabric-test@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/gif/.npm/_logs/2019-10-23T18_39_00_173Z-debug.log

```

## Commands

| Command | Description                                                                  |
| ------- | ---------------------------------------------------------------------------- |
| `build` | Builds the bundle for use in production.                                     |
| `start` | Creates a simple website that will update when changes to the code are made. |
| `test`  | Run unit tests.                                                              |
