export const reactHard = [
  {
    question: "What is the core difference between `useMemo` and `useCallback`?",
    options: [
      "A) `useMemo` caches a value, while `useCallback` caches a function reference.",
      "B) `useMemo` stops re-renders entirely, `useCallback` only delays them.",
      "C) `useCallback` is used for arrays, `useMemo` is used for objects.",
      "D) There is no difference; they are aliases."
    ],
    answer: "A) `useMemo` caches a value, while `useCallback` caches a function reference.",
    explanation: "`useMemo` executes a function and memoizes the returned result. `useCallback` memoizes the actual function definition, returning the exact same function reference across re-renders unless dependencies change.",
    topic: "Performance & Optimization"
  },
  {
    question: "When should you use `React.memo`?",
    options: [
      "A) To cache state variables.",
      "B) To prevent a child component from re-rendering if its props have not changed.",
      "C) To memoize inline arrow functions.",
      "D) To optimize `useEffect` dependencies."
    ],
    answer: "B) To prevent a child component from re-rendering if its props have not changed.",
    explanation: "`React.memo` is a Higher-Order Component (HOC) that wraps a component and strictly compares previous props to next props. If they are identical, it skips re-rendering the component.",
    topic: "Performance & Optimization"
  },
  {
    question: "What happens if a parent component passes an inline arrow function as a prop to a child component wrapped in `React.memo`?",
    options: [
      "A) The child never re-renders.",
      "B) `React.memo` throws an error.",
      "C) The child re-renders every time the parent renders, defeating the purpose of `React.memo`.",
      "D) The arrow function is automatically memoized by React."
    ],
    answer: "C) The child re-renders every time the parent renders, defeating the purpose of `React.memo`.",
    explanation: "An inline arrow function creates a new memory reference on every parent render. Because the prop reference changes, `React.memo` sees it as a 'new' prop and forces a re-render. `useCallback` fixes this.",
    topic: "Performance & Optimization"
  },
  {
    question: "What is the defining characteristic of a Custom Hook in React?",
    options: [
      "A) It must return JSX.",
      "B) It is a JavaScript function whose name starts with 'use' and it calls other built-in React Hooks.",
      "C) It runs synchronously before the browser paints.",
      "D) It can be called conditionally inside `if` statements."
    ],
    answer: "B) It is a JavaScript function whose name starts with 'use' and it calls other built-in React Hooks.",
    explanation: "Custom hooks allow you to extract and reuse stateful logic. The 'use' prefix ensures React's linter enforces the Rules of Hooks on it.",
    topic: "Custom Hooks"
  },
  {
    question: "What is `useLayoutEffect` and how does it differ from `useEffect`?",
    options: [
      "A) It runs asynchronously before the DOM is mutated.",
      "B) It fires synchronously immediately after DOM mutations, but before the browser paints the screen.",
      "C) It is used exclusively for fetching data.",
      "D) It replaces standard CSS."
    ],
    answer: "B) It fires synchronously immediately after DOM mutations, but before the browser paints the screen.",
    explanation: "`useLayoutEffect` blocks the browser paint. It is strictly used for DOM measurements or mutations that must be calculated and applied before the user sees the screen, preventing visual flickering.",
    topic: "Hooks (Advanced)"
  },
  {
    question: "Why can't you call Hooks conditionally (inside loops, conditions, or nested functions)?",
    options: [
      "A) It causes syntax errors in JavaScript.",
      "B) Hooks rely on call order. Conditional calling breaks the order, causing React to misalign internal state with the correct Hook.",
      "C) Conditions cause memory leaks in closures.",
      "D) Conditional hooks trigger infinite loops."
    ],
    answer: "B) Hooks rely on call order. Conditional calling breaks the order, causing React to misalign internal state with the correct Hook.",
    explanation: "React maps hooks to a component via a linked list based on call order. If a hook is skipped conditionally, all subsequent hooks shift, breaking the internal state mapping.",
    topic: "Rules of Hooks"
  },
  {
    question: "What is a 'Stale Closure' in the context of React Hooks?",
    options: [
      "A) A memory leak caused by unmounted components.",
      "B) When a function (like a timeout or effect callback) captures an outdated state or prop value because its closure was created in an earlier render.",
      "C) A cached API response.",
      "D) When `useState` refuses to update."
    ],
    answer: "B) When a function (like a timeout or effect callback) captures an outdated state or prop value because its closure was created in an earlier render.",
    explanation: "Stale closures occur when an effect or callback lacks the proper dependencies in its array, causing it to execute using 'stale' state captured during the render in which it was created.",
    topic: "Rendering Behavior"
  },
  {
    question: "What does changing the `current` property of a `useRef` object do?",
    options: [
      "A) Triggers an immediate re-render.",
      "B) Triggers a re-render on the next tick.",
      "C) Mutates the value persistently across renders WITHOUT triggering a re-render.",
      "D) Resets the component state."
    ],
    answer: "C) Mutates the value persistently across renders WITHOUT triggering a re-render.",
    explanation: "`useRef` holds a mutable reference. Unlike `useState`, modifying `ref.current` is synchronous and completely silent to React's rendering engine.",
    topic: "Hooks (useRef)"
  },
  {
    question: "How does React 18's 'Automatic Batching' work?",
    options: [
      "A) It batches API requests into a single HTTP call.",
      "B) It batches multiple state updates inside promises, timeouts, and native event handlers into a single re-render.",
      "C) It groups console.logs together.",
      "D) It renders all components simultaneously in Web Workers."
    ],
    answer: "B) It batches multiple state updates inside promises, timeouts, and native event handlers into a single re-render.",
    explanation: "Prior to React 18, state updates inside async callbacks (like timeouts) triggered separate re-renders. React 18 automatically batches all state updates regardless of where they happen, drastically improving performance.",
    topic: "Performance & Optimization"
  },
  {
    question: "What is `React.Suspense` used for?",
    options: [
      "A) To delay the execution of an effect.",
      "B) To catch and display JavaScript errors gracefully.",
      "C) To specify a loading fallback UI while a component tree waits for an asynchronous operation (like lazy loading or data fetching) to finish.",
      "D) To suspend an animation."
    ],
    answer: "C) To specify a loading fallback UI while a component tree waits for an asynchronous operation (like lazy loading or data fetching) to finish.",
    explanation: "Suspense catches promises thrown by its descendants and renders a `fallback` (like a spinner) until the promises resolve and the components are ready to render.",
    topic: "Advanced React Features"
  },
  {
    question: "Which API allows you to customize the instance value that is exposed to parent components when using `ref`?",
    options: [
      "A) `useRef`",
      "B) `useImperativeHandle`",
      "C) `useLayoutEffect`",
      "D) `forwardRef`"
    ],
    answer: "B) `useImperativeHandle`",
    explanation: "`useImperativeHandle` works with `forwardRef` to customize the exact object and methods exposed to a parent component via a ref, encapsulating the child's internal DOM nodes.",
    topic: "Hooks (Advanced)"
  },
  {
    question: "What does `ReactDOM.createPortal` do?",
    options: [
      "A) Creates an API endpoint gateway.",
      "B) Teleports a component's JSX to be physically rendered in a different DOM node, while keeping it in the same React logic tree.",
      "C) Connects React to a Redux store.",
      "D) Enables SSR (Server Side Rendering)."
    ],
    answer: "B) Teleports a component's JSX to be physically rendered in a different DOM node, while keeping it in the same React logic tree.",
    explanation: "Portals are frequently used for Modals, Tooltips, and Dropdowns to escape `overflow: hidden` or `z-index` constraints of parent containers by appending them directly to `document.body`.",
    topic: "Advanced React Features"
  },
  {
    question: "What is the primary drawback of using `Context API` for high-frequency, complex global state (like mouse coordinates)?",
    options: [
      "A) Context API is deprecated in React 18.",
      "B) It causes unnecessary re-renders in EVERY component that consumes the context, even if they don't use the specific field that changed.",
      "C) It cannot store arrays or objects.",
      "D) It requires class components."
    ],
    answer: "B) It causes unnecessary re-renders in EVERY component that consumes the context, even if they don't use the specific field that changed.",
    explanation: "When a context value changes, React forces a re-render of ALL `useContext` consumers. This is highly inefficient for fast-changing data, where libraries like Zustand or Redux are preferred.",
    topic: "Context API"
  },
  {
    question: "What does the `useTransition` hook do in React 18?",
    options: [
      "A) Animates CSS properties.",
      "B) Marks a state update as a non-urgent 'transition', allowing React to interrupt it if a more urgent update (like a user click or typing) occurs.",
      "C) Transitions the user to a new URL route.",
      "D) Replaces Redux middleware."
    ],
    answer: "B) Marks a state update as a non-urgent 'transition', allowing React to interrupt it if a more urgent update (like a user click or typing) occurs.",
    explanation: "`useTransition` is crucial for concurrent rendering. It keeps the app responsive by pausing heavy rendering tasks (like filtering a massive list) to process high-priority user inputs first.",
    topic: "Performance & Optimization"
  },
  {
    question: "In class components, what is the equivalent of `useEffect` with an empty dependency array?",
    options: [
      "A) `componentDidUpdate`",
      "B) `componentWillUnmount`",
      "C) `componentDidMount`",
      "D) `getDerivedStateFromProps`"
    ],
    answer: "C) `componentDidMount`",
    explanation: "`componentDidMount` fires exactly once when the component is initially placed in the DOM, identical to `useEffect(..., [])`.",
    topic: "Class Components"
  }
];
