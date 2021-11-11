function render(numOfDisplay, render) {
    display[numOfDisplay].innerText = render;
}
const del = () => {
    render(0, "")
    firstNum = ""
    render(1, firstNum)
}
const canc = () => {
    console.log(firstNum.slice(firstNum.length))
    firstNum = firstNum.slice(0, firstNum.lastIndexOf())
    render(1, firstNum)
}
const calc = () => {
    let calc = total + firstNum;
    render(0, calc)
    firstNum = eval(calc).toString();
    render(1, firstNum);
    resultForLocal = firstNum;
    calc = "";
    storage.push({
        "operazione": num1AndOperatorForLocal+num2ForLocal,
        "risultato": resultForLocal
    })
    console.log(storage)
    window.localStorage.setItem("what",JSON.stringify(storage))
    
    
}
const display = document.querySelectorAll('#display p')
const number = document.querySelectorAll('#number .num')
const cancBtn = document.querySelectorAll('#op .canc button')
const operation = document.querySelectorAll('#operation button')
const calcola = document.querySelector('#number .calcola');
const log = document.querySelector('#log');
const modale = document.querySelector('.modale');
let total = 0;
let firstNum = "";
let operator = "";
let num1AndOperatorForLocal;
let num2ForLocal;
let resultForLocal;
const storage = [];
document.addEventListener("DOMContentLoaded", () => {

    cancBtn[0].addEventListener("click", del)
    cancBtn[1].addEventListener("click", canc)

    for (x of number) {
        
        x.addEventListener("click", (event) => {
            firstNum = firstNum.concat("", event.target.id);
            render(1, firstNum)
            num2ForLocal = firstNum;
            return firstNum
        })
    
    }

    for (x of operation) {
        x.addEventListener("click", (event) => {
            operator = event.target.id;
            total = firstNum + operator;
            num1AndOperatorForLocal = `${firstNum}  ${operator}`;
            render(0, total)
            firstNum = "";
        })
    }

    calcola.addEventListener('click', calc)

    log.addEventListener("click", ()=>{
        modale.style.display = "block";
        let displayLog = JSON.parse(window.localStorage.getItem("what"))
        console.log(displayLog[0].operazione)
        for (x of displayLog) {
            const parLog = document.createElement("p")
            const textLog = document.createElement("strong")
            textLog.textContent = "Operazione : "
            parLog.innerText = `${x.operazione} = ${x.risultato}`
            parLog.insertBefore(textLog, parLog.firstChild)
            console.log(parLog)
            modale.appendChild(parLog)
            
        }
        //modale.lastElementChild.innerText= displayLog
    })
})