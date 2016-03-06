function method(){
	// rgb显示
	this.rgbIntoString = function(RGB){
		
		str = "rgb(" + RGB.join(",") + ")";

		return str;
	};
	// 16进制
	this.rgbIntoH = function(RGB){
		var colorRGB = RGB.concat();

		colorRGB.map(function(num, key){
			colorRGB[key] = colorRGB[key].toString();
		});
		
		// console.log(colorRGB);

		function makeUpNumber(num){
			if(num.length < 2){
				num = "0" + num
			}
			return num;
		}

		colorRGB.map(function(num, key){
			var num = parseInt(num);
			colorRGB[key] = makeUpNumber(num.toString(16));
		});

		return "#" + colorRGB.join("");
	};

	this.Complementarity = function(RGB){
		var color1 = RGB.concat();
		var color2 = RGB.concat();
		var arr = [];

		for(var i in color2){
			color2[i] = 255 - parseInt(color2[i]);
		}

		arr[0] = this.rgbIntoH(color1);		
		arr[1] = this.rgbIntoH(color2);		
		
		return arr;
	};

	this.Similarity = function(RGB){
		var color1 = RGB.concat();
		var color2 = RGB.concat();
		var color3 = RGB.concat();
		var arr = [];
		// 取值，找到中间值，加减30，向下进位
		// 若有两值相等，则直接加减
		var index = 0;
		var num = 0;
		var range = 0;
		var times = 0.3;

		for(var i in color1){
			color1[i] = parseInt(color1[i]);
		}
		for(var i in color2){
			color2[i] = parseInt(color2[i]);
		}
		for(var i in color3){
			color3[i] = parseInt(color3[i]);
		}

		if((color2[0] === color2[1]) && (color2[1] === color2[2])){
			// 三个相等
		} else if (color2[0] === color2[1]) {
			
			if(color2[2] > color2[1]){
				// 相等的较小，则加
				range = Math.floor((color2[2] * 2 + color2[1]) * times);

				if(color1[0] + range > color1[2]){
					num = color1[0] + range - color1[2];
					color1[0] = color1[2];
					color1[2] = color1[2] - num;
				} else {
					color1[0] = color1[0] + range;
				}

				if(color3[1] + range > color3[2]){
					num = color3[1] + range - color3[2];
					color3[1] = color3[2];
					color3[2] = color3[2] - num;
				} else {
					color3[1] = color3[1] + range;
				}

			} else if (color2[2] < color2[1]){
				// 相等的较大，则减
				range = Math.floor((color2[1] * 2 + color2[2]) * times);

				if(color1[0] - range < color1[2]){
					num = color1[2] - color1[0] + range;
					color1[0] = color1[2];
					color1[2] = color1[2] + num;
				} else {
					color1[0] = color1[0] - range;
				}

				if(color3[1] - range < color3[2]){
					num = color3[2] - color3[1] + range;
					color3[1] = color3[2];
					color3[2] = color3[2] + num;
				} else {
					color3[1] = color3[1] - range;
				}
			}

		} else if (color2[1] === color2[2]) {

			if(color2[0] > color2[1]){
				// 相等的较小，则加
				range = Math.floor((color2[0] * 2 + color2[1]) * times);

				if(color1[1] + range > color1[0]){
					num = color1[1] + range - color1[0];
					color1[1] = color1[0];
					color1[0] = color1[0] - num;
				} else {
					color1[1] = color1[1] + range;
				}

				if(color3[2] + range > color3[0]){
					num = color3[2] + range - color3[0];
					color3[2] = color3[0];
					color3[0] = color3[0] - num;
				} else {
					color3[2] = color3[2] + range;
				}

			} else if (color2[0] < color2[1]){
				// 相等的较大，则减
				range = Math.floor((color2[1] * 2 + color2[0]) * times);
				console.log(range);

				if(color1[1] - range < color1[0]){
					num = color1[0] - color1[1] + range;
					color1[1] = color1[0];
					color1[0] = color1[0] + num;
				} else {
					color1[1] = color1[1] - range;
				}

				if(color3[2] - range < color3[0]){
					num = color3[0] - color3[2] + range;
					color3[2] = color3[0];
					color3[0] = color3[0] + num;
				} else {
					color3[2] = color3[2] - range;
				}
			}

		} else if (color2[0] === color2[2]) {

			if(color2[1] > color2[0]){
				// 相等的较小，则加
				range = Math.floor((color2[1] * 2 + color2[0]) * times);

				if(color1[0] + range > color1[1]){
					num = color1[0] + range - color1[1];
					color1[0] = color1[1];
					color1[1] = color1[1] - num;
				} else {
					color1[0] = color1[0] + range;
				}

				if(color3[2] + range > color3[1]){
					num = color3[2] + range - color3[1];
					color3[2] = color3[1];
					color3[1] = color3[1] - num;
				} else {
					color3[2] = color3[2] + range;
				}

			} else if (color2[0] < color2[1]){
				// 相等的较大，则减
				range = Math.floor((color2[0] * 2 + color2[1]) * times);

				if(color1[0] - range < color1[1]){
					num = color1[1] - color1[0] + range;
					color1[0] = color1[1];
					color1[1] = color1[1] + num;
				} else {
					color1[0] = color1[0] + range;
				}

				if(color3[2] - range < color3[1]){
					num = color3[1] - color3[2] + range;
					color3[2] = color3[1];
					color3[1] = color3[1] + num;
				} else {
					color3[2] = color3[2] + range;
				}
			}

		} else {
			var maxIndex = 0;
			var midIndex = 0;
			var minIndex = 0;
			var maxValue = 0;
			var midValue = this.bubbleSortGetMiddle(color2[0], color2[1], color2[2]);
			var minValue = 0;

			var range = 0;
			var number = 0;

			for(var i in color2){
				if(color2[i] === midValue){
					midIndex = i;
				}
			}

			for(var i in color2){
				if(color2[i] > color2[midIndex]){
					maxIndex = i;
					maxValue = color2[i];
				}
				if(color2[i] < color2[midIndex]){
					minIndex = i;
					minValue = color2[i];
				}
			}

			range = maxValue * 2 + minValue;

			// 中间位置加减range
			if(midValue + range >= maxValue){
				color1[midIndex] = maxValue;
				number = midValue + range - maxValue;
				color1[maxIndex] = maxValue - number;
			} else {
				color1[midIndex] = midValue + range;
			}

			if(midValue - range <= minValue){
				color3[midIndex] = minValue;
				number = minValue - midValue + range;
				color3[minIndex] = minValue + number;
			} else {
				color3[midIndex] = midValue - range;
			}

		}

		arr = [this.rgbIntoH(color1), this.rgbIntoH(color2), this.rgbIntoH(color3)];
		return arr;
	};
	// 冒泡取中值
	this.bubbleSortGetMiddle = function(a, b, c){
		var a = a;
		var b = b;
		var c = c;
		var d;

		if(a > b){
			d = a;
			a = b;
			b = d;
		}

		if(b > c){
			d = b;
			b = c;
			c = d;
		}

		if(a > b){
			d = a;
			a = b;
			b = d;
		}

		return b;
	}

}

var common = new method();

module.exports = common;