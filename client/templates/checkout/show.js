Template.checkoutShow.helpers({
  cart : function(){
    currentCart = Carts.findOne({userKey : userKey});
    return currentCart;
  }
});

Template.checkoutShow.onRendered(function(){

  //wire up KO and some test data
  checkoutModel = new CheckoutViewModel({
    name : "",
    email : "",
    address : {
      street : "",
      city : "",
      state : "",
      zip : "",
      country : ""
    }
  });

  var panel = document.getElementById("checkout-panel");
  ko.cleanNode(panel);
  ko.applyBindings(checkoutModel,panel);

});