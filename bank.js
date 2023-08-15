document.getElementById("deposit-btn").addEventListener("click", () => {
  let deposit = document.getElementById("deposit-ammount").value
  if(isNaN(deposit) || deposit < 0){
    alert('enter valid input ')
    return
  }
  deposit=parseFloat(deposit)
  let depositDisplay = parseFloat(
    document.getElementById("deposit-display").innerText
  ); 
  document.getElementById("deposit-display").innerText= depositDisplay+deposit
  let balanceDisplay = parseFloat(
    document.getElementById("Balance-display").innerText
  ); 
  document.getElementById("Balance-display").innerText = balanceDisplay + deposit
  document.getElementById("deposit-ammount").value=''
});
document.getElementById("withdraw-btn").addEventListener("click", () => {
  let withdraw = document.getElementById("withdraw-ammount").value;
  if (isNaN(withdraw) || withdraw < 0) {
    alert("enter valid input ");
    return;
  }
  withdraw = parseFloat(withdraw)
  let withdrawDisplay = parseFloat(
    document.getElementById("withdrow-display").innerHTML
  );
  let balanceDisplay = parseFloat(
    document.getElementById("Balance-display").innerText
  ); 
  if (withdraw> balanceDisplay) {
    alert('Not have enough balance')
  document.getElementById("withdraw-ammount").value = "";


    return
  }
  document.getElementById("withdrow-display").innerText = withdrawDisplay + withdraw
  document.getElementById("Balance-display").innerText =
    balanceDisplay - withdraw;
    
  document.getElementById("withdraw-ammount").value = "";
});
