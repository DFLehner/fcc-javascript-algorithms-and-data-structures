function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let changearr = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    let moneyinc = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  for(let i=0;i<changearr.length;i++){
    change = Math.round(change * 100) / 100
    let num = Math.min(Math.floor(change/moneyinc[8-i]),Math.floor(cid[8-i][1]/moneyinc[8-i]));
    changearr[8-i][1]= num * moneyinc[8-i];
    change -= num * moneyinc[8-i];
  }
  console.log(change)
  console.log(changearr)
  console.log(cid)
  if(change !== 0){return {status: 'INSUFFICIENT_FUNDS', change : []}}
  let bool = true;
  for(let i = 0;i<changearr.length;i++){
    if(changearr[i][1]!= cid[i][1]){bool = false}
  }
  if (bool){return {status: 'CLOSED', change: cid}}
  
  let counter = 0;
  for(let i=0;i<changearr.length+counter;i++){
    if (changearr[i-counter][1] == 0){changearr.splice(i-counter,1)
    counter++;
    }
  }
  console.log(changearr)
  return {status: 'OPEN', change : changearr.reverse()}
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])