
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


  var date = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //Create new ID
      if(date.allItems[type].length > 0) {
        ID = date.allItems[type][date.allItems[type].length - 1].id + 1;
      }else {
        ID = 0;
      }

      //Create new item based on 'inc' and 'exp' type
      if(type === 'exp') {
        newItem = new Expense(ID, des, val);
      }else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }


      //Push it into our date structure
      date.allItems[type].push(newItem);

      //Return the new element
      return newItem;
    },

    calculateBudget: function() {

      // calculate total income and expenses

      // calculate the butget : income - expense

      // caluculate the parsetage of income that we spend



    testing: function() {
      console.log(date);
    }
  };

})();




// UI Controller
var UIController = (function (){

  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      // Create HTML string with placeholder text
      var html, newHtml, element;

      if (type === 'inc') {
        element = DOMStrings.incomeContainer;

        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'; 
      } else if (type === 'exp') {
        element = DOMStrings.expensesContainer;

        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    clearFields: function() {
      var fields, fieldsArr;
      fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    getDOMstrings: function() {
      return DOMStrings;
    }

  };

})();


// Global App Controller
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

  var updateBudget = function() {

    // 1. Calculate total budget 

    // 2. Return the Budget

    // 3. Display the budget to UI

  };


  var ctrlAddItem = function() {
    var input, newItem;

     // 1. Get input value
    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      
          // 2. Add item to the budget controller 
          newItem = budgetController.addItem(input.type, input.description, input.value);
      
          // 3. Add item to the UI controoller
          UICtrl.addListItem(newItem, input.type);
      
          // 4. Clear the fields
          UICtrl.clearFields();
      
          // 5. Calcurate and update budget
          updateBudget();
    }
  };

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  };
  
})(budgetController, UIController);

controller.init();









