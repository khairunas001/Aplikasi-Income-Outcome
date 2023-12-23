//DOM

let BtnIncome = document.getElementById('btnIncome');
let BtnExpanse = document.getElementById('btnExpanse');

//Global Variable
let transaction = {
    income: [
        {
            id: 1,
            transaksi:'salary',
            saldo: 5000000
        }
    ],
    expanse:[
        {
            id: 1,
            transaksi:'Bayar Tagihan',
            saldo: 50000
        }
    ]
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
    getTransaction();
    saldoCount();
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
    getTransaction();
    saldoCount();
    // console.log('expanse');
    // console.log(transaction);
    alert(`${namaValue} telah ditambahkan`);
}

function getTransaction(){
    //tBody table
    let tBodyInc = document.getElementById('tBody-inc');
    let  tBodyExp = document.getElementById('tBody-exp');
    tBodyInc.innerHTML='';
    tBodyExp.innerHTML='';
    transaction.income.forEach(inc =>{
        tBodyInc.innerHTML += `<tr>
        <td>${inc.id}</td>
        <td>${inc.transaksi}</td>
        <td>${inc.saldo}</td>
        </tr>`
    })
    transaction.expanse.forEach(exp =>{
        tBodyExp.innerHTML += `<tr>
        <td>${exp.id}</td>
        <td>${exp.transaksi}</td>
        <td>${exp.saldo}</td>
        </tr>`
    })
}

function saldoCount(){
    let saldoIncome = 0;
    let saldoExpanse = 0;
    transaction.income.forEach (inc =>{
        saldoIncome += +inc.saldo
    })
    transaction.expanse.forEach (exp =>{
        saldoExpanse += +exp.saldo
    })
    let selisih = saldoIncome-saldoExpanse;
    
    let saldoValue = document.getElementById('saldo-value')
    saldoValue.innerHTML = selisih;
    // console.log(selisih);
}


// Add Event Listener
BtnIncome.addEventListener('click', incomeHandler);
BtnExpanse.addEventListener('click', ExpanseHandler);
getTransaction();
saldoCount();
