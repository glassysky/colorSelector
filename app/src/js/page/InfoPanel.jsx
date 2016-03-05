var React = require('react');

var InputItem = React.createClass({
	handleChange: function(){

	},
	render: function(){
		return (
			<div className="input-item">
				<span className="add-on add-on-left">{this.props.data}</span>
				<input type="number" defaultValue="0" className={this.props.data} onChange={this.handleChange} />
				<span className="add-on add-on-right">0~255</span>
			</div>
		);
	}
});

var InputWrap = React.createClass({
	render: function(){
		var color = ['R', 'G', 'B'];
		return (
			<div className="input-wrap">
			{
				color.map(function(color, key){
					return (<InputItem key={key} data={color}/>);
				})
			}
			</div>
		);
	}
});

var InfoConsole = React.createClass({
	render: function(){
		return (
			<div className="console-panel">
			{this.props.data}
			</div>
		);
	}
});

var InfoPanel = React.createClass({
	
	render: function(){
		return (
			<div id="info-panel">
				<h1>Console</h1>
				<InputWrap />
				<InfoConsole data="rgb(12,231,54)" />
			</div>
		);
	}
});

module.exports = InfoPanel;