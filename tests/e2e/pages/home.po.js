var HomePageObject = function (){
  this.firstLinkOnLeftSide = element(by.css('.depth-1'));
  this.itemTitle = element(by.css('.api-title'));
  this.searchField = element(by.model('searchTerm'));
};

HomePageObject.prototype.visit = function(){
  browser.get('http://www.protractortest.org/#/api');
}

module.exports = HomePageObject;
