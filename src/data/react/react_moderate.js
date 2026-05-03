export const reactModerate = [
  {
    question: "What is the primary purpose of the `useEffect` hook?",
    options: [
      "A) To manage complex state.",
      "B) To perform side effects in functional components.",
      "C) To directly mutate the DOM.",
      "D) To define global context variables."
    ],
    answer: "B) To perform side effects in functional components.",
    explanation: "`useEffect` handles operations outside the scope of React's pure rendering, such as data fetching, subscriptions, or manual DOM mutations.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "What happens if you omit the dependency array in `useEffect`?",
    options: [
      "A) The effect runs only once on mount.",
      "B) The effect runs on every single render.",
      "C) The effect never runs.",
      "D) React throws an error."
    ],
    answer: "B) The effect runs on every single render.",
    explanation: "Omitting the dependency array `useEffect(() => {...})` tells React to run the effect after every render, which can lead to infinite loops if state is updated inside it.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "How do you replicate `componentDidMount` using hooks?",
    options: [
      "A) `useEffect(() => {...})`",
      "B) `useEffect(() => {...}, [])`",
      "C) `useMount(() => {...})`",
      "D) `useState(() => {...})`"
    ],
    answer: "B) `useEffect(() => {...}, [])`",
    explanation: "Passing an empty array `[]` ensures the effect runs exactly once after the initial render, mirroring `componentDidMount`.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "What does the cleanup function in `useEffect` do?",
    options: [
      "A) Clears the local storage.",
      "B) Cleans up side effects (like clearing intervals or unmounting listeners) before the component unmounts or before the effect runs again.",
      "C) Deletes the component from the DOM.",
      "D) Resets all state variables to their initial values."
    ],
    answer: "B) Cleans up side effects (like clearing intervals or unmounting listeners) before the component unmounts or before the effect runs again.",
    explanation: "The function returned by `useEffect` acts as a cleanup mechanism. It runs right before the component unmounts, and also right before the effect re-runs due to a dependency change.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "What is a 'controlled component' in React?",
    options: [
      "A) A component that is rendered inside an Error Boundary.",
      "B) A form input whose value is controlled by React state.",
      "C) A component that requires authentication to view.",
      "D) A component managed by a Higher-Order Component (HOC)."
    ],
    answer: "B) A form input whose value is controlled by React state.",
    explanation: "In controlled components, form data is handled by a React component's state (using the `value` prop and an `onChange` handler), making React the single source of truth.",
    topic: "Forms & Events"
  },
  {
    question: "What is the purpose of the React Context API?",
    options: [
      "A) To manage routing between pages.",
      "B) To securely store passwords in the browser.",
      "C) To pass data deeply through the component tree without manually passing props at every level.",
      "D) To optimize rendering speed automatically."
    ],
    answer: "C) To pass data deeply through the component tree without manually passing props at every level.",
    explanation: "Context API is used to avoid 'prop drilling' by sharing data (like themes, user auth) across the entire component tree globally.",
    topic: "Context API"
  },
  {
    question: "Which hook is used to consume data from a Context?",
    options: [
      "A) `useData`",
      "B) `useReducer`",
      "C) `useContext`",
      "D) `useRef`"
    ],
    answer: "C) `useContext`",
    explanation: "`useContext(MyContext)` accepts a context object and returns the current context value for that context.",
    topic: "Context API"
  },
  {
    question: "Why should you NOT use the array `index` as a `key` for list items when rendering lists that might be re-ordered?",
    options: [
      "A) React throws a compilation error.",
      "B) It negatively impacts performance and can cause bugs with component state if the list order changes.",
      "C) Indices cannot be converted to strings.",
      "D) It prevents the list from rendering entirely."
    ],
    answer: "B) It negatively impacts performance and can cause bugs with component state if the list order changes.",
    explanation: "If items are reordered, deleted, or inserted, the indices change. React relies on keys to identify components, so using indices causes React to confuse components, often leading to mixed-up local state (like input fields).",
    topic: "Lists & Keys"
  },
  {
    question: "What will happen if you update a state variable directly without using the setter function? (e.g., `state.count = 1`)",
    options: [
      "A) The UI updates correctly.",
      "B) React throws a fatal error.",
      "C) The state changes, but the component does NOT re-render to reflect the change.",
      "D) The state change is ignored completely."
    ],
    answer: "C) The state changes, but the component does NOT re-render to reflect the change.",
    explanation: "React relies on the setter function (like `setState` or `setCount`) to trigger the reconciliation and re-rendering process. Direct mutations mutate the memory but fail to update the UI.",
    topic: "Rendering Behavior"
  },
  {
    question: "What does `useReducer` provide that `useState` does not?",
    options: [
      "A) Global state management across different browser tabs.",
      "B) A way to handle complex state logic involving multiple sub-values, similar to Redux.",
      "C) The ability to mutate state directly.",
      "D) Automatic data caching."
    ],
    answer: "B) A way to handle complex state logic involving multiple sub-values, similar to Redux.",
    explanation: "`useReducer` is preferred when state logic is complex, involves multiple sub-values, or when the next state depends on the previous one, allowing the dispatching of actions.",
    topic: "Hooks (useReducer)"
  },
  {
    question: "What is an Uncontrolled Component?",
    options: [
      "A) A component lacking a parent.",
      "B) A form component where the DOM itself handles the form data, accessed via refs.",
      "C) A component that infinitely re-renders.",
      "D) A component strictly written in class syntax."
    ],
    answer: "B) A form component where the DOM itself handles the form data, accessed via refs.",
    explanation: "Unlike controlled components, uncontrolled components do not tie their value to React state. Instead, developers use a `ref` to pull values directly from the DOM when needed.",
    topic: "Forms & Events"
  },
  {
    question: "What is 'prop drilling'?",
    options: [
      "A) Passing props through multiple layers of intermediate components to reach a deeply nested child.",
      "B) Modifying props inside a child component.",
      "C) Using a drill-down menu component.",
      "D) Type-checking props with PropTypes."
    ],
    answer: "A) Passing props through multiple layers of intermediate components to reach a deeply nested child.",
    explanation: "Prop drilling refers to the tedious process of passing data through multiple intermediate components that don't need the data themselves, simply to pass it down the tree.",
    topic: "Props & Component Tree"
  },
  {
    question: "How does React router handle navigation (`<Link>`)?",
    options: [
      "A) It performs a full page refresh and HTTP request.",
      "B) It intercepts the click, prevents default behavior, and updates the URL via the HTML5 History API.",
      "C) It replaces the `<body>` element entirely.",
      "D) It opens a new browser tab."
    ],
    answer: "B) It intercepts the click, prevents default behavior, and updates the URL via the HTML5 History API.",
    explanation: "React Router enables client-side routing. `<Link>` prevents the browser's default full-page reload and uses `window.history.pushState` to update the URL and render new components instantly.",
    topic: "React Router"
  },
  {
    question: "What will `setCount(count + 1); setCount(count + 1);` inside a single function do if `count` is initially 0?",
    options: [
      "A) It will set `count` to 2.",
      "B) It will set `count` to 1.",
      "C) It will throw an error.",
      "D) It will cause an infinite loop."
    ],
    answer: "B) It will set `count` to 1.",
    explanation: "State updates are batched and async. Both calls read the current state `count` (which is 0). To increment twice, you must use the functional updater: `setCount(prev => prev + 1)`.",
    topic: "Rendering Behavior"
  },
  {
    question: "Which hook allows you to directly interact with a DOM element?",
    options: [
      "A) `useState`",
      "B) `useEffect`",
      "C) `useRef`",
      "D) `useMemo`"
    ],
    answer: "C) `useRef`",
    explanation: "`useRef` creates a mutable reference object whose `.current` property can be attached to a DOM element, allowing direct interaction without triggering re-renders.",
    topic: "Hooks (useRef)"
  }
];
