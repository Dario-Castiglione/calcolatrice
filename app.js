const number = document.querySelectorAll('#number .num')
const operation = document.querySelectorAll('#operation button')
const display = document.querySelectorAll('#display p')
console.log(operation)
let total= 0;
let firstNum= "";
for (x of number) {
    x.addEventListener("click", (event)=>{
        firstNum = firstNum.concat("" , event.target.id)
        display[1].innerText = firstNum 
    })
}
let operator = "";
for (x of operation){
    x.addEventListener("click", (event)=>{
        operator = event.target.id
        console.log(operator)
        display[0].innerText = firstNum + operator
        total = firstNum + operator
        firstNum = "";
        console.log(total)
    })
}
const calcola = document.querySelector('#number .calcola')
calcola.addEventListener('click',()=>{
    let  calc = total + firstNum;
    display[1].innerText= eval(calc)
    firstNum = calc;
    calc = ""  
})