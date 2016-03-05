function method(){
	this.rgbIntoString = function(RGB){
		
		str = "rgb(" + RGB.join(",") + ")";

		return str;
	};

	this.rbgIntoH = function(RGB){

		function makeUpNumber(num){
			if(num < 10){
				num = "0" + num
			}
			return num;
		}

		RGB.map(function(num, key){
			RGB[key] = makeUpNumber(parseInt(num, 16));
		});

		return "#" + RGB.join("");
	};
}

var common = new method();

module.exports = common;