var React = require('react');
var common = require('./common');

var MainColor = React.createClass({
	render: function(){
		var rgb = common.rbgIntoH(this.props.colorRGB);

		var style = {
			"backgroundColor": rgb
		};

		return (
			<div style={style} className="main-color"></div>
		);
	}
});

// 互补色、相似色、三角色、分散互补色、四方色、四方补色
var RecommendColor = React.createClass({
	render: function(){
		var style = [
			{"backgroundColor": "#000000"}, 
			{"backgroundColor": "#000033"}, 
			{"backgroundColor": "#003300"}, 
			{"backgroundColor": "#003333"}, 
			{"backgroundColor": "#330000"},
			{"backgroundColor": "#330033"}
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
				<MainColor colorRGB={this.props.colorRGB}/>
				<RecommendColor />
			</div>
		);
	}
});

module.exports = ColorPanel;