'use strict';



function getItemParam(){
    let base = document.getElementsByClassName('table-bordered-rect')[0];
    let brand = '-';
    let name = base.rows[1].cells[1].innerText;
    let num = base.rows[2].cells[1].innerText;
    let url = document.URL;
    let price = base.rows[5].cells[1].innerText.replace(/[^0-9.]/g, '');
    let qty = document.getElementById('id_quantity').value;
    
    return {brand: brand, name: name, num: num, url: url, price: price, qty: qty};
};


chrome.runtime.sendMessage({item:getItemParam()}, function(response) {
    console.log(response + ':Item param sending is finised.');
});
