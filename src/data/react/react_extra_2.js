export const reactExtra2 = [
  {
    question: "Scenario: A parent component passes a `user` object to a child wrapped in `React.memo`. `const user = { name: 'John' }; <Child data={user} />`. The parent re-renders, does the Child re-render?",
    options: [
      "A) No, `React.memo` stops it.",
      "B) Yes, because object literals create a new memory reference on every render, causing the shallow comparison of `React.memo` to fail.",
      "C) No, because the string 'John' didn't change.",
      "D) Yes, but only if the Child uses `useEffect`."
    ],
    answer: "B) Yes, because object literals create a new memory reference on every render, causing the shallow comparison of `React.memo` to fail.",
    explanation: "Any object or array declared inside the component body is recreated on every render. To fix this and make `React.memo` work, you must wrap the object in `useMemo`.",
    topic: "Performance & Optimization",
    diff: "scenario"
  },
  {
    question: "What is the difference between `element` and `component` in React?",
    options: [
      "A) They are the same thing.",
      "B) An element is a plain object describing what you want to see on the screen. A component is a function or class that accepts inputs and returns a React element.",
      "C) Elements are used in Class components, Components in Functional.",
      "D) An element is HTML, a component is CSS."
    ],
    answer: "B) An element is a plain object describing what you want to see on the screen. A component is a function or class that accepts inputs and returns a React element.",
    explanation: "`<Button />` evaluates to a React Element (an object with `type: Button`). The `Button` function itself is the Component.",
    topic: "React Ecosystem",
    diff: "medium"
  },
  {
    question: "In React Router, what is an `<Outlet />` used for?",
    options: [
      "A) To emit data to external APIs.",
      "B) To act as a placeholder inside a parent route component to indicate where child routes should be rendered.",
      "C) To escape the React tree (like a Portal).",
      "D) To handle 404 pages."
    ],
    answer: "B) To act as a placeholder inside a parent route component to indicate where child routes should be rendered.",
    explanation: "In nested routing, the parent route renders its own UI and uses `<Outlet />` to render whatever child route is currently active.",
    topic: "React Router",
    diff: "medium"
  },
  {
    question: "What is the main advantage of using a state management library like Redux or Zustand over the native Context API?",
    options: [
      "A) Context API is slower.",
      "B) Context API forces all consumers to re-render when ANY piece of context changes. Redux/Zustand allows components to subscribe to specific slices of state without unnecessary re-renders.",
      "C) Context API requires TypeScript.",
      "D) Context API cannot store objects."
    ],
    answer: "B) Context API forces all consumers to re-render when ANY piece of context changes. Redux/Zustand allows components to subscribe to specific slices of state without unnecessary re-renders.",
    explanation: "Context is great for low-frequency updates (themes, auth). For high-frequency, complex global state, atomic libraries (Zustand, Recoil) or Redux prevent massive re-render cascades.",
    topic: "State Management",
    diff: "hard"
  },
  {
    question: "What is the purpose of the `forwardRef` function?",
    options: [
      "A) To forward HTTP requests.",
      "B) To allow a React component to pass a `ref` it receives down to a specific child DOM node.",
      "C) To skip re-renders.",
      "D) To redirect routing."
    ],
    answer: "B) To allow a React component to pass a `ref` it receives down to a specific child DOM node.",
    explanation: "By default, you cannot pass a `ref` to a custom component. You must wrap the component in `React.forwardRef()` to accept the ref and attach it to an underlying DOM element like `<input>`.",
    topic: "Hooks (Advanced)",
    diff: "hard"
  },
  {
    question: "Scenario: You use `useEffect` to attach a scroll listener to `window`. You forget to return a cleanup function. What is the immediate consequence?",
    options: [
      "A) The browser throws an error.",
      "B) A memory leak occurs. If the component unmounts and remounts 5 times, there will be 5 identical event listeners firing simultaneously.",
      "C) The listener simply stops working.",
      "D) React automatically cleans it up."
    ],
    answer: "B) A memory leak occurs. If the component unmounts and remounts 5 times, there will be 5 identical event listeners firing simultaneously.",
    explanation: "React does not automatically clean up DOM event listeners, timeouts, or intervals. Failing to clean them up in the return function of `useEffect` causes severe memory leaks.",
    topic: "Debugging",
    diff: "scenario"
  },
  {
    question: "What does `ReactDOM.flushSync` do?",
    options: [
      "A) Flushes the local storage.",
      "B) Forces React to synchronously flush any pending state updates to the DOM immediately, overriding the usual batching mechanism.",
      "C) Syncs state across multiple browser tabs.",
      "D) Clears the Redux store."
    ],
    answer: "B) Forces React to synchronously flush any pending state updates to the DOM immediately, overriding the usual batching mechanism.",
    explanation: "`flushSync` is highly specialized. It forces React to pause what it's doing, immediately process the state update, and update the DOM synchronously before moving to the next line of code.",
    topic: "Advanced React Features",
    diff: "hard"
  },
  {
    question: "Which hook should you use to preserve data across component re-renders WITHOUT causing the component to re-render when the data changes?",
    options: [
      "A) `useState`",
      "B) `useEffect`",
      "C) `useRef`",
      "D) `useContext`"
    ],
    answer: "C) `useRef`",
    explanation: "`useRef` creates a mutable container whose `.current` property can hold any value. Updating `.current` does not trigger a React render cycle.",
    topic: "Hooks (useRef)",
    diff: "easy"
  },
  {
    question: "Scenario: An input field `<input type='text' value={name} onChange={e => setName(e.target.value)} />` loses focus after every single keystroke. What is the cause?",
    options: [
      "A) You are using `useState` incorrectly.",
      "B) The `<input>` element is defined INSIDE the parent component's render function, causing React to completely unmount and recreate a new `<input>` DOM node on every render.",
      "C) The `onChange` handler needs `preventDefault`.",
      "D) Inputs cannot be controlled."
    ],
    answer: "B) The `<input>` element is defined INSIDE the parent component's render function, causing React to completely unmount and recreate a new `<input>` DOM node on every render.",
    explanation: "If you define a component function inside another component function, it gets a new memory reference on every render. React treats it as a brand new component, unmounting the old one (losing focus) and mounting the new one.",
    topic: "Debugging",
    diff: "scenario"
  },
  {
    question: "Why does React require a Single Root Element to be returned from a component's render method?",
    options: [
      "A) It is a JavaScript limitation (a function can only return one value).",
      "B) For CSS styling.",
      "C) To prevent cross-site scripting (XSS).",
      "D) It is an HTML standard."
    ],
    answer: "A) It is a JavaScript limitation (a function can only return one value).",
    explanation: "JSX compiles into `React.createElement()` calls. A JavaScript function can only return one value (one object). To return multiple elements, they must be wrapped in a parent array, node, or `<Fragment>`.",
    topic: "JSX & Elements",
    diff: "moderate"
  },
  {
    question: "Scenario: You use `<img src={profilePic} />` where `profilePic` is undefined. The UI shows a broken image icon. How do you provide a fallback?",
    options: [
      "A) `<img src={profilePic || 'default.jpg'} />`",
      "B) `<img src={profilePic && 'default.jpg'} />`",
      "C) Use `useFallback`.",
      "D) This is impossible in React."
    ],
    answer: "A) `<img src={profilePic || 'default.jpg'} />`",
    explanation: "Using the logical OR (`||`) operator allows you to easily specify a fallback string if the primary variable is falsy (undefined, null, empty string).",
    topic: "JSX & Elements",
    diff: "easy"
  },
  {
    question: "What is 'Reconciliation' in React?",
    options: [
      "A) Reconnecting to a broken WebSocket.",
      "B) The algorithmic process React uses to compare the newly generated Virtual DOM with the previous Virtual DOM, determining the most efficient way to update the real DOM.",
      "C) Merging two branches in Git.",
      "D) Converting state to props."
    ],
    answer: "B) The algorithmic process React uses to compare the newly generated Virtual DOM with the previous Virtual DOM, determining the most efficient way to update the real DOM.",
    explanation: "Reconciliation is the core engine of React. It uses a heuristic O(n) 'diffing' algorithm to identify exactly what changed so it only updates the modified parts of the real DOM.",
    topic: "Virtual DOM & Reconciliation",
    diff: "moderate"
  },
  {
    question: "Scenario: You have a long, slow-rendering list. You want the user to be able to type in a search box without the typing feeling laggy, even if the list takes a second to update. What React 18 hook solves this?",
    options: [
      "A) `useRef`",
      "B) `useTransition`",
      "C) `useMemo`",
      "D) `useEffect`"
    ],
    answer: "B) `useTransition`",
    explanation: "`useTransition` lets you wrap the state update for the slow list in `startTransition`. React will prioritize the urgent typing update and compute the slow list update in the background.",
    topic: "Performance & Optimization",
    diff: "scenario"
  },
  {
    question: "What does the `dangerouslySetInnerHTML` prop do in React?",
    options: [
      "A) Secures the HTML against attacks.",
      "B) Serves as React's replacement for using `innerHTML` in the browser DOM, explicitly indicating that the developer is injecting raw, potentially unsafe HTML.",
      "C) Deletes the component.",
      "D) Allows writing Python inside React."
    ],
    answer: "B) Serves as React's replacement for using `innerHTML` in the browser DOM, explicitly indicating that the developer is injecting raw, potentially unsafe HTML.",
    explanation: "Because injecting raw HTML can expose users to Cross-Site Scripting (XSS) attacks, React intentionally makes the syntax cumbersome (`dangerouslySetInnerHTML={{ __html: rawString }}`) to force developers to be cautious.",
    topic: "Advanced React Features",
    diff: "moderate"
  },
  {
    question: "Which statement is true regarding `Context.Provider`?",
    options: [
      "A) Only components directly inside the Provider's file can access the context.",
      "B) Any component nested anywhere deeply inside the Provider tree can access the context value.",
      "C) Providers cannot be nested.",
      "D) Providers require Redux."
    ],
    answer: "B) Any component nested anywhere deeply inside the Provider tree can access the context value.",
    explanation: "The Context Provider establishes a boundary. Every component rendered within that tree, no matter how deep, can call `useContext` to instantly access the provided value.",
    topic: "Context API",
    diff: "easy"
  }
];
