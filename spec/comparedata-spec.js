buster.spec.expose(); // Make spec functions global

var spec = describe("set up compare data object", function () {
	before(function () {
		this.canvasstart = new selfGraphicsSpace();
		var dataone =[2,5,9];
		var datatwo = [3,7,14];	
		this.comparetest = new compareData(this.canvasstart);
		this.comparetest.addcompareData(dataone);
		this.comparetest.addcompareData(datatwo);
	
	});

	it("check object defined", function () {
	   
		buster.assert.defined(compareData); 
		
	});
	
	it("object is created", function () {
	 
		buster.assert.isObject(this.comparetest);
		
	});
	
	it("ensure canvas add function data is live", function () {
				
		buster.assert.isFunction(this.comparetest.addcompareData);

	});
	
	it("confirm data has been added to array", function () {
		
		comparelength = this.comparetest.twodatalive.length;	
		buster.assert.equals(comparelength, 2);

	});
	
	    it("check difference between two events ", function () {

		buster.assert.isFunction(this.comparetest.prepareDifference);
		buster.assert.isFunction(this.comparetest.drawDifference);
    }); 
    
    it("check difference between two events ", function () {
		
		 var eventDifference = 0;
		eventDifference = this.comparetest.prepareDifference(0);
		
		buster.assert.equals(eventDifference, -0.5);
    }); 
 	         
});