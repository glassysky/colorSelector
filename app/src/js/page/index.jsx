var React = require('react');
var ReactDOM = require('react-dom');
// 引入其他组件
var ColorPanel = require('./ColorPanel');
var InfoPanel = require('./InfoPanel');

var Background = React.createClass({
	getInitialState: function() {
    	return {
    		R: 0,
    		G: 0,
    		B: 0
    	};
  	},
	render: function(){
		return (
			<div>
				<InfoPanel />
				<ColorPanel />
			</div>
		);
	}
});


ReactDOM.render(
	<Background />,
	document.getElementById('react')
);

// module.exports = Index;