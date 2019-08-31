import React from 'react';

class Lesson extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Lesson;
