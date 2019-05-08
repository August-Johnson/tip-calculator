console.log("Hello");

document.addEventListener("submit", (event) => {
    event.preventDefault();

    const billTotal = document.getElementById("bill-amount").value;
    const tipPercentage = document.getElementById("tip-percentage").value;

    let tipResults = billTotal * (tipPercentage / 100);

    tipResults = Math.round(tipResults * 100) / 100;

    //console.log(tipResults);
    document.getElementById("tip-results").innerHTML = tipResults;
});