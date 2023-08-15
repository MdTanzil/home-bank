document.getElementById("deposit-btn").addEventListener("click", depositFunc);
document.getElementById("withdraw-btn").addEventListener("click", withdrawFunc);
document
    .getElementById("deposit-ammount")
    .addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            depositFunc();
        }
    });
document
    .getElementById("withdraw-ammount")
    .addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            withdrawFunc();
        }
    });


function depositFunc() {
    let deposit = document.getElementById("deposit-ammount").value;
    if (isNaN(deposit) || deposit < 0) {
        alert("enter valid input ");
        document.getElementById("deposit-ammount").value = "";

        return;
    }
    deposit = parseFloat(deposit);
    let depositDisplay = parseFloat(
        document.getElementById("deposit-display").innerText
    );
    document.getElementById("deposit-display").innerText =
        depositDisplay + deposit;
    let balanceDisplay = parseFloat(
        document.getElementById("Balance-display").innerText
    );
    document.getElementById("Balance-display").innerText =
        balanceDisplay + deposit;
    document.getElementById("deposit-ammount").value = "";
};

function withdrawFunc() {

    let withdraw = document.getElementById("withdraw-ammount").value;
    if (isNaN(withdraw) || withdraw < 0) {
        alert("enter valid input ");
        document.getElementById("withdraw-ammount").value = "";

        return;
    }
    withdraw = parseFloat(withdraw)
    let withdrawDisplay = parseFloat(
        document.getElementById("withdrow-display").innerHTML
    );
    let balanceDisplay = parseFloat(
        document.getElementById("Balance-display").innerText
    );
    if (withdraw > balanceDisplay) {
        alert('Not have enough balance')
        document.getElementById("withdraw-ammount").value = "";


        return
    }
    document.getElementById("withdrow-display").innerText = withdrawDisplay + withdraw
    document.getElementById("Balance-display").innerText =
        balanceDisplay - withdraw;

    document.getElementById("withdraw-ammount").value = "";
}



