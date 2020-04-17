// дэлгэцтэй ажиллах контроллер
var uiController = (function () {})();

//санхүүтэй ажиллах контроллер
var finaceController = (function () {})();

//програмын контроллер
var appController = (function (uiController, finaceController) {
  var cntrlAddItem = function () {
    //1. оруулах өгөгдлийг дэлгэцээс олж авна
    console.log("add_btn");
    //2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгалана,
    //3.олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
    //4.Төсөвийг тооцоолно
    //5.Эцсийн үлдэгдэл , тооцоог дэлгэцэд гаргана
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    cntrlAddItem();
  });

  document.addEventListener("keypress", function () {
    if (event.keyCode === 13 || event.which === 13) {
      cntrlAddItem();
    }
  });
})(uiController, finaceController);
