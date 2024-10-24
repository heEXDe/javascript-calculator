function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "mClear",





    () => {
      this.setState({ equation: 0 });
    });_defineProperty(this, "mInputNumberOrDot",

    event => {
      this.setState((prevState) => (
      {
        equation: prevState.equation.toString().
        replace(/^0+/, '') // removes zeros from the beginning of a number
        .replace(/\s*\.\s*/g, '.') // removes spaces surrounding dots
        .replace(/\.+/g, '.') // removes dots form a string of dots, except the first one
        .replace(/(\d+\.\d+)\./g, '$1') // removes a dot if it was preceded by a dot an a number
        + event.target.textContent }));


    });_defineProperty(this, "mInputSign",

    event => {
      this.setState(
      {
        equation: `${this.state.equation}${event.target.textContent}` });


    });_defineProperty(this, "mInputEqual",

    event => {
      let res = this.state.equation.
      toString().
      replace(/([+\-*/]){2,}/g, match => {return match.slice(-1) === '-' ? match.slice(-2) : match.slice(-1);});
      this.setState(
      {
        equation: `${math.evaluate(res)}` });


    });this.state = { equation: 0 };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "js-calc" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.equation), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "equals", onClick: this.mInputEqual }, "="), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "zero", onClick: this.mInputNumberOrDot }, "0"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "one", onClick: this.mInputNumberOrDot }, "1"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "two", onClick: this.mInputNumberOrDot }, "2"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "three", onClick: this.mInputNumberOrDot }, "3"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "four", onClick: this.mInputNumberOrDot }, "4"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "five", onClick: this.mInputNumberOrDot }, "5"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "six", onClick: this.mInputNumberOrDot }, "6"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "seven", onClick: this.mInputNumberOrDot }, "7"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "eight", onClick: this.mInputNumberOrDot }, "8"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "nine", onClick: this.mInputNumberOrDot }, "9"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "add", onClick: this.mInputSign }, "+"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "subtract", onClick: this.mInputSign }, "-"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "multiply", onClick: this.mInputSign }, "*"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "divide", onClick: this.mInputSign }, "/"), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "decimal", onClick: this.mInputNumberOrDot }, "."), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "clear", onClick: this.mClear }, "AC"), /*#__PURE__*/
      React.createElement("br", null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));







// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.