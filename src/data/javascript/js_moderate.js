export const jsModerate = [
  {
    question: "What will be the output of the following code?\n```javascript\nconsole.log(a);\nvar a = 10;\n```",
    options: [
      "A) 10",
      "B) undefined",
      "C) ReferenceError",
      "D) null"
    ],
    answer: "B) undefined",
    explanation: "Variables declared with `var` are hoisted to the top of their scope, but their initialization is not. Therefore, `a` exists but is `undefined` at the time of logging.",
    topic: "Hoisting & Scope"
  },
  {
    question: "What will be the output of the following code?\n```javascript\nconsole.log(b);\nlet b = 10;\n```",
    options: [
      "A) 10",
      "B) undefined",
      "C) ReferenceError",
      "D) NaN"
    ],
    answer: "C) ReferenceError",
    explanation: "Variables declared with `let` and `const` are hoisted, but they remain in a 'Temporal Dead Zone' (TDZ) until their declaration is evaluated. Accessing them before throws a ReferenceError.",
    topic: "Hoisting & Scope"
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A) A function that takes another function as an argument.",
      "B) A way to secure variables from garbage collection.",
      "C) A combination of a function bundled together with references to its surrounding lexical environment.",
      "D) An object method that is automatically invoked."
    ],
    answer: "C) A combination of a function bundled together with references to its surrounding lexical environment.",
    explanation: "A closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.",
    topic: "Closures"
  },
  {
    question: "What will the following code output?\n```javascript\nlet x = [1, 2, 3];\nlet y = x;\ny.push(4);\nconsole.log(x.length);\n```",
    options: [
      "A) 3",
      "B) 4",
      "C) undefined",
      "D) TypeError"
    ],
    answer: "B) 4",
    explanation: "Arrays are reference types. `y` is assigned the reference of `x`, so both point to the same array in memory. Pushing to `y` modifies the underlying array.",
    topic: "Arrays & Objects"
  },
  {
    question: "What does the `bind()` method do in JavaScript?",
    options: [
      "A) Immediately invokes a function with a specified `this` context.",
      "B) Returns a new function with a bound `this` context and initial arguments.",
      "C) Attaches an event listener to a DOM element.",
      "D) Merges two objects together."
    ],
    answer: "B) Returns a new function with a bound `this` context and initial arguments.",
    explanation: "`bind()` creates a new function that, when called, has its `this` keyword set to the provided value.",
    topic: "The `this` Keyword"
  },
  {
    question: "What is the output of `[] == ![]`?",
    options: [
      "A) true",
      "B) false",
      "C) TypeError",
      "D) undefined"
    ],
    answer: "A) true",
    explanation: "Tricky coercion: `![]` evaluates to `false`. So the comparison is `[] == false`. `[]` is coerced to an empty string `''`, and `false` is coerced to `0`. `'' == 0` evaluates to true.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What will `console.log(0.1 + 0.2 === 0.3);` output?",
    options: [
      "A) true",
      "B) false",
      "C) NaN",
      "D) TypeError"
    ],
    answer: "B) false",
    explanation: "Due to floating-point precision in JavaScript (IEEE 754 standard), `0.1 + 0.2` results in `0.30000000000000004`, which is strictly not equal to `0.3`.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What does `Array.prototype.reduce()` do?",
    options: [
      "A) Reduces the size of an array by removing empty slots.",
      "B) Executes a reducer function on each element of the array, resulting in a single output value.",
      "C) Returns a new array with elements that pass a test.",
      "D) Reverses the array."
    ],
    answer: "B) Executes a reducer function on each element of the array, resulting in a single output value.",
    explanation: "`reduce()` takes a callback and an initial value, accumulating results iteratively (like summing numbers) to reduce the array down to a single value.",
    topic: "Arrays & Objects"
  },
  {
    question: "How do you access a property of an object using a variable key `let key = 'name'`?",
    options: [
      "A) obj.key",
      "B) obj[key]",
      "C) obj.'name'",
      "D) obj(key)"
    ],
    answer: "B) obj[key]",
    explanation: "To access a property using a variable, bracket notation `obj[key]` must be used. Dot notation `obj.key` would look for a literal property named 'key'.",
    topic: "Arrays & Objects"
  },
  {
    question: "What is the result of `Object.assign({}, {a:1}, {a:2, b:2})`?",
    options: [
      "A) {a: 1, b: 2}",
      "B) {a: 2, b: 2}",
      "C) {a: 1}",
      "D) TypeError"
    ],
    answer: "B) {a: 2, b: 2}",
    explanation: "`Object.assign` copies properties from source objects to a target object from left to right. Later sources overwrite properties of earlier sources with the same key.",
    topic: "Arrays & Objects"
  },
  {
    question: "What is the output of the following?\n```javascript\nconst obj = { a: 1, b: 2 };\nconst copy = { ...obj, b: 3, c: 4 };\nconsole.log(copy);\n```",
    options: [
      "A) { a: 1, b: 2, c: 4 }",
      "B) { a: 1, b: 3, c: 4 }",
      "C) { b: 3, c: 4, a: 1, b: 2 }",
      "D) SyntaxError"
    ],
    answer: "B) { a: 1, b: 3, c: 4 }",
    explanation: "The spread operator `...obj` copies properties `{ a: 1, b: 2 }`. The subsequent `b: 3` overwrites the earlier `b: 2` property, resulting in `{ a: 1, b: 3, c: 4 }`.",
    topic: "ES6+ Features"
  },
  {
    question: "What is the difference between `function declaration` and `function expression`?",
    options: [
      "A) Function declarations are hoisted, whereas function expressions are not.",
      "B) Function expressions can only be anonymous.",
      "C) Function declarations cannot take arguments.",
      "D) There is no difference."
    ],
    answer: "A) Function declarations are hoisted, whereas function expressions are not.",
    explanation: "A function declaration (`function foo() {}`) is fully hoisted, allowing it to be called before it is defined. A function expression (`const foo = function() {}`) is not hoisted.",
    topic: "Hoisting & Scope"
  },
  {
    question: "Consider the array: `let arr = [1, 2, 3];`. What does `arr.map(num => num * 2)` return?",
    options: [
      "A) [1, 2, 3]",
      "B) [2, 4, 6]",
      "C) undefined",
      "D) Mutates original arr to [2, 4, 6]"
    ],
    answer: "B) [2, 4, 6]",
    explanation: "`map()` creates a new array populated with the results of calling a provided function on every element in the calling array. It does not mutate the original array.",
    topic: "Arrays & Objects"
  },
  {
    question: "Which of the following array methods mutates the original array?",
    options: [
      "A) map()",
      "B) filter()",
      "C) slice()",
      "D) splice()"
    ],
    answer: "D) splice()",
    explanation: "`splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. `map`, `filter`, and `slice` return new arrays.",
    topic: "Arrays & Objects"
  },
  {
    question: "What will be the output of this IIFE?\n```javascript\n(function() {\n  var a = b = 5;\n})();\nconsole.log(b);\n```",
    options: [
      "A) 5",
      "B) undefined",
      "C) ReferenceError",
      "D) null"
    ],
    answer: "A) 5",
    explanation: "The statement `var a = b = 5;` evaluates right-to-left. `b = 5` executes first, without a `var/let/const` keyword, making `b` a global variable (in non-strict mode). Thus `b` is accessible outside, outputting 5.",
    topic: "Hoisting & Scope"
  }
];
