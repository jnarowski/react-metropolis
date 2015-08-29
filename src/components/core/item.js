import React, { Component } from 'react';
import PaginatorBox from '../shared/grid/pagination.js';
import Buttons from '../shared/ui/button.js';

export default class Item extends Component {
	render() {
		return (
			<div>
	      		<h1>
	      			{this.props.name}
	      		</h1>
	      		<div>
	      			<a href={'/#/show/' + this.props.name}>
	      				Details
	      			</a>
	      		</div>
      		</div>
    	);
  	}
}