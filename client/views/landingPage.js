import React, {Component} from 'react';
import {Link} from 'react-router';
import Box from './box.js';

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
        <Box />
      </div>
    )
  }
}
