buster.spec.expose(); // Make spec functions global

var spec = describe("Make swimming pool graphics simulation", function () {
    before(function () {
	    
		this.StartselfSpace = new selfGraphicsSpace();
		this.comparecont = new compareData(this.StartselfSpace);
	    
		this.selfdataGraphics = {};	
		this.selfdataGraphics.lanelocation = [50,  100, 1000, 40];
		this.selfdataGraphics.selftimes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
			
		this.graphicslive = 	new selfGraphics(this.StartselfSpace, this.selfdataGraphics, this.comparecont);
	    
    });

   it("check object is defined", function () {

		buster.assert.defined(selfGraphics); 
        		
    });

   it("check object is setup", function () {

		buster.assert.isObject(this.graphicslive );
    });    
 	     
   it("check speed calculations", function () {

		var speedtest = this.graphicslive .realspeedCalculation();
	   
		buster.assert.isArray(speedtest);
		buster.assert.equals(speedtest[0], '1000.00');
    }); 

   it("check pixel data motion direction ", function () {
	   
		buster.assert.isFunction(this.graphicslive.preparePixels);
    }); 

   
});

