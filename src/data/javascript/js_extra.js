export const jsExtra = [
  {
    question: "What is the primary difference between `Function.prototype.call()` and `Function.prototype.apply()`?",
    options: [
      "A) `call()` accepts an array of arguments, while `apply()` accepts comma-separated arguments.",
      "B) `apply()` accepts an array of arguments, while `call()` accepts comma-separated arguments.",
      "C) `call()` executes immediately, while `apply()` returns a bound function.",
      "D) There is no difference; they are aliases."
    ],
    answer: "B) `apply()` accepts an array of arguments, while `call()` accepts comma-separated arguments.",
    explanation: "Both immediately invoke the function with a specific `this` context. The difference is how they accept arguments: `call` takes them individually, `apply` takes them as an array (e.g., `func.apply(this, [1, 2, 3])`).",
    topic: "Functions & Scope",
    diff: "medium"
  },
  {
    question: "Which of the following is true about WeakMap compared to Map?",
    options: [
      "A) WeakMap keys can be of any type (including primitives).",
      "B) WeakMap allows iteration over its keys using `keys()`.",
      "C) WeakMap keys must be objects, and they are weakly referenced, allowing garbage collection if there are no other references to the object.",
      "D) WeakMap is faster for primitive keys."
    ],
    answer: "C) WeakMap keys must be objects, and they are weakly referenced, allowing garbage collection if there are no other references to the object.",
    explanation: "A WeakMap only accepts objects as keys. If an object used as a key in a WeakMap has no other references in the application, it will be garbage collected, preventing memory leaks.",
    topic: "ES6+ Features",
    diff: "hard"
  },
  {
    question: "What will `console.log(typeof NaN)` output?",
    options: [
      "A) 'NaN'",
      "B) 'undefined'",
      "C) 'number'",
      "D) 'object'"
    ],
    answer: "C) 'number'",
    explanation: "In JavaScript, NaN (Not-a-Number) is formally classified as a numeric data type, so `typeof NaN` returns 'number'.",
    topic: "Data Types & Coercion",
    diff: "easy"
  },
  {
    question: "What is the output of `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)`?",
    options: [
      "A) true, true",
      "B) true, false",
      "C) false, true",
      "D) false, false"
    ],
    answer: "B) true, false",
    explanation: "Evaluation is left-to-right. `1 < 2` is `true`. `true < 3` coerces `true` to `1`, and `1 < 3` is `true`. For the second: `3 > 2` is `true`. `true > 1` coerces to `1 > 1`, which is `false`.",
    topic: "Data Types & Coercion",
    diff: "medium"
  },
  {
    question: "How do you correctly stop an event from bubbling up the DOM tree?",
    options: [
      "A) event.preventDefault()",
      "B) event.stopPropagation()",
      "C) event.stopBubbling()",
      "D) return false;"
    ],
    answer: "B) event.stopPropagation()",
    explanation: "`event.stopPropagation()` prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.",
    topic: "DOM Manipulation",
    diff: "medium"
  },
  {
    question: "What does `event.preventDefault()` do?",
    options: [
      "A) Stops the event from bubbling up the DOM.",
      "B) Prevents the browser's default behavior for that event (e.g., following a link or submitting a form).",
      "C) Destroys the event object.",
      "D) Unbinds the event listener."
    ],
    answer: "B) Prevents the browser's default behavior for that event (e.g., following a link or submitting a form).",
    explanation: "`preventDefault()` stops the default browser action, like a form submission reloading the page, or a link navigating to a new URL.",
    topic: "DOM Manipulation",
    diff: "easy"
  },
  {
    question: "What is the difference between `innerText` and `textContent`?",
    options: [
      "A) They are identical.",
      "B) `innerText` is aware of CSS styling and will not return hidden text, while `textContent` returns all text regardless of CSS.",
      "C) `textContent` is aware of CSS styling.",
      "D) `innerText` returns HTML tags, `textContent` does not."
    ],
    answer: "B) `innerText` is aware of CSS styling and will not return hidden text, while `textContent` returns all text regardless of CSS.",
    explanation: "`textContent` gets the exact text content of all elements in the node. `innerText` reads the rendered text, so it ignores `display: none` elements and factors in CSS styling.",
    topic: "DOM Manipulation",
    diff: "medium"
  },
  {
    question: "What will be the output?\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  console.log(1);\n  resolve(2);\n});\npromise.then(res => console.log(res));\nconsole.log(3);\n```",
    options: [
      "A) 1, 2, 3",
      "B) 1, 3, 2",
      "C) 3, 1, 2",
      "D) 2, 3, 1"
    ],
    answer: "B) 1, 3, 2",
    explanation: "The executor function of a Promise runs synchronously, so `1` is logged immediately. The `.then` callback is queued as a microtask. Then synchronous `3` logs. Finally, the microtask queue clears, logging `2`.",
    topic: "Promises & Async",
    diff: "hard"
  },
  {
    question: "Which keyword halts the execution of an `async` function until a Promise is resolved?",
    options: [
      "A) yield",
      "B) pause",
      "C) await",
      "D) halt"
    ],
    answer: "C) await",
    explanation: "`await` pauses the execution of its surrounding `async` function until the Promise settles (resolves or rejects), making asynchronous code look synchronous.",
    topic: "Promises & Async",
    diff: "easy"
  },
  {
    question: "What happens if you use `await` outside of an `async` function?",
    options: [
      "A) It works normally.",
      "B) It throws a SyntaxError (in older JS, though Top-Level Await is supported in modern modules).",
      "C) It gets ignored.",
      "D) It converts the function to async automatically."
    ],
    answer: "B) It throws a SyntaxError (in older JS, though Top-Level Await is supported in modern modules).",
    explanation: "Historically, `await` was only valid inside `async` functions. Modern ES Modules support Top-Level Await, but in traditional scripts, it throws a SyntaxError.",
    topic: "Promises & Async",
    diff: "medium"
  },
  {
    question: "What is the output?\n```javascript\nlet x = 10;\nfunction outer() {\n  let y = 20;\n  return function inner() {\n    console.log(x + y);\n  }\n}\nconst fn = outer();\nfn();\n```",
    options: [
      "A) 30",
      "B) undefined",
      "C) ReferenceError",
      "D) NaN"
    ],
    answer: "A) 30",
    explanation: "This is a classic closure. The `inner` function forms a closure capturing the lexical scope. It remembers `y = 20` from `outer`, and `x = 10` from the global scope, logging 30.",
    topic: "Closures & Scope",
    diff: "medium"
  },
  {
    question: "What is variable shadowing?",
    options: [
      "A) When a variable is deleted by the garbage collector.",
      "B) When a local variable shares the same name as a variable in the outer scope, temporarily overriding it.",
      "C) When a variable's type is dynamically changed.",
      "D) When `var` overrides `let`."
    ],
    answer: "B) When a local variable shares the same name as a variable in the outer scope, temporarily overriding it.",
    explanation: "Shadowing occurs when an inner scope declares a variable with the exact same identifier as one in an outer scope. The inner variable 'shadows' the outer one.",
    topic: "Closures & Scope",
    diff: "easy"
  },
  {
    question: "What does the destructuring assignment allow you to do?",
    options: [
      "A) Delete properties from an object permanently.",
      "B) Unpack values from arrays, or properties from objects, into distinct variables.",
      "C) Merge two arrays together.",
      "D) Convert an array into an object."
    ],
    answer: "B) Unpack values from arrays, or properties from objects, into distinct variables.",
    explanation: "Destructuring (`const { name } = user;` or `const [a, b] = arr;`) is an ES6 feature to easily extract specific data points into standalone variables.",
    topic: "ES6+ Features",
    diff: "easy"
  },
  {
    question: "Which of the following creates a block scope?",
    options: [
      "A) A `function` declaration.",
      "B) An `if` statement or `for` loop with `let` or `const` variables.",
      "C) An object literal.",
      "D) Only `try...catch` blocks."
    ],
    answer: "B) An `if` statement or `for` loop with `let` or `const` variables.",
    explanation: "Blocks denoted by `{}` (like in `if`, `for`, `while`) create block scope in JavaScript, but ONLY for variables declared with `let` and `const`. `var` ignores block scope.",
    topic: "Functions & Scope",
    diff: "medium"
  },
  {
    question: "What will be the output?\n```javascript\nconsole.log(typeof null === typeof undefined);\n```",
    options: [
      "A) true",
      "B) false",
      "C) ReferenceError",
      "D) TypeError"
    ],
    answer: "B) false",
    explanation: "`typeof null` evaluates to the string `'object'`. `typeof undefined` evaluates to the string `'undefined'`. `'object' === 'undefined'` is false.",
    topic: "Data Types & Coercion",
    diff: "easy"
  }
];
