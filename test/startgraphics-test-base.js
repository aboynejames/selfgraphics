/*
* check the default selfengine sections are in order
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Scenario: The canvas HTML placer code");

casper.start(baseUrl, function() {
	this.test.comment('canvas position available');
	casper.test.assertExists('#canvasOne', 'the element exists');

});


casper.run(function() {
//this.echo(this.getHTML());
  this.test.done();
	//this.exit(); 
});
