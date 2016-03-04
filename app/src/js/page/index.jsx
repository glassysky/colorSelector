var React = require('react');
var ReactDOM = require('react-dom');
// 引入其他组件
var ColorPanel = require('./ColorPanel');

var Background = React.createClass({
	render: function(){
		return (
			<div>

			</div>
		);
	}
});


ReactDOM.render(
	<Background />,
	document.getElementById('react')
);

module.exports = Index;