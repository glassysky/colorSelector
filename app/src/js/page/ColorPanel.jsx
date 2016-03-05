var React = require('react');

var MainColor = React.createClass({
	render: function(){
		var style = {
			"backgroundColor": "red"
		};

		return (
			<div style={style} className="main-color"></div>
		);
	}
});

var RecommendColor = React.createClass({
	render: function(){
		var style = [
			{"backgroundColor": "#000000"}, 
			{"backgroundColor": "#000033"}, 
			{"backgroundColor": "#003300"}, 
			{"backgroundColor": "#003333"}, 
			{"backgroundColor": "#330000"}
		];

		return (
			<ul className="recommend-color-list">
				{
					style.map(function(color, key){
						return (<RecommendListItem key={key} styleData={style[key]} />)
					})
				}
			</ul>
		);
	}
});

var RecommendListItem = React.createClass({
	render: function(){
		return (<li style={this.props.styleData}></li>);
	}
});

var ColorPanel = React.createClass({

	render: function(){
		return (
			<div id="color-panel">
				<MainColor />
				<RecommendColor />
			</div>
		);
	}
});

module.exports = ColorPanel;