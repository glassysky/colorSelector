var React = require('react');
var ReactDOM = require('react-dom');
var common = require('./common');

var InputItem = React.createClass({
	getInitialState: function(){
		return {
			value: "0"
		};
	},
	handleChange: function(event){
		var value = event.target.value;
		var index = this.props.index;
		this.setState({
			value: value
		});
		this.props.handleChange(index + "." + value);
	},
	render: function(){
		var value = this.state.value;

		return (
			<div className="input-item">
				<span className="add-on add-on-left">{this.props.data}</span>
				<input 
					type="number" 
					value={value}
					className={this.props.data} 
					onChange={this.handleChange} 
					ref={this.props.data} />
				<span className="add-on add-on-right">0~255</span>
			</div>
		);
	}
});

var InputWrap = React.createClass({
	handleChange: function(str){
		var arr = str.split(".");
		this.props.onUserInput(arr);
	},
	render: function(){
		var color = ['R', 'G', 'B'];
		var self = this;
		return (
			<div className="input-wrap">
			{
				color.map(function(color, key){
					return (
						<InputItem 
							key={key} 
							index={key}
							data={color} 
							handleChange={self.handleChange} />
					);
				})
			}
			</div>
		);
	}
});

var InfoConsole = React.createClass({
	render: function(){
		var RGB = this.props.RGB;
		RGB = common.rgbIntoString(RGB);
		return (
			<div className="console-panel">
			{RGB}
			</div>
		);
	}
});

var InfoPanel = React.createClass({
	
	render: function(){
		return (
			<div id="info-panel">
				<h1>Console</h1>
				<InputWrap onUserInput={this.props.onUserInput}/>
				<InfoConsole RGB={this.props.RGB} />
			</div>
		);
	}
});

module.exports = InfoPanel;