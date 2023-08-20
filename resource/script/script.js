// commonn function 
let totalPrice = 00;
let discount = 00;
let grandTotal = 00;

function cardHandler(target){
    const selectItemsContainer = document.getElementById('select-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectItemsContainer.appendChild(li);
    
    const priceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceString);

    totalPrice = totalPrice + price;
    document.getElementById('total-price-field').innerText = totalPrice.toFixed(2);

    grandTotal =totalPrice - discount;
    document.getElementById('grand-total-field').innerText = grandTotal.toFixed(2);

    if(totalPrice >= 200){
        document.getElementById("purchase-btn").disabled = false;
        document.getElementById("coupon-apply-btn").disabled = false;
       discount = totalPrice * 20 / 100;
       document.getElementById('discount-field').innerText = discount.toFixed(2);
       grandTotalWithDiscount = totalPrice - discount;
       document.getElementById('grand-total-field').innerText = grandTotalWithDiscount.toFixed(2);
    }

    
}