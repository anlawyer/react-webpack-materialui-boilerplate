import React, {Component} from 'react';

const style = {
  p: {
    color: 'purple'
  }
};

export default class Box extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <div>
        <p style={style.p}>I want to be a box.</p>
      </div>
    );
  }
}
