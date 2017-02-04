// draws a rectangle, where you tell it to!

var pos_x_slider;
var pos_y_slider;


function setup() {
	createCanvas(640, 360);
	fill(100);
	noStroke();
	rectMode(CENTER);

	createP('Horizontal Position');
	pos_x_slider = createSlider(0, width, width * .5);
	createP('Vertical Position');
	pos_y_slider = createSlider(0, height, height * .5);
	createP('Size');
	size_slider = createSlider(10, 200, 100);
}


function draw() {
	// clear the background
	background(250);

	var pos_x = pos_x_slider.value();
	var pos_y = pos_y_slider.value();
	var size = size_slider.value();
	rect(pos_x, pos_y, size, size);
}
