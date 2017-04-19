'use strict'

class TodoMvcPageObject{

	constructor(){
		this.newTodoField = element(by.id('new-todo'));
		this.listOfItems = element.all(by.css('.view'));
	}

	visit(){
	  browser.get('http://todomvc.com/examples/angularjs/#/');
	}

	addItemOnTodoList(item){
	  this.newTodoField.sendKeys(item);
	  this.newTodoField.sendKeys(protractor.Key.ENTER);

	}

}

module.exports = TodoMvcPageObject;
