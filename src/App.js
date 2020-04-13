import React, { Component } from 'react';
import './App.css';
import Buttons from './Components/Button';
import Display from './Components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculatorOperations = {
  '/': (currentValue, inputValue) => currentValue / inputValue,
  '*': (currentValue, inputValue) => currentValue * inputValue,
  '+': (currentValue, inputValue) => currentValue + inputValue,
  '-': (currentValue, inputValue) => currentValue - inputValue,
  '=': (currentValue, inputValue) => currentValue
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      displayValue: '0',
      awaitingOperand: false,
      operator: null,
    }

    this.calcDigit = this.calcDigit.bind(this)
    this.calcDecimal = this.calcDecimal.bind(this)
    this.calcClear = this.calcClear.bind(this)
    this.toggleSign = this.toggleSign.bind(this)
    this.calcPercentage = this.calcPercentage.bind(this)
    this.calcMathOperator = this.calcMathOperator.bind(this)
  }

  calcDigit(e) {
    const { displayValue, awaitingOperand } = this.state
      console.log(awaitingOperand)

      // if this statement is true, the operator key has already been clicked
    if (awaitingOperand) {
      let buttonValue = e.target.innerText
      this.setState({
        displayValue: String(buttonValue),
        awaitingOperand: false
      })
      console.log(buttonValue)

    } else {
      let buttonValue = e.target.innerText
        console.log(buttonValue)
      this.setState({
        displayValue: displayValue === '0' ? buttonValue : displayValue + buttonValue
      })
    }
  }

  calcDecimal() {
    const { displayValue, awaitingOperand } = this.state
    if (awaitingOperand) {
      this.setState({
        displayValue: '0.',
        awaitingOperand: false
        })
    }
      // if the '.' (point item) does not yet exist    
    else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        awaitingOperand: false
      })
    }
  }

  calcClear() {
    this.setState({
      value: null,
      displayValue: '0',
      awaitingOperand: false,
      operator: null
    })
  }

  toggleSign() {
    const { displayValue } = this.state
    this.setState({
      displayValue: displayValue.charAt(0) === '-' ? displayValue.substring(1) : '-' + displayValue
    })
  }

  calcPercentage() {
    const { displayValue } = this.state
    const percent = parseFloat(displayValue)
    this.setState({
      displayValue: String(percent / 100) 
    })
  }

  calcMathOperator(e) {
    const { displayValue, operator, value } = this.state
    const inputValue = parseFloat(displayValue)
      console.log(inputValue)

    let operation = e.target.innerText
      console.log(operation)

    if (value == null) {
      this.setState({
        value: inputValue
      })
      console.log(value)
    } else {
      const currentValue = value
        console.log(currentValue)
      const newValue = CalculatorOperations[operator](currentValue, inputValue)

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }
      console.log(value)

    this.setState({
      awaitingOperand: true,
      operator: operation
    })
  }

  render() {
    const calcPosition = {
      marginTop: '10%',
    }

    return (
      <div className="App" style={calcPosition}>
        <Display displayValue={this.state.displayValue} />
        <Buttons
          calcDigit={this.calcDigit}
          calcDecimal={this.calcDecimal}
          calcClear={this.calcClear}
          toggleSign={this.toggleSign}
          calcPercentage={this.calcPercentage}
          calcMathOperator={this.calcMathOperator} 
        />
      </div>
    )
  }
};

export default App;
