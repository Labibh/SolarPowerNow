let moneyButtons = document.querySelectorAll('[type="button"]');
let donateAmountInput = document.getElementById('donate-amount-input');
let donationOrg = document.querySelectorAll('.donation-org');
let paymentRadioButtons = document.querySelectorAll('[type="radio"]');
let paymentTypeText = document.getElementById("paymentTypeText");

for (var i=0; i < moneyButtons.length; i++){
    moneyButtons[i].addEventListener('click', function handleClick(e){
        for (var j=0; j < moneyButtons.length; j++) {
            moneyButtons[j].classList.remove('donate-amount-button-selected');
        }
        e.target.classList.add('donate-amount-button-selected');
        donateAmountInput.value = e.target.dataset.value;
    })
}

donateAmountInput.addEventListener('click', function(){
    for (var j=0; j < moneyButtons.length; j++) {
        moneyButtons[j].classList.remove('donate-amount-button-selected');
    }
    moneyButtons[3].classList.add('donate-amount-button-selected');
})

for (var i=0; i < donationOrg.length; i++){
    donationOrg[i].addEventListener('click', function handleClick(e){
        for (var j=0; j < donationOrg.length; j++) {
            donationOrg[j].classList.remove('donation-org-selected');
        }
        e.target.classList.add('donation-org-selected');
    })
}

for (var i=0; i < paymentRadioButtons.length; i++){
    paymentRadioButtons[i].addEventListener('click', function handleClick(e){
        paymentTypeText.innerText = e.target.value;
    })
}



