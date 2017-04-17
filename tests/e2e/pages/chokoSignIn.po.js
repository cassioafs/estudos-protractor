var ChokoSingIn = function(){

	this.signInButton = element(by.id('element-sign-in-submit'));
};

ChokoSingIn.prototype.visit = function(){
	browser.get('http://choko.org/sign-in');
 }

 module.exports = ChokoSingIn;