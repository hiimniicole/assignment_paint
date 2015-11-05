////////////////////////////////////////////////////////////////////
//nicole.js
//
// basic pencil tool: draws a thin, solid line
// author: Nicole Corso



////////////////////////////////////////////////////////////////////
// create and install brush

var nicole = new Brush("nicole", "./brushes/nicolecorso/nicole.svg");
brushes.push(nicole);



////////////////////////////////////////////////////////////////////
// define brush behavior

nicole.draw = function() {
	noFill();
fill(forecolor);
	stroke(forecolor);

	if (mouseIsPressed) {
rect(mouseX, mouseY, 30, 30);
rect(mouseY, mouseX, 30, 30);
//ellipse (mouseX, mouseY, 10,10);

	}
};
