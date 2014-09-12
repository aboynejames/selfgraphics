buster.spec.expose(); // Make spec functions global

var spec = describe("setup canvas object", function () {
	before(function () {
	   
	
	});

	it("check object defined", function () {
	   
		//var mock = sinon.stub(document.getElementById("canvasOne"));
//console.log(mock);
		buster.assert.defined(selfGraphicsSpace); 
		
	});
	
	it("object is created", function () {
	 
			var View = new selfGraphicsSpace();
			buster.assert.isObject(View);
	});
	
		
	it("div container set", function () {
		
		var canvasdiv = document.getElementById("canvasOne");
		buster.assert.match(canvasdiv, {
			className: "style",
			width: 1200,
			height: 400
			});	

	});

	it("ensure canvas object is live", function () {
		
		var StartselfSpace = new selfGraphicsSpace();
//console.log(StartselfSpace);		
		buster.assert.isFunction(StartselfSpace.startCanvasSpace);

	});
	
	
 	         
});
