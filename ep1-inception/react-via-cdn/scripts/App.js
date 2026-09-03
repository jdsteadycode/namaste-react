// A span Element of React.
const spanEl = React.createElement("span", {}, "First Try in React");

// A paragraph Element which contains this above span El.
const paraEl = React.createElement("p", {}, spanEl);

// creating root of section#root for React DOM.
const rootEl = ReactDOM.createRoot(document.getElementById("root"));

// rendering above paragraph el inside root element!
rootEl.render(paraEl);