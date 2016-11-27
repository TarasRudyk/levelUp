Template.ShoppingList.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
  shoppingList: () => {
    return Recipes.findOne({inMenu: true})
  }
})
