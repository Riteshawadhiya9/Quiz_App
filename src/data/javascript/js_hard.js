export const jsHard = [
  {
    question: "What will be the output of the following code?\n```javascript\nconst obj = {\n  name: 'JS',\n  print: () => console.log(this.name)\n};\nobj.print();\n```",
    options: [
      "A) 'JS'",
      "B) undefined",
      "C) ReferenceError",
      "D) null"
    ],
    answer: "B) undefined",
    explanation: "Arrow functions do not have their own `this` binding. They inherit `this` from the enclosing lexical scope (which is the global object or `undefined` in strict mode), NOT the object that called the method.",
    topic: "The `this` Keyword"
  },
  {
    question: "Consider the following Event Loop code:\n```javascript\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n```",
    options: [
      "A) 1, 2, 3, 4",
      "B) 1, 4, 2, 3",
      "C) 1, 4, 3, 2",
      "D) 1, 3, 4, 2"
    ],
    answer: "C) 1, 4, 3, 2",
    explanation: "Synchronous code runs first (1, 4). Promises go to the microtask queue, which is processed immediately after the current synchronous code finishes (3). `setTimeout` goes to the macrotask queue, which is processed after the microtask queue empties (2).",
    topic: "Event Loop & Concurrency"
  },
  {
    question: "What is the output of the following snippet?\n```javascript\nconst shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());\n```",
    options: [
      "A) 20, and NaN",
      "B) 20, and 62.83",
      "C) NaN, and NaN",
      "D) TypeError"
    ],
    answer: "A) 20, and NaN",
    explanation: "`diameter` is a regular function, so `this` refers to `shape`, returning 20. `perimeter` is an arrow function, so `this` refers to the surrounding scope (window/global), where `radius` is undefined. `undefined * number` results in NaN.",
    topic: "The `this` Keyword"
  },
  {
    question: "How does `Object.create(null)` differ from `{}`?",
    options: [
      "A) They are identical.",
      "B) `{}` has a prototype chain leading to `Object.prototype`, while `Object.create(null)` has no prototype.",
      "C) `Object.create(null)` cannot store properties.",
      "D) `{}` is strictly read-only."
    ],
    answer: "B) `{}` has a prototype chain leading to `Object.prototype`, while `Object.create(null)` has no prototype.",
    explanation: "An object created with `Object.create(null)` has a completely null prototype. It lacks default methods like `toString()` and `hasOwnProperty()`, making it a pure dictionary object.",
    topic: "Prototypes & Inheritance"
  },
  {
    question: "What will be logged?\n```javascript\nlet a = 3;\nlet b = new Number(3);\nlet c = 3;\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n```",
    options: [
      "A) true, false, false",
      "B) true, true, false",
      "C) false, false, false",
      "D) true, false, true"
    ],
    answer: "A) true, false, false",
    explanation: "`a == b` is true because `==` coerces the Number object to a primitive. `a === b` is false because `b` is an object (created via `new`) and `a` is a primitive number. `b === c` is also false for the same reason.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What is the output of the following?\n```javascript\nfunction Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\nconst lydia = new Person('Lydia', 'Hallie');\nconst sarah = Person('Sarah', 'Smith');\nconsole.log(lydia);\nconsole.log(sarah);\n```",
    options: [
      "A) Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined",
      "B) Person {firstName: 'Lydia', lastName: 'Hallie'} and Person {firstName: 'Sarah', lastName: 'Smith'}",
      "C) undefined and undefined",
      "D) TypeError"
    ],
    answer: "A) Person {firstName: 'Lydia', lastName: 'Hallie'} and undefined",
    explanation: "Calling a constructor with `new` creates a new object (`lydia`). Calling it without `new` (`sarah`) invokes it as a regular function. Since `Person` has no `return` statement, it returns `undefined`.",
    topic: "The `this` Keyword"
  },
  {
    question: "What happens when you throw an error inside a Promise but there is no `.catch()` block attached?",
    options: [
      "A) The script execution halts completely.",
      "B) The error is swallowed and nothing happens.",
      "C) An UnhandledPromiseRejection warning/error is thrown in the environment.",
      "D) The `.then()` block automatically catches it."
    ],
    answer: "C) An UnhandledPromiseRejection warning/error is thrown in the environment.",
    explanation: "If a Promise rejects and there is no `.catch()` handler to intercept it, the JS engine emits an UnhandledPromiseRejection event.",
    topic: "Promises & Async"
  },
  {
    question: "What is the output of the following code?\n```javascript\nconst a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n```",
    options: [
      "A) 123",
      "B) 456",
      "C) undefined",
      "D) ReferenceError"
    ],
    answer: "B) 456",
    explanation: "Object keys are automatically converted to strings. Both `b` and `c` are objects, so they both stringify to `'[object Object]'`. Thus, `a['[object Object]'] = 123`, and then it's overwritten by `456`.",
    topic: "Arrays & Objects"
  },
  {
    question: "What will `console.log(typeof typeof 1);` output?",
    options: [
      "A) 'number'",
      "B) 'string'",
      "C) 'undefined'",
      "D) 'object'"
    ],
    answer: "B) 'string'",
    explanation: "`typeof 1` evaluates to the string `'number'`. Then, `typeof 'number'` evaluates to the string `'string'`.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What is 'currying' in JavaScript?",
    options: [
      "A) Binding an object to a function.",
      "B) Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.",
      "C) Hoisting variables to the top of the scope.",
      "D) Automatically garbage collecting unused closures."
    ],
    answer: "B) Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.",
    explanation: "Currying transforms a function `f(a, b, c)` into `f(a)(b)(c)`. It relies heavily on closures to remember the previously passed arguments.",
    topic: "Closures"
  },
  {
    question: "What will be the output?\n```javascript\nfunction sayHi() {\n  return (() => 0)();\n}\nconsole.log(typeof sayHi());\n```",
    options: [
      "A) 'function'",
      "B) 'undefined'",
      "C) 'number'",
      "D) 'object'"
    ],
    answer: "C) 'number'",
    explanation: "The IIFE `(() => 0)()` executes immediately and returns the number `0`. The outer function `sayHi()` returns that `0`. `typeof 0` is `'number'`.",
    topic: "Hoisting & Scope"
  },
  {
    question: "Consider: `const p = new Promise((res, rej) => res(1));` \nWhat is the state of `p`?",
    options: [
      "A) Pending",
      "B) Fulfilled",
      "C) Rejected",
      "D) Settled"
    ],
    answer: "B) Fulfilled",
    explanation: "The executor function calls `res(1)` synchronously. Therefore, the promise resolves immediately. Its internal state transitions to 'fulfilled' (which is a subset of the 'settled' state).",
    topic: "Promises & Async"
  },
  {
    question: "What is a 'generator' function in JavaScript?",
    options: [
      "A) A function that generates random numbers.",
      "B) A function declared with `function*` that can pause and resume execution using the `yield` keyword.",
      "C) A function that auto-generates HTML elements.",
      "D) An async function that uses `await`."
    ],
    answer: "B) A function declared with `function*` that can pause and resume execution using the `yield` keyword.",
    explanation: "Generators are special functions that return an Iterator object. They can pause execution at a `yield` statement and resume when `.next()` is called, maintaining local state across pauses.",
    topic: "ES6+ Features"
  },
  {
    question: "What does `Promise.allSettled()` do?",
    options: [
      "A) Rejects immediately if any promise rejects.",
      "B) Returns a promise that resolves after all given promises have either fulfilled or rejected, with an array of objects describing each promise's outcome.",
      "C) Settles all pending microtasks in the event loop.",
      "D) Returns the result of the first promise to settle."
    ],
    answer: "B) Returns a promise that resolves after all given promises have either fulfilled or rejected, with an array of objects describing each promise's outcome.",
    explanation: "Unlike `Promise.all` which short-circuits on the first rejection, `Promise.allSettled` waits for all to finish, returning `{status, value/reason}` for each.",
    topic: "Promises & Async"
  },
  {
    question: "What is the difference between `__proto__` and `prototype`?",
    options: [
      "A) They are identical.",
      "B) `prototype` is a property of constructor functions used to build `__proto__` when objects are instantiated.",
      "C) `__proto__` is used in classes, `prototype` is used in objects.",
      "D) `__proto__` is a modern replacement for `prototype`."
    ],
    answer: "B) `prototype` is a property of constructor functions used to build `__proto__` when objects are instantiated.",
    explanation: "`prototype` is an object attached to a constructor function. `__proto__` is an internal reference inside an instantiated object that points to its constructor's `prototype`.",
    topic: "Prototypes & Inheritance"
  }
];
