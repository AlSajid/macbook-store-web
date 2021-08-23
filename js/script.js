function getValues(spanID) {
    return document.getElementById(spanID).innerText;
}

function setValues(spanID, updatedValue) {
    document.getElementById(spanID).innerText = updatedValue;
}

// memory config
function updateMemoryPrice(memoryCost) {
    updateExtraCost(memoryCost, 'ExtraMemoryCost');
}

//storage config
function updateStoragePrice(storageCost) {
    updateExtraCost(storageCost, 'ExtraStorageCost');
}

// Delivery cost using EventListener
document.getElementById('normal-delivery').addEventListener('click', function () {
    updateExtraCost(0, 'ExtraDeliveryCost');
})

document.getElementById('fast-delivery').addEventListener('click', function () {
    updateExtraCost(20, 'ExtraDeliveryCost');
})


//Update Extra Cost
function updateExtraCost(price, type) {
    setValues(type, price);

    //update total Price
    bestprice = parseFloat(getValues('bestPrice'));
    memoryCost = parseFloat(getValues('ExtraMemoryCost'));
    storageCost = parseFloat(getValues('ExtraStorageCost'));
    delivaryCost = parseFloat(getValues('ExtraDeliveryCost'));
    setValues('totalPrice', bestprice + memoryCost + storageCost + delivaryCost);
    setValues('finalPrice', bestprice + memoryCost + storageCost + delivaryCost);
}

//Applying Promo code
document.getElementById('ApplyPromo').addEventListener('click', function (event) {
    if (promoCode.value == 'stevekaku') {
        currentPrice = getValues('totalPrice');
        setValues('finalPrice', currentPrice * 0.80);
        promoCode.value == '';
        
    }

})

