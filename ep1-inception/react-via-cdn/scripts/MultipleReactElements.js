// An li React element(s)
const item1El = React.createElement("li", {"id": "1", "key": "i1"}, "Learn Namaste React");
const item2El = React.createElement("li", {"id": "2", "key": "i2"}, "Relax in free time");

// A ul React Element.
const ulEl = React.createElement("ul", {"id": "things-to-do"}, [item1El, item2El]);

// A root Element
const rootEl = ReactDOM.createRoot(document.getElementById("root"));

// render the ul React Element inside the root.
rootEl.render(ulEl);



