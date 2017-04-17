'use strict'

class TodoMvcPageObject{
	
	constructor(){
		console.log('testeeeeeeee========================');
	  	this.newTodoField = element(by.id('new-todo'));
		this.listOfItems = element.all(by.css('.view'));
	}

	visit(){
	  browser.get('#/');
	}

	addItemOnTodoList(item){
	  this.newTodoField.sendKeys(item);
	  this.newTodoField.sendKeys(protractor.Key.ENTER);
	  
	}

}

module.exports = TodoMvcPageObject;