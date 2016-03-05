var React = require('react');
var ReactDOM = require('react-dom');
// 引入其他组件
var ColorPanel = require('./ColorPanel');
var InfoPanel = require('./InfoPanel');

// 方法
var common = require('./common');

var Background = React.createClass({
	getInitialState: function(){
    	return {
    		RGB: ["0","0","0"]
    	};
  	},
  	handleUserInput: function(arr){
  		var RGB = this.state.RGB;
  		RGB[arr[0]] = arr[1];
  		this.setState({
  			RGB: RGB
  		});
  	},
	render: function(){
		// console.log(this.state.RGB);
		return (
			<div>
				<InfoPanel colorRGB={this.state.RGB} onUserInput={this.handleUserInput}/>
				<ColorPanel colorRGB={this.state.RGB} />
			</div>
		);
	}
});


ReactDOM.render(
	<Background />,
	document.getElementById('react')
);

// module.exports = Index;