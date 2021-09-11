var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/ (initial*quantity))*100;
        
        showOutput(`Whoops!! Your loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/(initial*quantity))*100 ;

        showOutput(`Yay!! Your profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%`);
    } else {
        showOutput(`No pain no gain and no gain no pain`);
    }
}



function showOutput(message) {
    outputBox.innerHTML = message;
}