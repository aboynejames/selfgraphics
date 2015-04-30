buster.spec.expose(); // Make spec functions global

var spec = describe("setup canvas human simulation object", function () {
	before(function () {
	   
		this.Simlive = new selfSimulation();
	
	});

	it("check object defined", function () {
	   
		//var mock = sinon.stub(document.getElementById("canvasOne"));
//console.log(mock);
		buster.assert.defined(selfSimulation); 
		
	});
	
	it("object is created", function () {
	 
			
			buster.assert.isObject(this.Simlive);
	});
	
		
	it("div container set", function () {
		
		var canvasdiv = document.getElementById("canvasSimulation");
		buster.assert.match(canvasdiv, {
			className: "style",
			width: 1200,
			height: 400
			});	

	});

	it("check start simulation function is active", function () {
		
		buster.assert.isFunction(this.Simlive.startSimulation);

	});

	it("check human head graphic is active", function () {
		
		buster.assert.isFunction(this.Simlive.drawHead);

	});

	it("check human body is active", function () {
		
		buster.assert.isFunction(this.Simlive.drawBody);

	});	

	it("check human left arm is active", function () {
		
		buster.assert.isFunction(this.Simlive.drawLeftarm);

	});	


	it("check human right arm is active", function () {
		
		buster.assert.isFunction(this.Simlive.drawRightarm);

	});
	
	
	it("check human left leg is active", function () {
		
		buster.assert.isFunction(this.Simlive.drawLeftleg);

	});	


	it("check human right leg is active", function () {
		
		buster.assert.isFunction(this.Simlive.drawRightleg);

	});

	it("form quality scale", function () {
		
		buster.assert.isFunction(this.Simlive.formScale);

	});

	it("convert sensor form to color scale", function () {
		
		buster.assert.isFunction(this.Simlive.formConversionColor);

	});

	it("draw body start function", function () {
		
		buster.assert.isFunction(this.Simlive.drawbodyStart);

	});	
	
	it("draw head on swimmng pool", function () {
		
		buster.assert.isFunction(this.Simlive.drawHeadonpool);

	});		
	
	it("draw head on swimmer", function () {
		
		buster.assert.isFunction(this.Simlive.drawHeadonswimmer);

	});		
	
});