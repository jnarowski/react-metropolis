import React, { Component } from 'react';
import PaginatorBox from '../shared/grid/pagination.js';

export default class Show extends Component {

	buildComponent(){
		switch(this.props.params.component_name) {
		    case 'pagination':
		        return "Dude..."
		        break;
		    case n:
		        break;
		    default:
		        2
		}
	}

  render() {
  	console.log(this.props.params);
  	let component = buildComponent();

  	let stuff = {
  		recordCount: 300
  	}

    return (
      <PaginatorBox {...stuff} />
    );
  }
}