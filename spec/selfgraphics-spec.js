buster.spec.expose(); // Make spec functions global

var spec = describe("Make swimming pool graphics simulation", function () {
    before(function () {
	    
		this.StartselfSpace = new selfGraphicsSpace();
		this.selfdataGraphics = {};
		this.selfdataGraphics.canvasPlace	= '';	
		this.selfdataGraphics.lanelocation = [50,  100, 1000, 40];
		this.selfdataGraphics.selftimes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
	    
    });

   it("check object is define", function () {

		buster.assert.defined(selfGraphics); 
        		
    });

   it("check object is setup", function () {

		var graphicslive = new selfGraphics(this.StartselfSpace, this.selfdataGraphics);
		buster.assert.isObject(graphicslive);
    });    
 	     
   it("check speed calculations", function () {

		var graphicslive = new selfGraphics(this.StartselfSpace, this.selfdataGraphics);
		var speedtest = graphicslive.realspeedCalculation();
	   
		buster.assert.isArray(speedtest);
		buster.assert.equals(speedtest[0], '1000.00');
    }); 

   it("check pixel data motion direction ", function () {

		var graphicslive = new selfGraphics(this.StartselfSpace, this.selfdataGraphics);
	   
		buster.assert.isFunction(graphicslive.preparePixels);
    }); 

    
});

