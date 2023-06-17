const bill = document.querySelector('#bill')
const discount = document.querySelector('#discount')
const calculate = document.querySelector('#calculate')
const total = document.querySelector('#total')
let valid=true
calculate.addEventListener('click',()=>{
    const billValue = bill.value;
    const discountValue = discount.value;
    const valid = isValid(billValue,discountValue)
    if(valid){
        const discountCalculate = (billValue*discountValue)/100
        const billWithDiscout = billValue-discountCalculate
        total.innerHTML = (`Total Bill With Discout: ${billWithDiscout}`)
    }else{
        total.innerHTML = ('Enter Valid Numbers')
        alert('Enter Valid Numbers')
    }

})
function isValid(billValue,discountValue){
    if (billValue>0 && discountValue>=0 && discountValue<100) {
        return true
    }
    return false
}
