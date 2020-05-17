
// budgetController
var budgetController = (function (){

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

})();


// UI Controller
var UIController = (function (){

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // income or expense
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMStrings;
    }


  };

})();


// controller
var controller = (function (budgetCtrl, UICtrl){

  var setupEventListeners = function() {
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  
    document.addEventListener('keypress', function(event) {
      if(event.keyCode === 13 ||event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {
     // 1. Get input value
     var input = UICtrl.getInput();
     console.log(input);

    // 2. Add item to the budget controller 

    // 3. Add item to the UI controoller

    // 4. Calculate total budget 

    // 5. Display the budget to UI

  };

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };
  
})(budgetController, UIController);

controller.init();









