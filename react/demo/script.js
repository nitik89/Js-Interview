function Counter() {
  return <div>Counter : 0</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));
