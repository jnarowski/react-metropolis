import React, { Component } from 'react';
import PaginatorBox from '../shared/grid/pagination.js';

export default class Show extends Component {
  render() {
  	console.log(this.props.params);

    return (
      <PaginatorBox />
    );
  }
}