'use strict';

function getItemParam(){
    let brand = document.getElementById('lnkManufacturerName').innerText;
    let name = document.getElementById('pdpProdInfo').querySelector('.panel-title').innerText;
    let num = document.getElementById('spnManufacturerPartNumber').innerText;
    let url = document.URL;
    let price = document.getElementsByClassName('pricing-table')[0].rows[1].cells[1].innerText.replace(/[^0-9.]/g, '');
    let qty = (document.getElementById('BuyQty').value === '') ? '1' : document.getElementById('BuyQty').value;
    
    return {brand: brand, name: name, num: num, url: url, price: price, qty: qty};
};


chrome.runtime.sendMessage({item:getItemParam()}, function(response) {
    console.log(response + ':Item param sending is finised.');
});
