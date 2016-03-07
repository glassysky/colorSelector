var React = require('react');
var common = require('./common');

var MainColor = React.createClass({
	render: function(){
		var rgb = common.rgbIntoH(this.props.colorRGB);

		var style = {
			"backgroundColor": rgb
		};

		return (
			<div style={style} className="main-color"></div>
		);
	}
});

var RecommendColorInfo = React.createClass({
	render: function(){
		var info = this.props.info;
		var title = info.title;
		var color = info.color;
		var number = color.length;

		

		return (
			<div className="recommend-color-info">
				<h3>{title}</h3>
				<div className="recommend-color-match">
					{
						color.map(function(color, key){
							var style = {
								"width": ((1 / number) * 100) + "%",
								"height": "100%",
								"display": "inline-block",
								"backgroundColor": color
							};
							return (
								<div style={style} key={key}></div>
							)
						})
					}
				</div>
				<div className="recommend-color-value">

				</div>
			</div>
		);
	}
});

var RecommendListItem = React.createClass({
	render: function(){
		var info = this.props.info;
		return (
			<li>
				<RecommendColorInfo info={info}/>
			</li>
		);
	}
});

// 互补色、相似色、三角色、分散互补色、四方色、四方补色
var RecommendColor = React.createClass({
	render: function(){
		var RGB = this.props.colorRGB;

		var Complementarity = common.Complementarity(RGB);
		// var Similarity = common.Complementarity(RGB);
		var Similarity = common.Similarity(RGB);
		// console.log(Similarity);

		var info = [
			{
				"title": "Complementarity",
				"color": Complementarity
			}, 
			{
				"title": "Similarity",
				"color": Similarity
			}, 
			// {
			// 	"title": "Triangle",
			// 	"color": ["red","blue","yellow"]
			// }, 
			// {
			// 	"title": "Dispers",
			// 	"color": ["red","blue","yellow"]
			// }, 
			// {
			// 	"title": "Square",
			// 	"color": ["red","blue","yellow","green"]
			// }, 
			// {
			// 	"title": "SimilaritySquare",
			// 	"color": ["red","blue","yellow","green"]
			// }, 
		];

		return (
			<ul className="recommend-color-list">
				{
					info.map(function(color, key){
						return (<RecommendListItem key={key} info={info[key]} />)
					})
				}
			</ul>
		);
	}
});

var ColorPanel = React.createClass({

	render: function(){
		return (
			<div id="color-panel">
				<MainColor colorRGB={this.props.colorRGB}/>
				<RecommendColor colorRGB={this.props.colorRGB}/>
			</div>
		);
	}
});

module.exports = ColorPanel;