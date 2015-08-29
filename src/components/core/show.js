import React, { Component } from 'react';
import PaginatorBox from '../shared/grid/pagination.js';
import Buttons from '../shared/ui/button.js';

import ComponentConfig from '../shared/componentConfig.js';

export default class Show extends Component {

	buildComponent(){
		let conf = ComponentConfig.get(this.props.params.component_name);

		switch(this.props.params.component_name) {
		    case 'pager': return (<PaginatorBox {...conf.defaultProps} />)
		    case 'button': return (<Buttons {...conf.defaultProps} />)
		}
	}

  render() {
  	let component = this.buildComponent();
		let divStyle = {
			backgroundColor: '#eee'
		};

    return (
    	<div>
    		<div style={divStyle}><a href="/#/">Back</a></div>
    		<h1>{this.props.params.component_name}</h1>
    		{component}
    	</div>);
  }

}