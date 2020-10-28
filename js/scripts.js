var euroInUzs = 12285.78;
var yuanInUzs = 11457.51;
var rublInUzs = 136.11;
var liraInUzs = 1301.33;
var funtInUzs = 13509.28;
var dollarInUzs = 10359.88;

var currencyConverterForm = document.querySelector('#currencyConverterForm');

currencyConverterForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var currencyUnit = currencyConverterForm.querySelector('#currencyUnit').value.trim();

  var currencyValue = parseFloat(currencyConverterForm.querySelector('#currencyValue').value.trim(), 10);

  var currencyInSum;

  if (currencyUnit === "euro") {
    currencyInSum = currencyValue * euroInUzs;
  } else if (currencyUnit === "yuan") {
    currencyInSum = currencyValue * yuanInUzs;
  } else if (currencyUnit === "rubl") {
    currencyInSum = currencyValue * rublInUzs;
  } else if (currencyUnit === "lira") {
    currencyInSum = currencyValue * liraInUzs;
  } else if (currencyUnit === "funt") {
    currencyInSum = currencyValue * funtInUzs;
  } else if (currencyUnit === "dollar") {
    currencyInSum = currencyValue * dollarInUzs;
  } else {
    currencyInSum = "Bunday pul birligi topilmadi"
  }

  var convertResult = document.querySelector('#currencyInSum');
  convertResult.textContent = currencyInSum + ' sum';
});

currencyConverterForm.addEventListener('reset', function (evt) {
  var convertResult = document.querySelector('#currencyInSum');
  convertResult.textContent = "";
});