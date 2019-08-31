import React from 'react';
import beginnerClip from './assets/clips/draw-beginner.mp3'
class Instruction extends React.Component {

  constructor() {
    super()
    
  }
  render() {
  return (
    <div>
      <h1>{this.props.name}</h1>
      <span dangerouslySetInnerHTML={{__html: this.props.question}} ></span>
      <img src={this.props.answer} hidden={this.props.hide}/>
    </div>
    )
  }
}
export default Instruction
    
