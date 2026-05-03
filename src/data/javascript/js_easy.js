export const jsEasy = [
  {
    question: "Which of the following is correct about JavaScript?",
    options: [
      "A) JavaScript is an Object-Based language",
      "B) JavaScript is Assembly-language",
      "C) JavaScript is an Object-Oriented language",
      "D) JavaScript is a High-level language"
    ],
    answer: "A) JavaScript is an Object-Based language",
    explanation: "JavaScript is primarily considered an Object-Based language as it uses prototypes rather than classical classes.",
    topic: "Core Fundamentals"
  },
  {
    question: "What will be the output of `console.log(typeof NaN);`?",
    options: [
      "A) 'number'",
      "B) 'NaN'",
      "C) 'undefined'",
      "D) 'object'"
    ],
    answer: "A) 'number'",
    explanation: "NaN stands for Not-a-Number, but its type in JavaScript is formally considered a 'number'.",
    topic: "Data Types & Coercion"
  },
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: [
      "A) var",
      "B) let",
      "C) const",
      "D) static"
    ],
    answer: "C) const",
    explanation: "The `const` keyword declares a block-scoped variable whose reference cannot be reassigned.",
    topic: "Hoisting & Scope"
  },
  {
    question: "What is the result of `'5' + 3` in JavaScript?",
    options: [
      "A) 8",
      "B) '53'",
      "C) 53",
      "D) NaN"
    ],
    answer: "B) '53'",
    explanation: "When using the `+` operator, if one operand is a string, JavaScript coerces the other operand to a string and concatenates them.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What is the result of `'5' - 3` in JavaScript?",
    options: [
      "A) 2",
      "B) '2'",
      "C) '53'",
      "D) NaN"
    ],
    answer: "A) 2",
    explanation: "Unlike the `+` operator, the `-` operator does not perform string concatenation. It coerces the string '5' into the number 5, resulting in 5 - 3 = 2.",
    topic: "Data Types & Coercion"
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: [
      "A) shift()",
      "B) unshift()",
      "C) pop()",
      "D) push()"
    ],
    answer: "C) pop()",
    explanation: "`pop()` removes the last element from an array and returns that element. `shift()` removes the first element.",
    topic: "Arrays & Objects"
  },
  {
    question: "How do you write a strict equality check in JavaScript?",
    options: [
      "A) ==",
      "B) ===",
      "C) =!=",
      "D) =="
    ],
    answer: "B) ===",
    explanation: "The `===` operator checks for both value and type equality without performing type coercion.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What will `console.log(1 == '1');` and `console.log(1 === '1');` output respectively?",
    options: [
      "A) true, true",
      "B) false, false",
      "C) true, false",
      "D) false, true"
    ],
    answer: "C) true, false",
    explanation: "`==` performs type coercion, so 1 == '1' is true. `===` does not coerce types, so a number is not strictly equal to a string, returning false.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What is the default value of an uninitialized variable declared with `var`?",
    options: [
      "A) null",
      "B) 0",
      "C) undefined",
      "D) ReferenceError"
    ],
    answer: "C) undefined",
    explanation: "Variables declared with `var` (or `let`) but not assigned a value are automatically initialized with the value `undefined`.",
    topic: "Hoisting & Scope"
  },
  {
    question: "Which function is used to parse a string into an integer?",
    options: [
      "A) Number()",
      "B) parseInt()",
      "C) toInteger()",
      "D) parseNum()"
    ],
    answer: "B) parseInt()",
    explanation: "`parseInt()` parses a string argument and returns an integer of the specified radix.",
    topic: "Core Fundamentals"
  },
  {
    question: "What does the `isNaN()` function do?",
    options: [
      "A) Returns true if the argument is not a number",
      "B) Returns false if the argument is not a number",
      "C) Returns true if the argument is a number",
      "D) Throws an error if the argument is a string"
    ],
    answer: "A) Returns true if the argument is not a number",
    explanation: "`isNaN()` checks if a value is NaN. However, it coerces the value to a number first.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What will `console.log(typeof null);` output?",
    options: [
      "A) 'null'",
      "B) 'undefined'",
      "C) 'object'",
      "D) 'boolean'"
    ],
    answer: "C) 'object'",
    explanation: "In JavaScript, `typeof null` returns 'object'. This is considered a historical bug in JS, but it remains for backward compatibility.",
    topic: "Data Types & Coercion"
  },
  {
    question: "What is the scope of a variable declared with `let`?",
    options: [
      "A) Global scope only",
      "B) Function scope",
      "C) Block scope",
      "D) Lexical scope only"
    ],
    answer: "C) Block scope",
    explanation: "`let` and `const` variables are block-scoped, meaning they only exist within the `{}` block they were declared in.",
    topic: "Hoisting & Scope"
  },
  {
    question: "Which of the following creates an object in JavaScript?",
    options: [
      "A) `let obj = [];`",
      "B) `let obj = {};`",
      "C) `let obj = ();`",
      "D) `let obj = \"\";`"
    ],
    answer: "B) `let obj = {};`",
    explanation: "Curly braces `{}` are used to define object literals in JavaScript.",
    topic: "Arrays & Objects"
  },
  {
    question: "What does the `this` keyword refer to in a global context (non-strict mode)?",
    options: [
      "A) The current function",
      "B) The global object (e.g., `window` in a browser)",
      "C) `undefined`",
      "D) `null`"
    ],
    answer: "B) The global object (e.g., `window` in a browser)",
    explanation: "In the global execution context (outside any function), `this` refers to the global object.",
    topic: "The `this` Keyword"
  }
];
