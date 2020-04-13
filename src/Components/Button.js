import React, { Component } from 'react';
import '../css/Button.css'
import Button from 'react-bootstrap/Button';

class Buttons extends Component {
  render() {
    const buttonGrid = {
      display: 'grid',
      gridTemplateColumns: '25% 25% 25% 25%',
      width: '25%',
      margin: 'auto'
    }
    const buttonGridItemSpan = {
      gridColumn: 'span 2',
    }
    return (
      <div style={buttonGrid}>                
        <Button onClick={this.props.calcClear} className='calcButton' size="lg" variant="dark">AC</Button>
        <Button onClick={this.props.toggleSign} className='calcButton' size="lg" variant="secondary">±</Button>
        <Button onClick={this.props.calcPercentage} className='calcButton' size="lg" variant="dark">%</Button>
        <Button onClick={this.props.calcMathOperator} className='calcButton' size="lg" variant="danger">/</Button>
                
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="secondary">7</Button>
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="dark">8</Button>
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="secondary">9</Button>
        <Button onClick={this.props.calcMathOperator} className='calcButton' size="lg" variant="primary">*</Button>
                
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="dark">4</Button>
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="secondary">5</Button>
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="dark">6</Button>
        <Button onClick={this.props.calcMathOperator} className='calcButton' size="lg" variant="danger">-</Button>

        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="secondary">1</Button>
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="dark">2</Button>
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="secondary">3</Button>
        <Button onClick={this.props.calcMathOperator} className='calcButton' size="lg" variant="primary">+</Button>
                
        <Button onClick={this.props.calcDigit} className='calcButton' size="lg" variant="dark" style={buttonGridItemSpan}>0</Button>
        <Button onClick={this.props.calcDecimal} className='calcButton' size="lg" variant="dark">.</Button>
        <Button onClick={this.props.calcMathOperator} className='calcButton' size="lg" variant="danger">=</Button>
      </div>
    )
  }
};

export default Buttons