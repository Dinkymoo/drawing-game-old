import React from 'react';

class Instruction extends React.Component {

  constructor() {
    super()
    
  }
  render() {
  return (
    <div>
      <h1>{this.props.question}</h1>
    </div>
    )
  }
}
export default Instruction
    
