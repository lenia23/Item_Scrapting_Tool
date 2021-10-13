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
    let brand;
    let baseBrand = document.querySelectorAll('.ProductInfoArea')[0].querySelector('a');
    if(baseBrand.text === ''){
        brand = baseBrand.children[0].title;
    } else {
        brand = baseBrand.text;
    }
    let name = document.querySelectorAll('.ProductName')[0].querySelector('a').text;
    let num = parseItemNum();
    let url = document.URL;
    
    let purchase = document.querySelector('.BasketArea__Button').querySelector('input');
    let price = purchase.dataset['price'];
    let qty = purchase.value;
    return {brand: brand, name: name, num: num, url: url, price: price, qty: qty};
};

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log(request.message);
//     console.log(sender);
//     let item = getItemParam();
//     sendResponse(item);
//     return true;
// });

chrome.runtime.sendMessage({item:getItemParam()}, function(response) {
    console.log(response + ':Item param sending is finised.');
});
