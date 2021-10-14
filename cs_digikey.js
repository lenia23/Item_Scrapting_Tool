'use strict';

function parseItemNum(){
    let base = document.querySelectorAll('.u-Table')[0];
    let baseNumRemoveList = base.querySelectorAll('.AttributeLabel__Heading');
    let baseNumList = base.querySelectorAll('.AttributeLabel__Wrap');
    let len = baseNumList.length;
    let codeNum = baseNumList[len-2].textContent.replace(baseNumRemoveList[len-2].textContent, "")
    let partNum = baseNumList[len-1].textContent.replace(baseNumRemoveList[len-1].textContent, "")

    return partNum + " (" + codeNum + ")";
}

function getItemParam(){
    let brand = document.getElementsByClassName('lnkMfct')[0].innerText;
    let name = document.getElementsByClassName('product-details-overview')[0].querySelector('.product-details-headline').querySelector('h1').innerText;
    let num = document.getElementById('product-overview').rows[2].cells[1].innerText;
    let url = document.URL;
    
    let purchase = document.getElementById('qty').value;
    let price = document.getElementById('schema-offer').innerText.replace(',', '');
    let qty = document.getElementById('qty').value;
    console.log(price);
    return {brand: brand, name: name, num: num, url: url, price: price, qty: qty};
};


chrome.runtime.sendMessage({item:getItemParam()}, function(response) {
    console.log(response + ':Item param sending is finised.');
});
