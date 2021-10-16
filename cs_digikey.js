'use strict';

function getItemParam(){
    let brand = document.getElementsByClassName('lnkMfct')[0].innerText;
    let name = document.getElementsByClassName('product-details-overview')[0].querySelector('.product-details-headline').querySelector('h1').innerText;
    let num = document.getElementById('product-overview').rows[2].cells[1].innerText;
    let url = document.URL;
    let price = document.getElementById('schema-offer').innerText.replace(',', '');
    let qty = document.getElementById('qty').value;

    return {brand: brand, name: name, num: num, url: url, price: price, qty: qty};
};


chrome.runtime.sendMessage({item:getItemParam()}, function(response) {
    console.log(response + ':Item param sending is finised.');
});
