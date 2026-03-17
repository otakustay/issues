# Oxnode issue with ink

This is a simple ink app represents an issue regarding raw mode stdin.

## Oxnode

```bash
npx oxnode index.tsx
```

```
Encountered two children with the same key, `    at recursivelyTraversePassiveMountEffects (/Users/otakustay/Develop/issues/node_modules/react-reconciler/cjs/react-reconciler.development.js:12934:11)`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to

  ERROR  Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
        Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported

 - Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported\t
 - <anonymous> (node_modules/ink/src/components/App.tsx:184:12)
 - <anonymous> (node_modules/ink/src/hooks/use-input.ts:168:3)
 - Object.react_stack_bottom_frame (node_modules/react-reconciler/cjs/react-reconciler.development.js:17681:20)
 - runWithFiberInDEV (node_modules/react-reconciler/cjs/react-reconciler.development.js:2505:30)
 - commitHookEffectListMount (node_modules/react-reconciler/cjs/react-reconciler.development.js:10861:29)
 - commitHookPassiveMountEffects (node_modules/react-reconciler/cjs/react-reconciler.development.js:10948:11)
 - commitPassiveMountOnFiber (node_modules/react-reconciler/cjs/react-reconciler.development.js:12979:13)
 - recursivelyTraversePassiveMountEffects (node_modules/react-reconciler/cjs/react-reconciler.development.js:12934:11)
 - commitPassiveMountOnFiber (node_modules/react-reconciler/cjs/react-reconciler.development.js:12999:11)
 - recursivelyTraversePassiveMountEffects (node_modules/react-reconciler/cjs/react-reconciler.development.js:12934:11)
 ```

 ## Tsx

```bash
 npx tsx index.tsx
 ```

 Run success

## Node

```bash
npx tsc
node dist/index.js
```

 Run success
