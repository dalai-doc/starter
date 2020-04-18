// дэлгэцтэй ажиллах контроллер
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    gerInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

//санхүүтэй ажиллах контроллер
var finaceController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  var incomes = [];
  var expenses = [];
})();

//програмын контроллер
var appController = (function (uiController, finaceController) {
  var cntrlAddItem = function () {
    //1. оруулах өгөгдлийг дэлгэцээс олж авна
    console.log(uiController.gerInput());
    //2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгалана,
    //3.олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
    //4.Төсөвийг тооцоолно
    //5.Эцсийн үлдэгдэл , тооцоог дэлгэцэд гаргана
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      cntrlAddItem();
    });

    document.addEventListener("keypress", function () {
      if (event.keyCode === 13 || event.which === 13) {
        cntrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("application started....");
      setupEventListeners();
    },
  };
})(uiController, finaceController);
appController.init();
