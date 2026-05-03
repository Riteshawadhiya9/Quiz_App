export const reactEasy = [
  {
    question: "What is React primarily used for?",
    options: [
      "A) Building database architectures",
      "B) Building user interfaces",
      "C) Handling server-side logic",
      "D) Routing HTTP requests"
    ],
    answer: "B) Building user interfaces",
    explanation: "React is a JavaScript library specifically designed for building user interfaces, often for single-page applications.",
    topic: "Basic Setup & Ecosystem"
  },
  {
    question: "What does JSX stand for?",
    options: [
      "A) JavaScript XML",
      "B) Java Syntax Extension",
      "C) JSON X",
      "D) JavaScript Extension"
    ],
    answer: "A) JavaScript XML",
    explanation: "JSX stands for JavaScript XML. It allows you to write HTML-like syntax inside JavaScript, which React then transforms into standard JavaScript function calls.",
    topic: "JSX & Elements"
  },
  {
    question: "Which hook is used to add state to a functional component?",
    options: [
      "A) useContext",
      "B) useEffect",
      "C) useState",
      "D) useRef"
    ],
    answer: "C) useState",
    explanation: "`useState` is the fundamental Hook that lets you add React state to function components.",
    topic: "Hooks (useState)"
  },
  {
    question: "What is the correct way to pass a variable `name` as a prop to a child component called `User`?",
    options: [
      "A) `<User name={name} />`",
      "B) `<User prop={name} />`",
      "C) `<User>{name}</User>`",
      "D) `<User name=\"name\" />`"
    ],
    answer: "A) `<User name={name} />`",
    explanation: "In JSX, variables are passed as props using curly braces `{}` to evaluate the JavaScript expression.",
    topic: "Props & Component Tree"
  },
  {
    question: "How do you conditionally render a component in React if `isLoggedIn` is true?",
    options: [
      "A) `{if(isLoggedIn) return <Dashboard />}`",
      "B) `{isLoggedIn && <Dashboard />}`",
      "C) `isLoggedIn ? <Dashboard /> : null`",
      "D) Both B and C"
    ],
    answer: "D) Both B and C",
    explanation: "In React, inline conditional rendering is typically done using the logical AND (`&&`) operator or the ternary operator (`? :`).",
    topic: "Conditional Rendering"
  },
  {
    question: "Why is it important to use a `key` prop when rendering a list of elements?",
    options: [
      "A) It styles the list items.",
      "B) It allows React to identify which items have changed, been added, or removed, optimizing rendering.",
      "C) It encrypts the data.",
      "D) It converts the elements into an array."
    ],
    answer: "B) It allows React to identify which items have changed, been added, or removed, optimizing rendering.",
    explanation: "Keys help React's reconciliation algorithm identify elements in a list, preventing unnecessary re-renders or state mix-ups when the list mutates.",
    topic: "Lists & Keys"
  },
  {
    question: "What is the Virtual DOM?",
    options: [
      "A) A secure version of the browser DOM.",
      "B) A lightweight JavaScript representation of the actual DOM.",
      "C) An external library for styling components.",
      "D) A feature unique to class components."
    ],
    answer: "B) A lightweight JavaScript representation of the actual DOM.",
    explanation: "The Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first, compares it with the previous version (diffing), and efficiently updates the real DOM.",
    topic: "Virtual DOM & Reconciliation"
  },
  {
    question: "What happens when you call `setState()` (or a state setter function)?",
    options: [
      "A) React immediately updates the DOM.",
      "B) React schedules an update, triggering a re-render of the component.",
      "C) React changes the global state.",
      "D) React halts execution until the state changes."
    ],
    answer: "B) React schedules an update, triggering a re-render of the component.",
    explanation: "State updates in React are asynchronous. Calling a setter function schedules a re-render where the new state value will be used.",
    topic: "Rendering Behavior"
  },
  {
    question: "Which of the following is true about Props?",
    options: [
      "A) Props are mutable and can be changed by the child component.",
      "B) Props are read-only and passed down from parent to child.",
      "C) Props are used for local state management.",
      "D) Props can only be strings."
    ],
    answer: "B) Props are read-only and passed down from parent to child.",
    explanation: "Props (short for properties) are strictly read-only. A component must never modify its own props.",
    topic: "Props & Component Tree"
  },
  {
    question: "What is the purpose of Fragments (`<>...</>`) in React?",
    options: [
      "A) To add CSS grid properties.",
      "B) To group a list of children without adding extra nodes to the DOM.",
      "C) To define an error boundary.",
      "D) To create reusable variables."
    ],
    answer: "B) To group a list of children without adding extra nodes to the DOM.",
    explanation: "React requires a single root element to be returned from a component. Fragments allow grouping elements without cluttering the HTML output with wrapper `<div>`s.",
    topic: "JSX & Elements"
  },
  {
    question: "How do you bind an inline event handler in React?",
    options: [
      "A) `onclick=\"handleClick()\"`",
      "B) `onClick={handleClick}`",
      "C) `on-click={handleClick}`",
      "D) `onClick={() => handleClick}`"
    ],
    answer: "B) `onClick={handleClick}`",
    explanation: "React uses camelCase for event handlers and accepts a function reference passed inside curly braces.",
    topic: "Event Handling"
  },
  {
    question: "What is 'lifting state up' in React?",
    options: [
      "A) Moving state to the Redux store.",
      "B) Moving state from a child component to a common parent component to share it among siblings.",
      "C) Converting a class component to a functional component.",
      "D) Using Context API everywhere."
    ],
    answer: "B) Moving state from a child component to a common parent component to share it among siblings.",
    explanation: "When multiple components need to reflect the same changing data, the state is 'lifted' to their closest common ancestor.",
    topic: "State Management"
  },
  {
    question: "Which of the following creates a functional component in modern React?",
    options: [
      "A) `function MyComp() { return <div />; }`",
      "B) `class MyComp extends React.Component {}`",
      "C) `React.createComponent()`",
      "D) `const MyComp = new Component();`"
    ],
    answer: "A) `function MyComp() { return <div />; }`",
    explanation: "A functional component is simply a JavaScript function that returns React elements (JSX).",
    topic: "Functional vs Class Components"
  },
  {
    question: "What is the default behavior of an HTML form submission in React?",
    options: [
      "A) It automatically validates fields.",
      "B) It refreshes the page.",
      "C) It sends an AJAX request.",
      "D) It does nothing unless handled."
    ],
    answer: "B) It refreshes the page.",
    explanation: "Forms in React retain the default HTML behavior. You must call `e.preventDefault()` inside the `onSubmit` handler to prevent the page from refreshing.",
    topic: "Forms & Events"
  },
  {
    question: "Which package provides the DOM-specific methods to render a React application?",
    options: [
      "A) `react`",
      "B) `react-native`",
      "C) `react-dom`",
      "D) `redux`"
    ],
    answer: "C) `react-dom`",
    explanation: "The `react-dom` package provides DOM-specific methods like `createRoot()` or `render()` that can be used at the top level of your app.",
    topic: "Basic Setup & Ecosystem"
  }
];
