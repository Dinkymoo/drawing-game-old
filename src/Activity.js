import React, { Fragment } from 'react';
import Canvas from './Canvas';
import Instruction from './Instruction';
import beginner from './assets/images/draw-beginner.PNG';
import beginnerClip from './assets/clips/draw-beginner.mp3'
//import base from './base';

class Activity extends React.Component {

  constructor() {
    super()
    this.state = { instructions: [{
      heading: "Read and Draw",
      instruction: {
        id: 1, 
        name: "Beginner", 
        question: 
      `<div>
      <ol>
        <li>Draw a dot in the centre of your page.</li>
        <li>
          Starting at the top left-hand corner of the page rule a straight
          line through the dot finishing at the bottom right hand corner.
        </li>
        <li>
          Starting at the bottom left-hand corner of the page rule a line
          through the dot, finishing at the top right hand corner.
        </li>
        <li>
          Write your name in the triangle in the centre of the left-hand side
          of the page.
        </li>
      </ol>
      </div>`, 
      answer: beginner , hasCanvas: false}
    },
    {
      heading: "Listen and Draw",
      instruction: {id: 2, name: "Intermediate", question: `<div>
      <audio ref=”audio_tag” src=beginnerClip controls autoPlay/>
      </div>`,answer: "2", hasCanvas: true}
    },
    {
      heading: "Instruction3",
      instruction: {id: 3, name: "Advanced", question: '<h1>Three</h1>', answer: "3", hasCanvas: true }
    }]
    }
  }
  render() {
 
  return (
    <div>
        <Fragment>
          <h3 style={{ textAlign: 'center' }}>{this.props.heading}</h3>
          <div className="main">
            <h5>{this.state.instructions[1].heading}</h5>
            <Instruction 
            name= {this.state.instructions[1].instruction.name} 
            question={this.state.instructions[1].instruction.question}
            answer={this.state.instructions[1].instruction.answer}
            hide={this.state.instructions[1].instruction.showCanvas}/>
            <Canvas hide={ false }/>
          </div>
        </Fragment>
  
    </div>
    );
  }
}
export default Activity;

    
