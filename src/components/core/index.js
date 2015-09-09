import React, { Component } from 'react';
import ComponentConfig from '../shared/componentConfig.js';
import Item from '../core/item.js';

const conf = ComponentConfig.getAll();

export default class Index extends Component {
  render() {
  	let items = [];

		Object.keys(conf).forEach(function(key) {
		  let obj = conf[key];
		  items.push(
				<Item key={key} name={key} obj={obj} />
			);
		});

    return (
    	<div className='test'>
    		{items}
    	</div>
    );
  }
}