document.getElementById("deposit-btn").addEventListener("click", () => {
  let deposit = document.getElementById("deposit-ammount").value
  if(isNaN(deposit)){
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
