// wow init
AOS.init();

// -------------------------------
window.onload = () => {
  let result = document.getElementById("result");

  let api = "https://economia.awesomeapi.com.br/json/all";
  let request = new XMLHttpRequest();

  request.open("GET", api);

  request.onload = () => {
    let exchange = JSON.parse(request.responseText);
    let exchangeValue = parseFloat(exchange.USD.ask);
    let replacedExchangeValue = exchangeValue.toFixed(2).replace(".", ",");

    result.innerHTML = `R$ ${replacedExchangeValue}`;
  };

  request.onchange = () => {
    let exchange = JSON.parse(request.responseText);
    let exchangeValue = parseFloat(exchange.USD.ask);

    result.innerHTML = `R$ ${replacedExchangeValue}`;
  };

  request.send();
};
