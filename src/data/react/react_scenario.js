export const reactScenario = [
  {
    question: "Scenario: You have a `count` state. In a single `onClick` handler, you call `setCount(count + 1)` three times. If `count` starts at 0, what is the value of `count` after the re-render?",
    options: [
      "A) 3",
      "B) 0",
      "C) 1",
      "D) Error"
    ],
    answer: "C) 1",
    explanation: "State updates are batched. Because `count` is captured from the current render closure (value 0), all three calls essentially execute `setCount(0 + 1)`. To get 3, you must use `setCount(prev => prev + 1)`.",
    topic: "Rendering Behavior"
  },
  {
    question: "Scenario: A `useEffect` is meant to fetch data when a `userId` prop changes. However, it runs continuously in an infinite loop. What is the most likely cause?",
    options: [
      "A) `userId` is a string.",
      "B) The component updates a state variable inside the effect, but the dependency array is missing or includes that frequently changing state.",
      "C) The fetch call is asynchronous.",
      "D) The component is wrapped in `React.memo`."
    ],
    answer: "B) The component updates a state variable inside the effect, but the dependency array is missing or includes that frequently changing state.",
    explanation: "If an effect updates a state variable that triggers a re-render, and that state is inside the dependency array (or the array is missing entirely), the effect will fire again, causing an infinite loop.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "Scenario: You pass an array `[1, 2, 3]` directly as a prop to a `Child` component wrapped in `React.memo`. The `Parent` re-renders for an unrelated reason. Does the `Child` re-render?",
    options: [
      "A) No, because the array contents are identical.",
      "B) Yes, because `React.memo` does a shallow comparison, and the array literal `[1,2,3]` creates a new memory reference on every Parent render.",
      "C) No, because arrays are ignored by `React.memo`.",
      "D) Yes, but only in strict mode."
    ],
    answer: "B) Yes, because `React.memo` does a shallow comparison, and the array literal `[1,2,3]` creates a new memory reference on every Parent render.",
    explanation: "Object and array literals inside render functions always create new references. `React.memo` compares `prevProp === nextProp`. Since memory references differ, it returns false, causing a re-render. You must wrap the array in `useMemo`.",
    topic: "Performance & Optimization"
  },
  {
    question: "Scenario: You have a counter `timer` inside a `setInterval` in `useEffect`. The timer stays at 1 forever instead of incrementing. Why?",
    options: [
      "A) `setInterval` does not work in React.",
      "B) Stale Closure: the `setInterval` callback only captured the initial `timer` value (0) when it was created. It keeps setting it to 0 + 1.",
      "C) `useRef` was used instead of `useState`.",
      "D) The `setInterval` needs a smaller delay."
    ],
    answer: "B) Stale Closure: the `setInterval` callback only captured the initial `timer` value (0) when it was created. It keeps setting it to 0 + 1.",
    explanation: "If `timer` is not in the dependency array, the interval callback uses the stale value from the first render. Using functional updates `setTimer(prev => prev + 1)` completely avoids this stale closure problem.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "Scenario: You need a form input to immediately focus when a Modal component opens. What is the correct pattern?",
    options: [
      "A) Use `document.getElementById('input').focus()` inside `useState`.",
      "B) Assign a `useRef` to the input, and call `ref.current.focus()` inside a `useEffect` on mount.",
      "C) Set the `autoFocus` property via Redux.",
      "D) Put `focus()` directly inside the component render body."
    ],
    answer: "B) Assign a `useRef` to the input, and call `ref.current.focus()` inside a `useEffect` on mount.",
    explanation: "DOM manipulations should only occur in effects after the DOM has been painted. Attaching a `ref` to the element and focusing it inside `useEffect(..., [])` is the standard React pattern.",
    topic: "Hooks (useRef)"
  },
  {
    question: "Scenario: You are mapping over a massive array of users. You use `Math.random()` as the `key` prop to guarantee uniqueness. What happens when the list is updated?",
    options: [
      "A) The list performs exceptionally well because keys are truly unique.",
      "B) React will completely unmount and recreate every single DOM node on every render, destroying performance and losing local component state.",
      "C) React throws a warning but works normally.",
      "D) The items will render in random order."
    ],
    answer: "B) React will completely unmount and recreate every single DOM node on every render, destroying performance and losing local component state.",
    explanation: "Keys must be stable across renders. Using random values forces React's diffing algorithm to assume every element is brand new, entirely discarding the previous DOM nodes and destroying focus/state.",
    topic: "Lists & Keys"
  },
  {
    question: "Scenario: You write a Custom Hook `useFetch`. Can two different components using `useFetch` share the exact same state?",
    options: [
      "A) Yes, state in Custom Hooks is globally shared by default.",
      "B) No, Custom Hooks reuse stateful LOGIC, not state. Each call to the hook gets a completely isolated, independent state.",
      "C) Only if they are sibling components.",
      "D) Only if wrapped in `React.memo`."
    ],
    answer: "B) No, Custom Hooks reuse stateful LOGIC, not state. Each call to the hook gets a completely isolated, independent state.",
    explanation: "Calling a custom hook simply inlines the `useState` and `useEffect` calls into the component. The state is strictly tied to the component instance invoking it.",
    topic: "Custom Hooks"
  },
  {
    question: "Scenario: A React component fetches user data. While waiting, the user navigates away, unmounting the component. The fetch completes and calls `setUser(data)`. What happens?",
    options: [
      "A) The component automatically remounts.",
      "B) The fetch request is retroactively cancelled.",
      "C) React throws a 'Can't perform a React state update on an unmounted component' memory leak warning (pre-React 18).",
      "D) The global state is corrupted."
    ],
    answer: "C) React throws a 'Can't perform a React state update on an unmounted component' memory leak warning (pre-React 18).",
    explanation: "Attempting to update state on a destroyed component causes this famous warning. To fix it, you either use an `AbortController` to cancel the fetch, or use a cleanup boolean flag `isMounted` in the effect.",
    topic: "Hooks (useEffect)"
  },
  {
    question: "Scenario: You have a deeply nested `Button` component that needs access to a `theme` variable located 5 levels up in `App.js`. How do you cleanly pass it without prop drilling?",
    options: [
      "A) Make `theme` a global `window` variable.",
      "B) Wrap `App` in a `ThemeContext.Provider` and use `useContext(ThemeContext)` inside the `Button`.",
      "C) Use `React.cloneElement`.",
      "D) Use `forwardRef`."
    ],
    answer: "B) Wrap `App` in a `ThemeContext.Provider` and use `useContext(ThemeContext)` inside the `Button`.",
    explanation: "The Context API is designed precisely for this scenario: broadcasting global data (themes, auth) to deep components without passing props manually through every intermediate level.",
    topic: "Context API"
  },
  {
    question: "Scenario: You want to measure the exact bounding box (width/height) of a `div` just before it paints to the screen to calculate tooltip positioning. Which hook do you use?",
    options: [
      "A) `useEffect`",
      "B) `useMemo`",
      "C) `useLayoutEffect`",
      "D) `useRef`"
    ],
    answer: "C) `useLayoutEffect`",
    explanation: "`useLayoutEffect` fires synchronously after DOM mutations but BEFORE the browser paint. Measuring and repositioning elements here prevents visual flickering.",
    topic: "Hooks (Advanced)"
  },
  {
    question: "Scenario: You have an input field `<input value={name} />` but you forgot to provide an `onChange` handler. What happens when you type?",
    options: [
      "A) The input updates normally.",
      "B) The browser crashes.",
      "C) The input is completely frozen/read-only and ignores user typing.",
      "D) React throws a fatal error."
    ],
    answer: "C) The input is completely frozen/read-only and ignores user typing.",
    explanation: "By providing a `value` prop without an `onChange` handler, you create a strictly controlled component whose state cannot be changed. React will freeze the input to whatever `name` evaluates to.",
    topic: "Forms & Events"
  },
  {
    question: "Scenario: You have an Expensive component that takes 500ms to render. You wrap it in `useMemo`. What is wrong with this approach?",
    options: [
      "A) `useMemo` cannot be used on components, only values. You should use `React.memo` to wrap components.",
      "B) `useMemo` makes it slower.",
      "C) Nothing, it works perfectly.",
      "D) `useMemo` requires an empty dependency array."
    ],
    answer: "A) `useMemo` cannot be used on components, only values. You should use `React.memo` to wrap components.",
    explanation: "While technically you can `useMemo` a JSX element, the standard and correct semantic way to prevent a component from re-rendering is wrapping the component definition in the `React.memo` Higher-Order Component.",
    topic: "Performance & Optimization"
  },
  {
    question: "Scenario: `const [user, setUser] = useState({name: 'John', age: 25});` You call `setUser({age: 26})`. What is the result of the `user` state?",
    options: [
      "A) `{name: 'John', age: 26}`",
      "B) `{age: 26}`",
      "C) An error.",
      "D) `{name: undefined, age: 26}`"
    ],
    answer: "B) `{age: 26}`",
    explanation: "Unlike class component `this.setState()`, the `useState` hook DOES NOT automatically merge objects. You must manually spread the old state: `setUser(prev => ({...prev, age: 26}))`.",
    topic: "Hooks (useState)"
  },
  {
    question: "Scenario: A parent component renders a child component dynamically: `{isVisible && <Child />}`. When `isVisible` flips from false to true, what lifecycle event occurs in the child?",
    options: [
      "A) Update",
      "B) Unmount",
      "C) Mount",
      "D) Nothing"
    ],
    answer: "C) Mount",
    explanation: "When the condition evaluates to true, the `<Child />` component is added to the DOM for the first time in this cycle. This triggers mounting effects (`useEffect` with empty array).",
    topic: "Component Lifecycle"
  },
  {
    question: "Scenario: You need a variable to store a Web Socket connection instance. It should persist across re-renders, but updating it should NOT trigger a re-render. What do you use?",
    options: [
      "A) `useState`",
      "B) `let socket = null;` outside the component.",
      "C) `useRef`",
      "D) `useMemo`"
    ],
    answer: "C) `useRef`",
    explanation: "`useRef` is not just for DOM elements. It acts as a persistent instance variable. Mutating `ref.current` preserves data across renders without causing the component to re-render.",
    topic: "Hooks (useRef)"
  }
];
