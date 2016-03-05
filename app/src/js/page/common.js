function method(){
	this.rgbIntoString = function(RGB){
		
		str = "rgb(" + RGB.join(",") + ")";

		return str;
	};

	this.rbgIntoH = function(RGB){
		var colorRGB = RGB.concat();

		function makeUpNumber(num){
			if(num < 10){
				num = "0" + num
			}
			return num;
		}

		colorRGB.map(function(num, key){
			colorRGB[key] = makeUpNumber(parseInt(num, 16));
		});

		return "#" + colorRGB.join("");
	};
}

var common = new method();

module.exports = common;