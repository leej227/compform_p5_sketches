// draws some kind of nested grid

let x = 0;
let y = 0;
let rects = [];

let colors = []
function setup() {
	// create a place to draw
	createCanvas(windowWidth, windowHeight);
	background(255);
	colors.push(color(255, 255, 255));
	colors.push(color(255, 255, 255));
	colors.push(color(250, 250, 250));
	colors.push(color(250, 250, 250));
	colors.push(color(240, 240, 240));
	colors.push(color(240, 240, 240));
	colors.push(color(240, 0, 0));
	colors.push(color(230, 230, 230));
	colors.push(color(240, 0, 0));
	colors.push(color(230, 230, 230));


	colors.push(color(150, 0, 0));
	colors.push(color(0, 0, 0));
	colors.push(color(150, 0, 0));
	colors.push(color(0, 0, 0));

	rects.push( {
		left: 0,
		top: 0,
		width: windowWidth,
		height: windowHeight,
		depth: 0,
		maxDepth: 5,
		color: 0
	});
}


function draw() {
	for (p = 0; p< 100; p++) {
		drawPass();
	}
}

function drawPass() {
	if (random() < .1) {
		rects = shuffle(rects);
	}
	let r = rects.pop();




	// let r = rects[floor(random(0, rects.length))];

	if (!r) {
		return;
	}
	// console.log(r.color);

	fill(colors[r.color%colors.length]);

	// let noiseValue = noise(r.left * .0025, r.top * .0025) * 10;
	// stroke(255, 0, 0, 40);
	stroke(255);
	// noStroke();
	strokeWeight(.5);

	rect(r.left, r.top, r.width, r.height);
	if (r.depth < r.maxDepth) {
		rects.push({
			left: r.left,
			top: r.top,
			width: r.width * .5,
			height: r.height * .5,
			depth: r.depth+1,
			maxDepth: pickDepth(r.maxDepth),
			color: r.color + 1
		});

		rects.push({
			left: r.left + r.width * .5,
			top: r.top,
			width: r.width * .5,
			height: r.height * .5,
			depth: r.depth+1,
			maxDepth: pickDepth(r.maxDepth),
			color: r.color + 1
		});

		rects.push({
			left: r.left,
			top: r.top + r.height * .5,
			width: r.width * .5,
			height: r.height * .5,
			depth: r.depth+1,
			maxDepth: pickDepth(r.maxDepth),
			color: r.color + 1
		});

		rects.push({
			left: r.left + r.width * .5,
			top: r.top + r.height * .5,
			width: r.width * .5,
			height: r.height * .5,
			depth: r.depth+1,
			maxDepth: pickDepth(r.maxDepth),
			color: r.color + 1
		});
	}
}

function pickDepth(d) {
	let newD = d;
	let r = random();
	if (r < .7) {
		newD = d-1;
	} else {
		newD = d+1;
	}
	newD = constrain(newD, 1, 11);

	return newD;
}
function setColor(r) {
	let v = 1 - (r.top / windowWidth);
	v *= 255;
	// console.log(v);
	fill(v, v, v);
}
