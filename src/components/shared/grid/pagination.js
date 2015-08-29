import React, { Component } from 'react';
import './pagination.scss'

let classNames = require('classnames');

export default class PaginatorRow extends Component {
	static propTypes = {
		onClick: React.PropTypes.func.isRequired
	}

	render() {
		let className; 

		if(this.props.currentPage == this.props.pageNum){
			className = 'active';
		}

		return (
	    <li className={className}>
	      <a onClick={this.props.onClick}>{this.props.pageNum}</a>
	    </li>
		);
	}
};

export default class PaginatorBox extends Component {
	static propTypes = {
		recordCount: React.PropTypes.number.isRequired
	}

	static defaultProps = {
		perPage: 50
	}

	constructor(props) {
		super(props);
		this.state = {
			perPage: 50,
			totalPages: this._getPageCount(this.props.perPage, this.props.recordCount),
			currentPage: props.currentPage || 1
		}
	}

	canPrev() {
		return this.state.currentPage != 1
	}

	canNext() {
		console.log(this.state);
		return this.state.currentPage < this.state.totalPages;
	}


	handlePrevious = (e) => {
		e.preventDefault();
		this._setPage(this.state.currentPage - 1);
	}

	handleNext = (e) => {
		e.preventDefault();
		this._setPage(this.state.currentPage + 1);
	}

	handlePageChange(page) {
		this._setPage(page);
	}

	_setPage(page) {
		this.setState({ 
			currentPage: page
		})
	}

	_getPageCount(perPageCount, recordCount) {
		return Math.ceil(recordCount / perPageCount);
	}

	_getPages(perPageCount, recordCount) {
		let pages = [1,2,3,4,5,6];
		let pageCount = this._getPageCount(perPageCount, recordCount);

		// for(let pageNum of pageCount) {
		//     pages.push(pageNum+1);
		// }

		return pages;
	}

	_canShowFirst() {
		return this.state.currentPage >= 5;
	}

	_canShowLast() {
		return this.totalPages - this.state.currentPage >= 4;
	}

	_currentInterval() {
		let startIndex = (this.state.currentPage >= 5 ? this.state.currentPage - 2 : 1);
		let endIndex   = (this.state.currentPage <= (this.props.totalPages - 4) ? this.state.currentPage + 2 : this.props.totalPages);
	}

	render() {
		let prevClass = 'disabled';
		let nextClass = 'disabled';
		let items = this._getPages(this.props.perPage, this.props.recordCount);
		let rows = items.map(function(item, i) {
			return (
				<PaginatorRow pageNum={item} key={item} currentPage={this.state.currentPage} onClick={this.handlePageChange.bind(this, item)} />
			);
		}, this);

		if(this.canPrev()){ 
			prevClass = '' 
		}

		if(this.canNext()){ 
			nextClass = '' 
		}

		return (
			<ul className='pagination'>
			  <li className={prevClass}>
			    <a href="#" onClick={this.handlePrevious}>« Previous</a>
			  </li>
			  {rows}
			  <li className={nextClass}>
			    <a href="#" onClick={this.handleNext}>Next »</a>
			  </li>
			</ul>
		)
	}
}

export default PaginatorBox;