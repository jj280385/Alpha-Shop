import './scss/main.scss'
//宣告變數
const form = document.getElementById('a-form');
const formParts = form.querySelectorAll('.form-parts');
const stepControl = document.getElementById('step-control');
const steps = stepControl.querySelectorAll('.step');
const btnControl = document.getElementById('btn-control');
const prevBtn = btnControl.querySelector('.btn-outline');
const nextBtn = btnControl.querySelector('.btn-next');
const cart = document.querySelector('.cart-container')
const totalPrice = document.querySelector('.total__price')

let step = 0; // 步驟為0、1、2 變數預設值為0
let TotalPrice = 5298; 

// 點擊按鈕時的功能
function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.btn-next') && e.target.innerHTML === '下一步') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('initial') // 移除step1原始樣式(黑底白字)
    nowStep.classList.remove('active') // 移除active樣式(白底黑字)
    nowStep.classList.add('checked') // 加上checked樣式(偽元素打勾)
    nextStep.classList.add('active') // 加上active樣式(白底黑字)
    formParts[step].classList.toggle('d-none') 
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.btn-outline') && e.target.innerHTML === '上一步') {
    const prevStep = steps[step - 1]
    nowStep.classList.add('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('initial')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}

function setBtnDisabled() {
  if (step === 0) {
    prevBtn.setAttribute('disabled', 'disabled')
  } else {
    prevBtn.removeAttribute('disabled')
  }
  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步'
  }
}

// 購物車結算
function handleItemControlClicked(event) {
  if (event.target.matches('.minus') || event.target.matches('.plus')) {
    const itemNumber = event.target.parentElement.children[1];
    let number = Number(itemNumber.innerText);
    const itemPrice = event.target.parentElement.nextElementSibling;
    let price = itemPrice.innerText;
    price = Number(price.replace(/[$,]/g,''));
    if (event.target.matches('.plus')) {
      number += 1;
      TotalPrice += price;
    } else if (event.target.matches('.minus') && number !== 1) {
      number -= 1;
      TotalPrice -= price;
      if(number <= 0) {
        number = 1;
      }
    }
    itemNumber.innerText = number;
    console.log(TotalPrice);
    totalPrice.innerText = '$' + new Intl.NumberFormat('en-IN').format(TotalPrice);
  }
}

btnControl.addEventListener('click', handleBtnControlClicked);
cart.addEventListener('click', handleItemControlClicked);

