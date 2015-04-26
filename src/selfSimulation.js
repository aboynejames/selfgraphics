/**
* SelfSimulation
*
* Simulation of human 
* @class selfSimultion
*
* @package    Self Graphics - open sport project
* @copyright  Copyright (c) 2014 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var selfSimulation = function() {

	this.context = {};
	this.selfsimgraphic = document.getElementById("canvasSimulation");	
	this.startSimulation();
		
	
};

/**
* sets simulation assumptions
* @method startSimulation	
*
*/	
selfSimulation.prototype.startSimulation = function() {
	
	// the canvas
	this.context = this.selfsimgraphic.getContext("2d");
	this.context.fillStyle = 'pink';
	this.context.fillRect(0, 0, this.selfsimgraphic.width, this.selfsimgraphic.height);
	this.context.strokeStyle = '#000000';
	this.context.strokeRect(1,  1, this.selfsimgraphic.width-2, this.selfsimgraphic.height-2);

	// draw body
	this.drawHead();
	this.drawBody();
	this.drawLeftleg();
	this.drawRightleg();
	this.drawLeftarm();
	this.drawRightarm();
	this.formScale();

};

/**
* draw head
* @method drawHead	
*
*/	
selfSimulation.prototype.drawHead = function() {
	
	var centerX = 190;
	var centerY = 160;
	var radius = 40;
	
	this.context.fillStyle = "#EEEEEE";
	this.context.beginPath();
	this.context.arc(centerX, centerY, radius,0,Math.PI*2,true);
	this.context.closePath();
	this.context.fill();
	
	// restore to original state
	//this.context.restore();
};

/**
* sets human body
* @method drawBody	
*
*/	
selfSimulation.prototype.drawBody = function() {

	var centerX = 160;
	var centerY = 160;
	var radius = 50;

	this.context.scale(2, 1);

	// draw circle which will be stretched into an oval
	this.context.beginPath();
	this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	this.context.closePath();
	// restore to original state
	//this.context.restore();

	// apply styling
	this.context.fillStyle = '#8ED6FF';
	this.context.fill();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.stroke();	
	this.context.scale(0.5, 1);

};

/**
* Draw left arm
* @method drawLeftarm	
*
*/	
selfSimulation.prototype.drawLeftarm = function() {
console.log('left arm');
	var centerX =40;
	var centerY = 1;
	var radius = 16;

	// rotate 45 degrees clockwise
	this.context.rotate(Math.PI / 6.4);
	this.context.scale(5, 1);
	this.context.restore();
	
	// draw circle which will be stretched into an oval
	this.context.beginPath();


	this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

	this.context.closePath();

	// restore to original state
	//this.context.restore();

	// apply styling
	this.context.fillStyle = '#8ED6FF';
	this.context.fill();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.stroke();		
	this.context.scale(0.2, 1);
	this.context.rotate(-(Math.PI / 6.4));
};

/**
* draw right arm
* @method drawRightarm	
*
*/	
selfSimulation.prototype.drawRightarm = function() {
console.log('right arm');
	var centerX = 10;
	var centerY = 266;
	var radius = 16;

	// rotate 45 degrees clockwise
	this.context.rotate(Math.PI /-6.4);
	this.context.scale(5, 1);
	// draw circle which will be stretched into an oval
	this.context.beginPath();
	this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

	this.context.closePath();
	
	// restore to original state
	//this.context.restore();

	// apply styling
	this.context.fillStyle = '#8ED6FF';
	this.context.fill();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.stroke();		
	this.context.scale(0.2, 1);
	this.context.rotate(-(Math.PI / -6.4));
	
	
};

/**
* draw left leg
* @method drawLeftleg	
*
*/	
selfSimulation.prototype.drawLeftleg = function() {
console.log('being called');
	var centerX = 80;
	var centerY = 130;
	var radius = 16;


	// draw circle which will be stretched into an oval
	this.context.beginPath();
	this.context.scale(6, 1);
	this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

	this.context.closePath();
	
	// restore to original state
	//this.context.restore();

	// apply styling
	this.context.fillStyle = '#8ED6FF';
	this.context.fill();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.stroke();		
	this.context.scale(0.1667, 1);
	
};

/**
* draw right leg
* @method drawRightleg	
*
*/	
selfSimulation.prototype.drawRightleg = function() {
console.log('right leg');
	var centerX = 80;
	var centerY = 180;
	var radius = 16;

	this.context.scale(6, 1);

	// draw circle which will be stretched into an oval
	this.context.beginPath();
	this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	this.context.closePath();
	// restore to original state
	//this.context.restore();

	// apply styling
	this.context.fillStyle = '#8ED6FF';
	this.context.fill();
	this.context.lineWidth = 2;
	this.context.strokeStyle = 'black';
	this.context.stroke();	
	this.context.scale(0.1667, 1);
	
};

/**
* draw Form scale box
* @method formScale	
*
*/	
selfSimulation.prototype.formScale = function() {
console.log('form scale');
	this.context.fillStyle = 'green';
	this.context.fillRect(640, 80, 80, 160);
	this.context.strokeStyle = 'black';
	this.context.strokeRect(640,  80, 80, 160);
	
	// four part coloring of form scale
	this.context.fillStyle = '#F00000';
	this.context.fillRect(640, 80, 80, 40);
	this.context.fillStyle = '#B00000';	
	this.context.fillRect(640, 120, 80, 40);
	this.context.fillStyle = '#600000';
	this.context.fillRect(640, 160, 80, 40);
	this.context.fillStyle = '#200000';	
	this.context.fillRect(640, 200, 80, 40);	
	
};