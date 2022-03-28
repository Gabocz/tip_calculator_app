const billEl = document.querySelector('#bill')
const numPeopleEl = document.querySelector('#numPeople')
const tipAmountEl = document.querySelector('#tipAmount')
const totalAmountEl = document.querySelector('#total')
const cantBeZero = document.querySelector('#cantBeZero')
const resetBtn = document.querySelector('#resetBtn')
const customInputEl = document.querySelector('#customInput')


numPeopleEl.addEventListener('input', () => {
    removeWarning()
})
    
customInputEl.addEventListener('click', calculateTip)

resetBtn.addEventListener('click', resetCalculator)

const percentBtns = document.querySelectorAll('.percentBtn')
percentBtns.forEach(btn => btn.addEventListener('click', calculateTip))

function displayWarning () {
    cantBeZero.style.visibility = 'visible'
    numPeopleEl.classList.add('redOutline')
            
}

function removeWarning () {
    if(numPeopleEl.value !== 0) {
    cantBeZero.style.visibility = 'hidden'
    numPeopleEl.classList.remove('redOutline')
}
}

function calculateTip() {
    let percent = parseInt(this.value)
    if(isNaN(percent)) {
        return
    } 
    const numPeople = parseInt(numPeopleEl.value)
    const bill = parseInt(billEl.value)
    if(isNaN(bill) || bill === 0) {
        return
    }
    if (isNaN(numPeople) || numPeople === 0) {
     displayWarning()
     return
    } else {
        removeWarning()
    const tip = bill / 100 * percent / numPeople
    const totalAmount = bill / numPeople + tip
    tipAmountEl.textContent = `$${tip.toFixed(2)}`
    totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`
    }
}

function resetCalculator () {
billEl.value = ''
numPeopleEl.value = ''
customInputEl.value = ''
tipAmountEl.textContent = '$0.00'
totalAmountEl.textContent = '$0.00'
}
    

