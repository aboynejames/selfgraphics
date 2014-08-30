buster.spec.expose(); // Make spec functions global

var spec = describe("Make swimming pool graphics simulation", function () {
    before(function () {
	selfSpacev = {}; 
	selfSpacev = new selfGraphicsSpace ();
/*	
	// feed in starting self data to SelfGraphics analysis  selfdata, canvas location
	var selfdataGraphics = {};	
	var selfdataGraphics2 = {};

	selfdataGraphics.canvasPlace	= '';	
	//selfdataGraphics.canvasPlace = selfposition;//document.getElementById("canvasOne");
	selfdataGraphics.lanelocation = [50,  100, 1000, 40];
	selfdataGraphics.selftimes = [2540, 3040, 3310, 3150, 3590, 2270, 3190, 3310, 3090, 3680];

		
	//selfdataGraphics2.canvasPlace = selfposition;		
	selfdataGraphics2.lanelocation = [50,  300, 1000, 40];
	selfdataGraphics2.selftimes = [2940, 3040, 3310, 3150, 3590, 2270, 3190, 3310, 3090, 4780];
		
	var startGraphicslive = new selfGraphics(selfSpace, selfdataGraphics);
	var startGraphicslive2 = new selfGraphics(selfSpace, selfdataGraphics2);
console.log(startGraphicslive);		

	$("#startSwimline").click(function(e) {
		e.preventDefault(e);
//console.log('start the race');	
		startGraphicslive.startSelfgraphics(startGraphicslive);
		startGraphicslive2.startSelfgraphics(startGraphicslive2);		
	});
	*/
    });

    //it("check number value input 123", function () {
        
      //  buster.assert.equals(123, this.testswimn);
   // });

   it("check object setup correctly", function () {
        
//        buster.assert.equals(456, this.testswim.number);
    });
	 

console.log(this.testswim);	        
});

