/**
* SelfGraphics
*
* Sport visualisation canvas 
* @class selfgraphicsSpace
*
* @package    Self Graphics - open sport project
* @copyright  Copyright (c) 2014 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var selfGraphicsSpace = function() {
	this.number = 456;
	this.context = {};
	this.selfSpace = document.getElementById("canvasOne");
//console.log(this.selfSpace);		
	this.startCanvasSpace();
};

/**
* sets base canvas visualisation
* @method startCanvasSpace	
*
*/	
selfGraphicsSpace.prototype.startCanvasSpace = function() {
	
	// the swimming pool
//console.log(this.selfSpace);	
//	theCanvas = this.status.canvasPlace;
//console.log(theCanvas);	
	this.context = this.selfSpace.getContext("2d");
//console.log(this.selfSpace);
	this.context.fillStyle = '#EEEEEE';
	this.context.fillRect(0, 0, this.selfSpace.width, this.selfSpace.height);
	this.context.strokeStyle = '#000000';
	this.context.strokeRect(1,  1, this.selfSpace.width-2, this.selfSpace.height-2);
	
	// place for difference analysis
	this.context.fillStyle = '#00ffff';
	this.context.fillRect(1100, 50, 90, 200);
	this.context.strokeStyle = '#000000';
	this.context.strokeRect(1102,  52, 86, 194);
	this.context.strokeStyle = '#FF0000';
	this.context.strokeRect(1102, 142, 84, 2); 
	
};




/**
* SelfGraphics
*
* Sport visualisation canvas 
* @class selfgraphics
*
* @package    Self Graphics - open sport project
* @copyright  Copyright (c) 2014 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
* @version    $Id$
*/
var selfGraphics = function(positionSpace, selfdatain) {

	this.status = selfdatain;
	this.context = positionSpace.context;
	this.realspeed = 0;
	this.textset = [0,0,0,0,0,0,0,0,0,0];
	this.splitscounterset = 0;
	this.setsplits = [];

	this.setGraphicsData();
	this.setSelfdataIn();
};


/**
*  starting assumptions and input data
* @method  setGraphicsData	
*
*/	
selfGraphics.prototype.setGraphicsData = function() {

	this.speed = 0;
	this.y = this.status.lanelocation[1];
	this.x = this.status.lanelocation[0];
	this.splitcount = 0;
	this.distanceinterval = 5;
	this.lengthofpool = 25;
	this.motiondirection = 0;
	this.pixelspersplit = 200;
	// the swimming pool lane
	this.context.strokeStyle = '#FF0000';
	this.context.strokeRect(this.status.lanelocation[0], this.status.lanelocation[1], this.status.lanelocation[2],this.status.lanelocation[3] );
	// draw on the analysis segmentation
	this.setSplitmarkers();

	
};

/**
*  incoming time distance self data
* @method  setSelfdataIn	
*
*/	
selfGraphics.prototype.setSelfdataIn = function() {

	// incoming data splits (milliseconds)
	this.splitsin = this.status.selftimes;// = [2540, 3040, 3310, 3150, 3590, 2270, 3190, 3310, 3090, 3680];
	this.realspeed =  this.realspeedCalculation();
	// split distance motion direction pixel profile
	this.motionsplitprofile = this.preparePixels();	

};


/**
*  setup the slip markers
* @method  setSplitmarkers	
*
*/	
selfGraphics.prototype.setSplitmarkers = function() {
	// cacluate the number of split and distance per slip e.g. 50 by 5m or 100m by 25m
	// five metre marks  every 200px
	this.context.strokeStyle = '#0404B4';
	var splitnumbers = this.lengthofpool/this.distanceinterval;
	for(i=0;i< splitnumbers; i++) {

		this.context.strokeRect((this.x + (i * this.pixelspersplit)),  this.status.lanelocation[1], 2, 40);
		
	}	
		
};

/**
*  calculate speeds in pixels
* @method  realspeedCalculation	
*
*/	
selfGraphics.prototype.realspeedCalculation = function() {

	var dintin = this.distanceinterval;
	// take time and split distance and produce speed
	var actualspeed = [];
	this.splitsin.forEach(function(spt) {

		var speedcalc = (dintin/(spt/1000));
		actualspeed.push(speedcalc.toFixed(2));
	
	});
	
	return actualspeed;

};

/**
* keep track of split segments
* @method setSplitsegments	
*
*/	
selfGraphics.prototype.setSplitsegments = function(setsp) {

	// work out last element added to array
	var lastspltnumber = this.setsplits.slice(-1)[0];

		this.setsplits.push(setsp);
		this.splitscounterset++;
	
};

/**
* prepars pixel data
* @method preparePixels	
*
*/	
selfGraphics.prototype.preparePixels = function() {

		// given length of pool create pixel presention distance and motion of direction value ie 1 or -1
		var splitspixel = {};
		var holdingsplitsdata = [];
		var holdingMotion = [];
		var holdingPixelplacer = [];
		var speedDirection = [];
		var nosplitsin = this.splitsin.length;
		var endoflengthpixels = nosplitevents * this.pixelspersplit;
		var splitchangedirectionEvery = this.lengthofpool/this.distanceinterval;
		var nosplitevents = this.distanceinterval/this.distanceinterval;
		var nopixelsperlength = this.nosplitsin * this.pixelspersplit;
		var cumulativepixeldistance = 0;
		var motiondirectionP = 0;
		var motiondirection = 0;
		var lastpixelPlacernumber = splitchangedirectionEvery + 1;	
		var splength = this.realspeed.length;
		var pixcelplacerDistance = 0;	
		// create distance pixel change of speed point array ie [50,250,450,650,850,1050,850,650,450,250]   50 250 450 650 850 1050 850 650 etc....
		for (i=0;i< splength; i++) {

			// logic for motion dirction 1 or -1
			var divideby = i%splitchangedirectionEvery;		

			if(i == lastpixelPlacernumber)
			{
				motiondirectionP = -1;
				pixcelplacerDistance = pixcelplacerDistance + (motiondirectionP *  this.pixelspersplit);
				holdingPixelplacer.push(pixcelplacerDistance);
			
			}
			else
			{
				
				// need account for 6 placement points with change of direction on 5
				if(divideby === 0)
				{
					// take current direction and reverse it
					if(motiondirectionP === 0)
					{
						//start pixel placement
						pixcelplacerDistance = this.x;
						holdingPixelplacer.push(pixcelplacerDistance);
						motiondirectionP = 1;						

					}
					else
					{
						// change the distanced from positive to negative
						pixcelplacerDistance = pixcelplacerDistance + (motiondirectionP *  this.pixelspersplit);
						holdingPixelplacer.push(pixcelplacerDistance);

					}
				}
				else
				{				
						//motiondirection = 1;
						pixcelplacerDistance = pixcelplacerDistance + (motiondirectionP *  this.pixelspersplit);
						holdingPixelplacer.push(pixcelplacerDistance);
						
				}
				
			}
			

		}

		
		// create motion of direction array ie [1,1,1,1,1,-1,-1,-1,-1,-1]
		for (i=0;i< splength; i++) {
			// logic for motion dirction 1 or -1
			var divideby = i%splitchangedirectionEvery;
			
			if(divideby === 0)
			{
				// take current direction and reverse it
				if(motiondirection === 0)
				{
					motiondirection = 1;

				}
				else
				{
					motiondirection = -1;
					
				}
			}
	
			holdingMotion.push(motiondirection);
		}

			// multiple by the actual speeds
		for (i=0;i< splength; i++) {
		
			speedDirection.push(holdingMotion[i] * this.realspeed[i]);	
		
		
		}	

		// combine distance speed change point, speed, motion direction
		// {[50,1,1.9], [250, 1,1.8], [450,1,1.8], [650,1,1.5], [850,1,1.8], [1050,-1,1.5], [850,-1,2.0], [650,-1,1.9], [450,-1,1.8], [250,-1,1.6]}
		speedPixelplaces = {};
		speedPixelplaces.pixelPlacers = holdingPixelplacer;
		speedPixelplaces.speedDirection = speedDirection;
		
		return speedPixelplaces;

};

/**
* prepare difference data
* @method prepareDifference
*
*/	
selfGraphics.prototype.prepareDifference = function() {
	
	var differenceTwo = [];
	
	
	
	return differenceTwo;

	
};

/**
*  start the graphics
* @method  startSelfgraphics	
*
*/	
selfGraphics.prototype.startSelfgraphics = function(liveAnalysis) {

	var drawLive = function() {liveAnalysis.drawAnalysis();};
	setInterval(drawLive, 20);

};

/**
* supplies draw analysis data and visualisation code
* @method drawAnalysis	
*
*/	
selfGraphics.prototype.drawAnalysis = function() {

		// clear the previous placeline mark
		this.context.fillStyle = "#EEEEEE";
		this.context.beginPath();
		this.context.arc(this.x,this.y,5.5,0,Math.PI*2,true);
		this.context.closePath();
		this.context.fill();

		if(this.splitcount === 0)
		{
			// start			
			speed = this.motionsplitprofile.speedDirection[0];
			this.setSplitsegments(0);
			this.splitcount++;
			this.motiondirection = 1;
			this.context.font = "14px Arial";
			this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[0] ,this.x + 25, this.y - 50);
		
		}
		else
		{

			if(this.x > 50  && this.x < 250)
			{
			
				if(this.motiondirection == 1)
				{				
					this.setSplitsegments(1);
					speed = this.motionsplitprofile.speedDirection[1];
					this.splitcount++;
					if(this.textset[0] === 0)
					{
						this.context.strokeText("Speed: " +this.motionsplitprofile.speedDirection[9], this.x - 150, this.y + 50);
						this.textset[0] = 1;
						this.drawDifference();
					}
					else 
					{}


				}
				else
				{				
					speed = this.motionsplitprofile.speedDirection[9];
					this.splitcount++;
					if(this.textset[9] === 0)
					{
						this.context.strokeText("Speed: " +this.motionsplitprofile.speedDirection[9], this.x - 150, this.y + 50);
						this.textset[9] = 1;
					}
					else 
					{}
				}
			
			}
			else if (this.x > 250  && this.x < 450)
			{
			
				if(this.motiondirection == 1)
				{
					this.setSplitsegments(2);
					speed = this.motionsplitprofile.speedDirection[2];
					this.splitcount++;	
					if(this.textset[1] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[2], this.x + 50, this.y - 50);
						this.textset[1] = 1;
					}
					else 
					{}
//					context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][2],this.x + 25, this.y - 50);					
				}
				else
				{
				
					speed = this.motionsplitprofile.speedDirection[8];
					this.splitcount++;
					if(this.textset[8] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[8], this.x - 150, this.y + 50);
						this.textset[8] = 1;
					}
					else 
					{}
					
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][8],this.x - 150, this.y + 50);				
				}

			}
			else if (this.x > 450  && this.x < 650)
			{
			
				if(this.motiondirection == 1)
				{				
					speed = this.motionsplitprofile.speedDirection[3];
					this.splitcount++;
					if(this.textset[2] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[2], this.x + 50, this.y - 50);
						this.textset[2] = 1;
					}
					else 
					{}
					
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][3],this.x + 25, this.y - 50);
				}
				else
				{				
					speed = this.motionsplitprofile.speedDirection[7];
					this.splitcount++;
					if(this.textset[7] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[7], this.x - 150, this.y + 50);
						this.textset[7] = 1;
					}
					else 
					{}
					
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][7],this.x - 150, this.y + 50);				
				}
		
			}
			else if (this.x > 650  && this.x < 850)
			{		
				// depending on direction of motion speed will be positive or minus
				if(this.motiondirection == 1)
				{		
					speed = this.motionsplitprofile.speedDirection[4];
					this.splitcount++;
					if(this.textset[3] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[4], this.x + 50, this.y - 50);
						this.textset[3] = 1;
					}
					else 
					{}
					
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][4],this.x + 25, this.y - 50);					
				}
				else
				{		
					speed = this.motionsplitprofile.speedDirection[6];
					this.splitcount++;
					if(this.textset[6] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[6], this.x - 150, this.y + 50);
						this.textset[6] = 1;
					}
					else 
					{}
					
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][6],this.x -150, this.y + 50);				
				}
				
	
			}
			else if (this.x > 850  && this.x < 1050)
			{		
				// depending on direction of motion speed will be positive or minus
				if(this.motiondirection == 1)
				{							
					speed = this.motionsplitprofile.speedDirection[4];
					this.splitcount++;
					if(this.textset[4] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[4], this.x + 50, this.y - 50);
						this.textset[4] = 1;
					}
					else 
					{}
					
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][4],this.x + 25, this.y - 50);					
				}
				else
				{							
					speed = this.motionsplitprofile.speedDirection[5];
					this.splitcount++;
					if(this.textset[5] === 0)
					{
						this.context.strokeText("Speed: " + this.motionsplitprofile.speedDirection[5], this.x - 150, this.y + 50);
						this.textset[5] = 1;
					}
					else 
					{}
					//context.strokeText("Speed:" + this.motionsplitprofile['speedDirection'][5],this.x - 150, this.y + 50);				
				}
				
	
			}

			else if(this.x < 150 )
			{
				this.motiondirection = 1;
				speed = 0 * this.motiondirection;
			}
			else if(this.x > 1050 )
			{
				this.motiondirection = -1;
				speed = this.motionsplitprofile.speedDirection[5];
				this.x = 1050;
				this.y = this.y + 40;
			}
		}
		
		this.x += speed;		
		
	// display the tracking ball
	this.context.fillStyle = "#000000";
	this.context.beginPath();
	this.context.arc(this.x,this.y,6,0,Math.PI*2,true);
	this.context.closePath();
	this.context.fill();

};

/**
*  draw difference analysis
* @method  drawDifference	
*
*/	
selfGraphics.prototype.drawDifference = function(liveAnalysis) {

	// percentage above or below second time data inputted
	var percentage = 0.2;
	// need to convert to pixel area
	
	this.context.fillStyle = '#FF0000';
	this.context.fillRect(1102, 122, 80, 22); 
	

};

