var HomePageObject = require('../pages/home.po.js');

describe('Homepage Tests e2e', function(){
  var page = new HomePageObject();
  it('perform a search into the api page', function(){

    page.visit();

    page.searchField.sendKeys('restart');
    page.firstLinkOnLeftSide.click();
  });
});
