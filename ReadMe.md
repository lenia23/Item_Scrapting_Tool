# Item Scraping Tool  

## Description  

## ToDo  

- [x] 対応サイトの選定  
    * スイッチサイエンス
    * マウザー
    * Digikey
    * Amazon
- [ ] 対応サイトへの対応  
    - [ ] スイッチサイエンス
    - [ ] マウザー
    - [x] Digikey
    - [ ] Amazon
- [x] 個数をhtmlから取得  
- [x] 価格をhtmlから取得  
- [x] 拡張機能ボタンを推すたびに走らないようにする  
- [x] コピーデータをストレージに保管  
- [x] ストレージデータの破棄機能  
- [x] スタックしたアイテムリストの表示  
- [x] 総額の表示  
- [x] 個数の変更対応
- [ ] スタックリストの順番の変更機能  
- [ ] UIのラフ絵作成  

## Data Structure
```
--- length: item array length
 |- items: item array [{item},...]
      |- brand
      |- name
      |- num
      |- url
      |- price
      |- qty
```

