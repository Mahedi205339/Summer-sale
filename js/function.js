
document.getElementById('card-1').addEventListener('click', function () {
    const findValue = stringToNum('card-1-price')
    addToCalculationEntry('K. Accessories')
    const preTotalPrice = stringToNum('total-price')
    const totalPrice = preTotalPrice + findValue;
    setElementValueById('total-price', totalPrice)
    // setElementValueById('price-total', totalPrice)

    if (totalPrice > 0 && totalPrice < 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('total-price', totalPrice)
        setElementValueById('price-total', totalPrice)
        const purchaseButton =document.getElementById('btn-purchase')
        purchaseButton.removeAttribute('disabled')
    }
    else if (totalPrice >= 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('discount-price', newDiscountPrice)
        setElementValueById('price-total', newTotalprice)

        const couponButton = document.getElementById('apply-btn')
        couponButton.removeAttribute('disabled')
        const inputFeild =document.getElementById('coupon-code')
        const inputValue =inputFeild.value ;
        if(inputValue !== "SELL200"){
            couponButton.setAttribute('disabled',true)
        }
    }




})
document.getElementById('card-2').addEventListener('click', function () {
    const findValue = stringToNum('card-2-price')
    addToCalculationEntry('Wood Dinning Set')
    const preTotalPrice = stringToNum('total-price')
    const totalPrice = preTotalPrice + findValue;
    setElementValueById('total-price', totalPrice)
    // setElementValueById('price-total', totalPrice)

    if (totalPrice > 0 && totalPrice < 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('total-price', totalPrice)
        setElementValueById('price-total', totalPrice)
        const purchaseButton =document.getElementById('btn-purchase')
        purchaseButton.removeAttribute('disabled')
    }
    else if (totalPrice >= 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('discount-price', newDiscountPrice)
        setElementValueById('price-total', newTotalprice)

        const couponButton = document.getElementById('apply-btn')
        couponButton.removeAttribute('disabled')
        const inputFeild =document.getElementById('coupon-code')
        const inputValue =inputFeild.value ;
        if(inputValue !== "SELL200"){
            couponButton.setAttribute('disabled',true)
        }
    }

})
document.getElementById('card-3').addEventListener('click', function () {
    const findValue = stringToNum('card-3-price')
    addToCalculationEntry('Home Cooker')
    const preTotalPrice = stringToNum('total-price')
    const totalPrice = preTotalPrice + findValue;
    setElementValueById('total-price', totalPrice)
    // setElementValueById('price-total', totalPrice)

    if (totalPrice > 0 && totalPrice < 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('total-price', totalPrice)
        setElementValueById('price-total', totalPrice)
        const purchaseButton =document.getElementById('btn-purchase')
        purchaseButton.removeAttribute('disabled')
    }
    else if (totalPrice >= 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('discount-price', newDiscountPrice)
        setElementValueById('price-total', newTotalprice)

        const couponButton = document.getElementById('apply-btn')
        couponButton.removeAttribute('disabled')
        const inputFeild =document.getElementById('coupon-code')
        const inputValue =inputFeild.value ;
        if(inputValue !== "SELL200"){
            couponButton.setAttribute('disabled',true)
        }
    }

})
document.getElementById('card-4').addEventListener('click', function () {
    const findValue = stringToNum('card-4-price')
    addToCalculationEntry('Sports Back Cap')
    const preTotalPrice = stringToNum('total-price')
    const totalPrice = preTotalPrice + findValue;
    setElementValueById('total-price', totalPrice)
    // setElementValueById('price-total', totalPrice)

    if (totalPrice > 0 && totalPrice < 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('total-price', totalPrice)
        setElementValueById('price-total', totalPrice)
        const purchaseButton =document.getElementById('btn-purchase')
        purchaseButton.removeAttribute('disabled')
    }
    else if (totalPrice >= 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('discount-price', newDiscountPrice)
        setElementValueById('price-total', newTotalprice)

        const couponButton = document.getElementById('apply-btn')
        couponButton.removeAttribute('disabled')
        const inputFeild =document.getElementById('coupon-code')
        const inputValue =inputFeild.value ;
        if(inputValue !== "SELL200"){
            couponButton.setAttribute('disabled',true)
        }
    }

})
document.getElementById('card-5').addEventListener('click', function () {
    const findValue = stringToNum('card-5-price')
    addToCalculationEntry('Full Jersey Set')
    const preTotalPrice = stringToNum('total-price')
    const totalPrice = preTotalPrice + findValue;
    setElementValueById('total-price', totalPrice)
    // setElementValueById('price-total', totalPrice)

    if (totalPrice > 0 && totalPrice < 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('total-price', totalPrice)
        setElementValueById('price-total', totalPrice)
        const purchaseButton =document.getElementById('btn-purchase')
        purchaseButton.removeAttribute('disabled')
    }
    else if (totalPrice >= 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('discount-price', newDiscountPrice)
        setElementValueById('price-total', newTotalprice)

        const couponButton = document.getElementById('apply-btn')
        couponButton.removeAttribute('disabled')
        const inputFeild =document.getElementById('coupon-code')
        const inputValue =inputFeild.value ;
        if(inputValue !== "SELL200"){
            couponButton.setAttribute('disabled',true)
        }
    }
})
document.getElementById('card-6').addEventListener('click', function () {
    const findValue = stringToNum('card-6-price')
    addToCalculationEntry('Sports cates')
    const preTotalPrice = stringToNum('total-price')
    const totalPrice = preTotalPrice + findValue;
    setElementValueById('total-price', totalPrice)
    // setElementValueById('price-total', totalPrice)




    if (totalPrice > 0 && totalPrice < 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('total-price', totalPrice)
        setElementValueById('price-total', totalPrice)
        const purchaseButton =document.getElementById('btn-purchase')
        purchaseButton.removeAttribute('disabled')
    }
    else if (totalPrice >= 200) {
        const prediscountPrice = stringToNum('discount-price');
        const discountPrice = totalPrice * 0.8
        const newDiscountPrice = totalPrice - discountPrice;
        const newTotalprice = totalPrice - newDiscountPrice;
        setElementValueById('discount-price', newDiscountPrice)
        setElementValueById('price-total', newTotalprice)

        const couponButton = document.getElementById('apply-btn')
        couponButton.removeAttribute('disabled')
        const inputFeild =document.getElementById('coupon-code')
        const inputValue =inputFeild.value ;
        if(inputValue !== "SELL200"){
            couponButton.setAttribute('disabled',true)
        }
    }
})
document.getElementById('btn-home').addEventListener('click',function(){
    window.location.href='index.html'
})






