'use strict'

const TodoMvcPageObject = require('../pages/todoMvc.po.js');


describe('Todo MVC Angular', () => {
  console.log('-------------------------------- TOODO ');
  const page = new TodoMvcPageObject();

  it('add an item in the todo list', () =>{
	 page.visit();

   page.addItemOnTodoList('add an item in the todo list');
   expect(page.listOfItems.count()).toEqual(1);

  });

  it('add new item in the todo list', ()=>{
	 page.visit();

   page.addItemOnTodoList('add an item in the todo list');
   expect(page.listOfItems.count()).toEqual(2);

  });


});