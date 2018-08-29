

//
// kinetics 002
// August 28, 2018
// 


let rowOfCubes = [];
let cubeSize = 25;
let move = 0;

$(document).ready(function(){
	var sketch3D = function(p){
	let move = 0.25;
	let time = 0;
	let yDirection = 1;

	p.setup = function(){
		p.createCanvas(400, 560, p.WEBGL);
	}

	p.draw = function(){
		p.background(255, 255, 255, 0);
		// p.background(25);
		p.rectMode(p.CENTER);

		let offset = 10;

		for(let i = 0; i < rowOfCubes.length; i++) {
			p.stroke(0);
			p.strokeWeight(2);
			p.ambientMaterial(255);
			p.ambientLight(255);

			rowOfCubes[i].move();
			rowOfCubes[i].display();

			offset += offset;
		}
		

	}

	p.mouseWheel = function(event){

	}

	function Cube(size) {
		this.x = 0;
		this.y = -250;
		this.speed = 1;
		this.size = size;
		this.rotationXSpeed = 0.01;
		this.rotationYSpeed = 0.05;
		this.rotationX = 0;
		this.rotationY = 0;

		this.move = function() {
			this.y += this.speed;
			this.x += move;
			this.rotationX += this.rotationXSpeed;
			this.rotationY += this.rotationYSpeed;
		}

		this.display = function() {
			p.push();
				p.translate(this.x, this.y, 0);

				p.push();
					p.rotateX(this.rotationX);
					p.rotateY(this.rotationY);
					p.box(this.size, this.size);
				p.pop();

			p.pop();
		};

	}

	p.mouseWheel = function(event){
		let moveDamper = 300;
		move += (event.delta / moveDamper);
	}

	rowOfCubes.push(new Cube(cubeSize));

	setInterval(function(){
		rowOfCubes.push(new Cube(cubeSize));
	}, 500);
}



let sketch1 = new p5(sketch3D, 'container3D');



// var static2D = function(p){
// 	p.setup = function(){
// 		p.createCanvas(80, 80);
// 	}

// 	p.draw = function(){
// 		p.loadPixels();
// 		for(var x = 0; x < p.width; x++){
// 			for(var y = 0; y < p.height; y++){
// 			  var r = p.random(255);
// 			  var index = (x + y * p.width) * 24;

// 			  p.pixels[index + 0] = r;
// 			  p.pixels[index + 1] = r;
// 			  p.pixels[index + 2] = r;
// 			  p.pixels[index + 3] = 255;
// 			}
// 		}
// 		p.updatePixels();
// 	}
// }


// let sketch2 = new p5(static2D, 'static2D');

// function SelectText(element) {
//     var doc = document;
//     var text = doc.getElementById(element);
//     if (doc.body.createTextRange) { // ms
//         var range = doc.body.createTextRange();
//         range.moveToElementText(text);
//         range.select();
//     } else if (window.getSelection) {
//         var selection = window.getSelection();
//         var range = doc.createRange();
//         range.selectNodeContents(text);
//         selection.removeAllRanges();
//         selection.addRange(range);

//     }
// }


// let toSelect = ['firstLine', 'wondering'];
// let selectIndex = 0;

// function selectWondering(){
// 	let selecting = toSelect[1];
// 	SelectText(selecting);

// 	setTimeout(selectFirstLine, 200);

// }

// function selectFirstLine(){
// 	let selecting = toSelect[0];
// 	SelectText(selecting);

// 	setTimeout(deselect, 750);

// }

// function deselect(){
// 	document.getSelection().removeAllRanges();

// 	setTimeout(selectWondering, 1000);

// }

// setTimeout(selectWondering, 1000);



});


