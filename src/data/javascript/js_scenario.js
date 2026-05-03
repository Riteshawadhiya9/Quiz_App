export const jsScenario = [
  {
    question: "Scenario: You attached an event listener to multiple list items `<li>`. The UI freezes when 10,000 items are rendered. How can you optimize this?",
    options: [
      "A) Use a `setTimeout` inside each listener.",
      "B) Use Event Delegation by attaching a single event listener to the parent `<ul>`.",
      "C) Change all `var` variables to `const`.",
      "D) Use CSS `pointer-events: none`."
    ],
    answer: "B) Use Event Delegation by attaching a single event listener to the parent `<ul>`.",
    explanation: "Creating 10,000 individual event listeners consumes massive memory. Event delegation attaches one listener to the parent. Events bubble up from the `<li>` to the `<ul>`, where `event.target` can be used to identify the clicked child.",
    topic: "DOM & Browser Events"
  },
  {
    question: "Scenario: An API call returns data, but sometimes fails randomly. You need to retry the API call up to 3 times before finally throwing an error. Which JS concept is best suited for building this?",
    options: [
      "A) Recursive Promises with `catch()` chaining.",
      "B) A `for` loop with synchronous XMLHttpRequests.",
      "C) `Promise.all()`",
      "D) `setInterval()`"
    ],
    answer: "A) Recursive Promises with `catch()` chaining.",
    explanation: "A recursive function that uses `async/await` inside a `try/catch` block (or Promise chains) is the standard pattern for retrying failed async operations, decrementing a counter until 0.",
    topic: "Promises & Async"
  },
  {
    question: "Scenario: You need to implement a search bar that calls an API. If the user types fast, the API is called 10 times a second, crashing the backend. How do you prevent this?",
    options: [
      "A) Throttle the input event.",
      "B) Debounce the input event.",
      "C) Use `requestAnimationFrame`.",
      "D) Disable the input field while fetching."
    ],
    answer: "B) Debounce the input event.",
    explanation: "Debouncing ensures that a function is only executed after a specified delay of inactivity (e.g., waiting 300ms after the user stops typing). Throttling executes the function continuously at a set interval.",
    topic: "DOM & Browser Events"
  },
  {
    question: "Scenario: You have a memory leak in a Single Page Application (SPA). Which of the following is the most likely cause?",
    options: [
      "A) Using `map()` instead of `forEach()`.",
      "B) Forgetting to remove global event listeners when a component is destroyed.",
      "C) Declaring too many `const` variables.",
      "D) Using `Promise.resolve()`."
    ],
    answer: "B) Forgetting to remove global event listeners when a component is destroyed.",
    explanation: "If an event listener is attached to the `window` or `document` and references a component's internal state, the component cannot be garbage collected even after it is unmounted from the DOM.",
    topic: "Event Loop & Concurrency"
  },
  {
    question: "Scenario: `console.log(0.1 + 0.2 == 0.3)` returns false. How do you safely check if these two floating point results are functionally equal in JavaScript?",
    options: [
      "A) Use `Math.round(0.1 + 0.2) == Math.round(0.3)`",
      "B) Check if `Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON`",
      "C) Use `parseInt(0.1 + 0.2) == parseInt(0.3)`",
      "D) Floating point equality is impossible in JS."
    ],
    answer: "B) Check if `Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON`",
    explanation: "`Number.EPSILON` represents the smallest interval between two representable numbers. Comparing the absolute difference between floats against EPSILON is the industry standard.",
    topic: "Data Types & Coercion"
  },
  {
    question: "Scenario: A user clicks a 'Submit' button twice rapidly. Two duplicate API POST requests are sent. Best way to solve this purely in JS?",
    options: [
      "A) Disable the button immediately after the first click inside the event listener.",
      "B) Use a debounce function on the API call.",
      "C) Use `event.stopPropagation()`.",
      "D) Use `Promise.all()`."
    ],
    answer: "A) Disable the button immediately after the first click inside the event listener.",
    explanation: "For form submissions, the safest UX and logic approach is to eagerly disable the button (or show a loading state) to physically prevent the user from firing a second event while the first request is pending.",
    topic: "DOM & Browser Events"
  },
  {
    question: "Scenario: You have a massive array of 1 million objects. Calling `array.filter()` freezes the UI for a second. How can you fix the UI freeze?",
    options: [
      "A) Convert the array to a String.",
      "B) Move the filtering logic to a Web Worker.",
      "C) Use `Array.splice` instead.",
      "D) Use `const` instead of `let`."
    ],
    answer: "B) Move the filtering logic to a Web Worker.",
    explanation: "JavaScript is single-threaded. Heavy synchronous computations like iterating 1 million items block the main UI thread. A Web Worker runs computations in a background thread.",
    topic: "Event Loop & Concurrency"
  },
  {
    question: "Scenario: You run `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }`. It logs 3, 3, 3. How do you make it log 0, 1, 2 without removing `setTimeout`?",
    options: [
      "A) Change `setTimeout` to `setInterval`.",
      "B) Change `var i` to `let i`.",
      "C) Use `await setTimeout`.",
      "D) Put `console.log(i)` outside the loop."
    ],
    answer: "B) Change `var i` to `let i`.",
    explanation: "`var` is function-scoped, so all callbacks share the same `i` (which becomes 3 after the loop). `let` is block-scoped, meaning a new distinct `i` is created and bound for each iteration.",
    topic: "Closures"
  },
  {
    question: "Scenario: You want to merge a default config object with a user config object. The user config should overwrite defaults, but not mutate the original default object. Best approach?",
    options: [
      "A) `const finalConfig = userConfig;`",
      "B) `const finalConfig = { ...defaultConfig, ...userConfig };`",
      "C) `Object.assign(defaultConfig, userConfig);`",
      "D) `defaultConfig = userConfig;`"
    ],
    answer: "B) `const finalConfig = { ...defaultConfig, ...userConfig };`",
    explanation: "The spread operator (`...`) creates a brand new shallow copy object. Spreading defaults first, then user settings, ensures user settings correctly overwrite defaults without mutating the original object.",
    topic: "ES6+ Features"
  },
  {
    question: "Scenario: Code has `const user = data.profile.details.name`. If `data.profile` is undefined, this throws a TypeError and crashes the app. How to rewrite safely in modern JS?",
    options: [
      "A) `const user = data && profile && details && name;`",
      "B) `const user = data?.profile?.details?.name;`",
      "C) `const user = data.profile!.details!.name;`",
      "D) `const user = data ?? profile ?? details;`"
    ],
    answer: "B) `const user = data?.profile?.details?.name;`",
    explanation: "Optional Chaining (`?.`) safely accesses deeply nested properties. If any link in the chain is null or undefined, the expression short-circuits and returns `undefined`.",
    topic: "ES6+ Features"
  },
  {
    question: "Scenario: You are building a polyfill for `Array.prototype.map`. What is the most important rule the polyfill must follow?",
    options: [
      "A) It must mutate the `this` array.",
      "B) It must return a completely new array without mutating the original.",
      "C) It must use `reduce()` internally.",
      "D) It must return a string."
    ],
    answer: "B) It must return a completely new array without mutating the original.",
    explanation: "`map()` is a pure function by design. It iterates over elements, applies a callback, and pushes the results into a newly instantiated array, returning it without affecting the original.",
    topic: "Arrays & Objects"
  },
  {
    question: "Scenario: A third-party library throws errors that you cannot prevent. You want to execute cleanup code regardless of whether an error was thrown or successful execution occurred. Where does the cleanup code go?",
    options: [
      "A) Inside the `try` block.",
      "B) Inside the `catch` block.",
      "C) Inside the `finally` block.",
      "D) After the `catch` block on the next line."
    ],
    answer: "C) Inside the `finally` block.",
    explanation: "The `finally` block executes unconditionally after the `try` and `catch` blocks finish, making it the perfect place to close streams, clear loaders, or reset state.",
    topic: "Core Fundamentals"
  },
  {
    question: "Scenario: You use `JSON.parse(JSON.stringify(obj))` to deep clone an object. What is a critical failure point of this method?",
    options: [
      "A) It is extremely slow for objects with 3 properties.",
      "B) It cannot clone Dates, Functions, or handle circular references.",
      "C) It converts arrays to objects.",
      "D) It ignores nested properties."
    ],
    answer: "B) It cannot clone Dates, Functions, or handle circular references.",
    explanation: "`JSON.stringify()` removes functions and undefined values, converts Dates to strings, and throws a TypeError on circular references. Modern JS uses `structuredClone()` to solve this.",
    topic: "Arrays & Objects"
  },
  {
    question: "Scenario: You have multiple asynchronous API calls that do not depend on each other. You want to render the UI only when ALL of them finish. Best approach?",
    options: [
      "A) Use `await` sequentially on each call.",
      "B) Use a `while` loop.",
      "C) Use `Promise.all([api1(), api2(), api3()])` and `await` the result.",
      "D) Use `Promise.race()`."
    ],
    answer: "C) Use `Promise.all([api1(), api2(), api3()])` and `await` the result.",
    explanation: "`Promise.all` runs promises concurrently and resolves only when all of them have resolved. Awaiting sequentially creates a waterfall, doubling/tripling the total wait time.",
    topic: "Promises & Async"
  },
  {
    question: "Scenario: An element has an ID `btn`. In JavaScript, you can reference it directly simply by typing `btn.style.color = 'red'` without using `getElementById`. Why?",
    options: [
      "A) It's a new ES2022 feature.",
      "B) Browsers historically place elements with IDs into the global window object.",
      "C) It's a React-specific feature.",
      "D) JavaScript automatically searches the DOM for undefined variables."
    ],
    answer: "B) Browsers historically place elements with IDs into the global window object.",
    explanation: "In standard browser environments, elements with IDs become global variables attached to the `window` object. However, relying on this is considered an anti-pattern.",
    topic: "DOM & Browser Events"
  }
];
