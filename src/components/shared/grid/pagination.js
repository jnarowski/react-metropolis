import React, { Component } from 'react';

export default class PaginatorRow extends Component {
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
  render() {
		let prevClass = 'disabled';
		let nextClass = 'disabled';
		let items = this._getPages(this.props.perPage, this.props.recordCount);

		if(this.canPrev()){ 
			prevClass = '' 
		}

		if(this.canNext()){ 
			nextClass = '' 
		}

		rows = items.map(function(item, i) {
  		return (
    		<PaginatorRow currentPage={this.state.currentPage} onClick={this.handlePageChange.bind(this, item)} pageNum={item} />
  		);
		}, this);

	  return (
		  <div id="pagination">
			  <div className="pagination">
			    <ul>
			      <li className={prevClass}>
			        <a href="#" onClick={this.handlePrevious}>« Previous</a>
			      </li>
			      {rows}
			      <li className={nextClass}>
			        <a href="#" onClick={this.handleNext}>Next »</a>
			      </li>
			    </ul>
			    <span className="float-clear">&nbsp;</span>
			  </div>
			</div>
		)
  }
}

// var PaginatorRow = React.createClass({
// 	render: function(){
// 		var className; 

// 		if(this.props.currentPage == this.props.pageNum){
// 			className = 'active';
// 		}

// 		return (
// 	    <li className={className}>
// 	      <a onClick={this.props.onClick}>{this.props.pageNum}</a>
// 	    </li>
// 		);
// 	}
// });

// var PaginatorBox = React.createClass({
//   propTypes: {
//     recordCount: React.PropTypes.number.isRequired
//   },

// 	getDefaultProps: function(){
// 		return props = {
// 	  	recordCount: 0,
// 	  	perPage: 50
// 	  }
// 	},

// 	getInitialState: function(){
// 		this.props.totalPages = this._getPageCount(this.props.perPage, this.props.recordCount);

// 	  return {
// 	  	currentPage: this.props.initalPage ? this.props.initalPage : 1
// 	  }
// 	},

// 	canPrev: function(){
// 		return this.state.currentPage != 1
// 	},

// 	canNext: function(){
// 		var pageCount = this._getPageCount(this.props.perPage, this.props.recordCount);
// 		return this.state.currentPage < this.props.totalPages;
// 	},

// 	handlePrevious: function(){
// 		this._setPage(this.state.currentPage - 1);
// 	},

// 	handleNext: function(){
// 		this._setPage(this.state.currentPage + 1);
// 	},

// 	handlePageChange: function(page){
// 		this._setPage(page);
// 	},

// 	_setPage: function(page) {
// 		this.setState({ 
// 			currentPage: page
// 		})
// 	},

// 	_getPageCount: function(perPageCount, recordCount){
// 		return Math.ceil(recordCount / perPageCount);
// 	},

// 	_getPages: function(perPageCount, recordCount){
// 		var pages = [];
// 		var pageCount = this._getPageCount(perPageCount, recordCount);

// 		for (i = 0; i < pageCount; i++) { 
// 	    pages.push(i+1);
// 		}

// 		return pages;
// 	},

//   _canShowFirst: function(){
//     return this.state.currentPage >= 5;
//   },
  
//   _canShowLast: function(){
//     return this.totalPages - this.state.currentPage >= 4;
//   },

//   _currentInterval: function(){
//     var startIndex = (this.state.currentPage >= 5 ? this.state.currentPage - 2 : 1);
//     var endIndex   = (this.state.currentPage <= (this.props.totalPages - 4) ? this.state.currentPage + 2 : this.props.totalPages);
      
//     console.log(startIndex);
//     console.log(endIndex);
//     console.log('...');
//     //return [startIndex..endIndex];
//   },

// 	render: function(){
// 		console.log('rendering...');
// 		console.log(this);

// 		var prevClass = 'disabled';
// 		var nextClass = 'disabled';
// 		var items = this._getPages(this.props.perPage, this.props.recordCount);

// 		if(this.canPrev()){ 
// 			prevClass = '' 
// 		}

// 		if(this.canNext()){ 
// 			nextClass = '' 
// 		}

// 		console.log(this._currentInterval())
// 		console.log(this._canShowLast())
// 		console.log(this._canShowFirst())

// 		rows = items.map(function(item, i) {
//   		return (
//     		<PaginatorRow currentPage={this.state.currentPage} onClick={this.handlePageChange.bind(this, item)} pageNum={item} />
//   		);
// 		}, this);

// 	  return (
// 		  <div id="pagination">
// 			  <div className="pagination">
// 			    <ul>
// 			      <li className={prevClass}>
// 			        <a href="#" onClick={this.handlePrevious}>« Previous</a>
// 			      </li>
// 			      {rows}
// 			      <li className={nextClass}>
// 			        <a href="#" onClick={this.handleNext}>Next »</a>
// 			      </li>
// 			    </ul>
// 			    <span className="float-clear">&nbsp;</span>
// 			  </div>
// 			</div>
// 		)
// 	}
// })