'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
    chrome.storage.local.set({length: 0, items: [], total: 0, tmpItem: {}});
  });

// contentscriptから送られたアイテム情報をローカルストレージに保存
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    // chrome.storage.local.set({'items': res.items.concat([msg.item]), 'length':res.length+1});
    chrome.storage.local.set({'tmpItem': msg.item});
    sendResponse('Background') 

  });
