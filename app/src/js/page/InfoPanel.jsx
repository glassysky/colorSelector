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

		if(value < 0 || value === ""){
			value = 0;
		} else if (value > 255 || value.length === 4){
			value = 255;
		}
		
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
		var colorRGB = this.props.colorRGB;

		colorInH = common.rgbIntoH(colorRGB);
		colorInRGB = common.rgbIntoString(colorRGB);
		
		return (
			<div className="console-panel">
				<div className="text-wrap">
					<span>{colorInRGB}</span>
					<span>{colorInH}</span>
				</div>
			</div>
		);
	}
});

var InfoPanel = React.createClass({
	
	render: function(){
		return (
			<div id="info-panel">
				<h1>控制台</h1>
				<InputWrap onUserInput={this.props.onUserInput}/>
				<InfoConsole colorRGB={this.props.colorRGB} />
			</div>
		);
	}
});

module.exports = InfoPanel;