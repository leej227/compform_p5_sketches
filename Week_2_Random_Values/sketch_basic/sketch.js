// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(600, 600);
}


function draw() {
	// clear the background
	background(100, 255, 130);

	// set drawing styles


	// draw a circle
	fill(random(255),random(255),random(255))
	ellipse(random(400), 80, 100, 100);

	noLoop();

}
