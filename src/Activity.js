import React, { Fragment } from 'react';
import Canvas from './Canvas';
import Instruction from './Instruction';

//import base from './base';

class Activity extends React.Component {

  constructor() {
    super()
    this.state = { instructions: [{
      heading: "Instruction1",
      instruction: {id: 1, name: "Beginner", question: "<h1>One</h1>", answer: "1", hasCanvas: false}
    },
    {
      heading: "Instruction2",
      instruction: {id: 2, name: "Intermediate", question: '<h1>Two</h1>',answer: "2", hasCanvas: true}
    },
    {
      heading: "Instruction3",
      instruction: {id: 3, name: "Advanced", question: '<h1>Three</h1>', answer: "3", hasCanvas: true }
    }]
    }
    console.log(this.state.instructions[0].heading)
    console.log(this.state.instructions[0].instruction.question)
  }
  render() {
 
  return (
    <div>
        <Fragment>
          <h3 style={{ textAlign: 'center' }}>{this.props.heading}</h3>
          <div className="main">
            <h5>{this.state.instructions[0].heading}</h5>
            <Instruction question={this.state.instructions[0].instruction.question}/>
            <Canvas hide={ false }/>
          </div>
        </Fragment>
  
    </div>
    );
  }
}
export default Activity;


{/* <div>
<ol className="instructions">
  <h3>{this.props.title}</h3>
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
</div> */}
    
