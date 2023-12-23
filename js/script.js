//DOM

let BtnIncome = document.getElementById('btnIncome');
let BtnExpanse = document.getElementById('btnExpanse');

//tBody table
let tBodyInc = document.getElementById('tBody-inc');
let  tBodyExp = document.getElementById('tBody-exp');

//Global Variable
let transaction = {
    income: [],
    expanse:[]
}

function incomeHandler(){
    //input
    let namaValue =document.getElementById('nama').value;
    let saldoValue =document.getElementById('saldo').value;
    let id;
    if(transaction.income.length ===0){
        id = 1;
    } else {
        id = transaction.income[transaction.income.length-1].id+1;
    }
    let tempObj = {
        id,
        transaksi: namaValue,
        saldo:saldoValue
    }
    transaction.income.push(tempObj);
    // console.log('Income');
    // console.log(transaction);
    alert(`${namaValue} telah ditambahkan`);
}

function ExpanseHandler(){
    //input
    let namaValue =document.getElementById('nama').value;
    let saldoValue =document.getElementById('saldo').value;
    let id;
    if(transaction.expanse.length ===0){
        id = 1;
    } else {
        id = transaction.expanse[transaction.expanse.length-1].id+1;
    }
    let tempObj = {
        id,
        transaksi: namaValue,
        saldo:saldoValue
    }
    transaction.expanse.push(tempObj);
    // console.log('expanse');
    // console.log(transaction);
    alert(`${namaValue} telah ditambahkan`);
}



// Add Event Listener
BtnIncome.addEventListener('click', incomeHandler);
BtnExpanse.addEventListener('click', ExpanseHandler);
