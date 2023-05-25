function checkCashRegister(price, cash, cid) {
  
  
  let changeToGive = cash - price;
  let boolean = 0;
  let arrChange = [];
  let arrClosed = [];
  let input;
  const cidObject = {
    "ONE HUNDRED": cid[8][1],   
    "TWENTY": cid[7][1],
    "TEN": cid[6][1],
    "FIVE": cid[5][1],
    "ONE": cid[4][1],
    "QUARTER": cid[3][1],   
    "DIME": cid[2][1],
    "NICKEL": cid[1][1],
    "PENNY": cid[0][1]

  }

  const boxRegister = {
    "ONE HUNDRED": 100,   
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,   
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }

  const boxChange = {
    "ONE HUNDRED": 0,   
    "TWENTY": 0,
    "TEN": 0,
    "FIVE": 0,
    "ONE": 0,
    "QUARTER": 0,   
    "DIME": 0,
    "NICKEL": 0,
    "PENNY": 0
  }

  

  for(let i in boxRegister){
    while(changeToGive >= boxRegister[i] && (changeToGive / boxRegister[i] >= 1) && cidObject[i] > 0){
      if(changeToGive >= boxRegister[i] && cidObject[i] > 0){
        changeToGive = Number((changeToGive - boxRegister[i]).toFixed(2));
        cidObject[i] = Number((cidObject[i] - boxRegister[i]).toFixed(2))
        boxChange[i] = Number((boxChange[i] + boxRegister[i]).toFixed(2));
      }
    }
  }
  //console.log(boxChange)

  

  for(let i in cidObject){
    if(boxChange[i] <= cidObject[i]){
      boolean = 0;
    }else if(changeToGive > 0){
      boolean = 1;
    }else{
      boolean = 2;
    }
  }

  for(let i in boxChange){
    if(boxChange[i] > 0){
      arrChange.push([i, boxChange[i]]);
    }
  }

  

  const newObjChange = {
    "PENNY": boxChange["PENNY"],
    "NICKEL": boxChange["NICKEL"],
    "DIME": boxChange["DIME"],
    "QUARTER": boxChange["QUARTER"],
    "ONE": boxChange["ONE"],
    "FIVE": boxChange["FIVE"],
    "TEN": boxChange["TEN"],
    "TWENTY": boxChange["TWENTY"],
    "ONE HUNDRED": boxChange["ONE HUNDRED"]
  }

  for(let i in newObjChange){
    if(newObjChange[i] > 0){
      arrClosed.push([i, newObjChange[i]]);
    }else{
      arrClosed.push([i, newObjChange[i]]);
    }
  }

  
  
  if(boolean === 0){
    input = {
      status: "OPEN",
      change: arrChange
    }
  }else if(boolean === 1) {
    input = {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }else{
    input = {
      status: "CLOSED",
      change: arrClosed
    }
  }
  console.log(input)
  console.log(changeToGive);
  console.log(boolean);
  
  
  return input;
  
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);