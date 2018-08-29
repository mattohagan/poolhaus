

//
// kinetics 002
// August 28, 2018
// 


let rowOfCubes = [];
let middleRowOfCubes = [];
let bottomRowOfCubes = [];
let cubeSize = 25;
let move = 0;
let rotateAllZ = 0;
let rotateAllZSpeed = 0.01;
let ranSequence = false;

$(document).ready(function(){
	var sketch3D = function(p){
	let move = 0.25;
	let time = 0;
	let yDirection = 1;
	let cameraRotation = 0;
	let cameraSpeed = 10;

	p.setup = function(){
		p.createCanvas(400, 560, p.WEBGL);
	}

	p.draw = function(){
		p.background(255, 255, 255, 0);
		// p.background(25);
		p.rectMode(p.CENTER);

		p.stroke(0);
		p.strokeWeight(2);
		p.ambientMaterial(255);
		p.ambientLight(255);

		for(let i = 0; i < rowOfCubes.length; i++) {
			rowOfCubes[i].move();
			rowOfCubes[i].display();
		}

		for(let i = 0; i < middleRowOfCubes.length; i++) {
			middleRowOfCubes[i].move();
			middleRowOfCubes[i].display();
		}

		for(let i = 0; i < bottomRowOfCubes.length; i++) {
			bottomRowOfCubes[i].move();
			bottomRowOfCubes[i].display();
		}
		
		// p.rotateX(rotateAllZ);
		// rotateAllZ += rotateAllZSpeed;
		
	}

	p.mouseWheel = function(event){

	}

	function Cube(size, x, y) {
		this.x = x;
		this.y = y;
		this.speedX = 1;
		this.speedY = 1.4;
		this.size = size;
		this.rotationXSpeed = 0.01;
		// this.rotationYSpeed = 0.1;
		this.rotationZSpeed = 0.1;
		this.rotationYSpeed = 0.05;
		// this.rotationXSpeed = 0;

		this.rotationX = 0;
		this.rotationY = 0;
		this.rotationZ = 0;

		this.move = function() {
			this.y += this.speedY;
			this.x += this.speedX;

			// this.x += move;
			this.rotationX += this.rotationXSpeed;
			this.rotationY += this.rotationYSpeed;
			this.rotationZ += this.rotationZSpeed;
		}

		this.display = function() {
			p.push();
				p.translate(this.x, this.y, 0);
				// p.rotateZ(rotateAllZ);

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

	function createCubeRows(){
		let x = 0;
		let y = -(p.height / 2) - (cubeSize * 1.5);
		rowOfCubes.push(new Cube(cubeSize, x, y));

		if(rowOfCubes.length >= 5){
			x = -(p.width / 2) - (cubeSize * 1.5);
			y = -p.height / 2 - (cubeSize * 1.5);
			middleRowOfCubes.push(new Cube(cubeSize, x, y));

			if(!ranSequence) {
				ranSequence = true;
				sequence("kinetics 002");
			}
		}

		if(middleRowOfCubes.length >= 8){
			x = -(p.width / 2) - (cubeSize * 1.5);
			y = 0
			bottomRowOfCubes.push(new Cube(cubeSize, x, y));
		}

		setTimeout(createCubeRows, 1000);
	}


	setTimeout(createCubeRows, 0);
}



let sketch1 = new p5(sketch3D, 'container3D');

let duration = 100;

function sequence(title) {
	setTimeout(function(){
		$('.copy').addClass('font-italics-2');
		setTimeout(function(){
			$('.copy').removeClass('font-italics-2');

			setTimeout(function(){
				
				$('.copy').text(title);


				setTimeout(function(){
					$('.copy').addClass('font-family-1');

					setTimeout(function(){
						$('.copy').removeClass('font-family-1');

					}, duration);
				}, duration);
			}, duration);
		}, duration);
	}, duration);
}

function firstSequence(title) {
	setTimeout(function(){
				$('.copy').text(title);

		setTimeout(function(){
		$('.copy').addClass('font-italics-2');
			setTimeout(function(){
				$('.copy').removeClass('font-italics-2');

				


				setTimeout(function(){
					$('.copy').addClass('font-family-1');

					setTimeout(function(){
						$('.copy').removeClass('font-family-1');

					}, duration);
				}, duration);
			}, duration);
		}, duration);
	}, duration);
}

setTimeout(function(){

	firstSequence("August 28, 2018")

	setTimeout(function(){

		sequence("http://poolhaus.digital")

	}, 1500);
}, 700);



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


