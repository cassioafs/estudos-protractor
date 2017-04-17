var CreateAccountPage = require('../pages/chokoCreateAccount.po.js');
var MessagesWrapperPage = require('../pages/chokoMessagesWrapper.po.js');
var SignInPage = require('../pages/chokoSignIn.po.js');

var messagesWrapperPage = new MessagesWrapperPage();

describe('Choko - Sign in', function(){
	it('try to sign in without filling any field', function(){
		var signInPage = new SignInPage();
		signInPage.visit();

		signInPage.signInButton.click();

		expect(messagesWrapperPage.errorMessage.isDisplayed()).toBe(true);

	});



	it('try create account without filling any field', function(){
		var createAccountPage = new CreateAccountPage();
		createAccountPage.visit();
		createAccountPage.createAccountButton.click();
		expect(messagesWrapperPage.errorMessage.isDisplayed()).toBe(true);
	});

});
