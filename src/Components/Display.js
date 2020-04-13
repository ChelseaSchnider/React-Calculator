import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Display extends Component {
  render() {
    const displayGrid = {
      display: 'grid',
      width: '25%',
      margin: 'auto',
    }

    const displayText = {
      resize: 'none',
      fontSize: 30,
      backgroundColor: '#263238',
      color: 'white',
    }

    return (
      <Form style={displayGrid}>
        <Form.Control onChange={() => console.log()} as="textarea" style={displayText} value={this.props.displayValue} />
      </Form>
    )
  }
};

export default Display;