//このファイルは拡張機能アイコンがクリックされると自動的に走る


function getItem(){
    const templateContent = document.getElementById('template').content;
    const clone = document.importNode(templateContent, true);
    chrome.storage.local.get(['length', 'tmpItem', 'items'], function(res) {
        if(JSON.stringify(res.tmpItem) !== JSON.stringify({})){
            if(!res.items.some(item => item.url === res.tmpItem.url)){
                clone.id = 'item'+res.length;
                clone.getElementById('item').querySelector('summary').textContent = 'Item ' + (res.length+1);
                clone.getElementById('itemBrand').value = res.tmpItem.brand;
                clone.getElementById('itemName').value = res.tmpItem.name;
                clone.getElementById('itemNumber').value = res.tmpItem.num;
                clone.getElementById('itemURL').value = res.tmpItem.url;
                clone.getElementById('itemQuantity').value = res.tmpItem.qty;
                document.getElementById('list_grid').appendChild(clone);

                total = document.getElementById('total');
                total.textContent = Number(total.textContent) + Number(res.tmpItem.price)*Number(res.tmpItem.qty);

                chrome.storage.local.set({'items': res.items.concat([res.tmpItem]), 'length': res.length+1, 'total': total.textContent});
            }
        }
    });
}

function saveToClipboard(){
    let clipboardText = '';
    let n=1;
    chrome.storage.local.get(['items'], function(res) {
        for(let item of res.items){
            clipboardText += '〇製品 ' + n + '\n';
            clipboardText += '・メーカ：' + item.brand + '\n';
            clipboardText += '・品名　：' + item.name + '\n';
            clipboardText += '・型番　：' + item.num + '\n';
            clipboardText += '・ＵＲＬ：' + item.url + '\n';
            clipboardText += '・個数　：' + item.qty + '\n';
            clipboardText += '\n';
            n += 1;
        }
        navigator.clipboard.writeText(clipboardText);
    });
    
}

function showItemList(items){
    const templateContent = document.getElementById('template').content;
    let n = 0;
    for(let item of items){    
        const clone = document.importNode(templateContent, true);
        clone.id = 'item' + n;
        clone.getElementById('item').querySelector('summary').textContent = 'Item ' + (n+1);
        clone.getElementById('itemBrand').value = item.brand;
        clone.getElementById('itemName').value = item.name;
        clone.getElementById('itemNumber').value = item.num;
        clone.getElementById('itemURL').value = item.url;
        clone.getElementById('itemQuantity').value = item.qty;
        document.getElementById('list_grid').appendChild(clone);
        n += 1;
    }
    chrome.storage.local.get('total', function(res) {
        total = document.getElementById('total');
        total.textContent = res.total;    
    });
}

function clearItemList(){
    const itemList = document.getElementById('list_grid');
    chrome.storage.local.set({items: [], length: 0, total: 0});
    while( itemList.firstChild ){
        itemList.removeChild( itemList.firstChild );
      }
    total = document.getElementById('total');
    total.textContent = 0;
}

//main script
chrome.storage.local.get('items', function(res) {
    if(JSON.stringify(res.items) !== JSON.stringify({})) showItemList(res.items);
});

document.getElementById('get').addEventListener('click', getItem);
document.getElementById('copy').addEventListener('click', saveToClipboard);
document.getElementById('clear').addEventListener('click', clearItemList);