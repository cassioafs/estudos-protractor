var ChokoCreateAccount = function(){
	this.createAccountButton = element(by.id('element-create-account-submit'));
};

ChokoCreateAccount.prototype.visit = function(){

	browser.get('http://choko.org/create-account');
};

module.exports = ChokoCreateAccount;