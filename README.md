# Alpha-Shop
---
### 專案業面連結
https://jj280385.github.io/Alpha-Shop/


### 專案桌機版畫面
![image](src/images/Alpha%20Shop%20Web%20Photo.png)
### 專案行動版畫面
![image](src/images/Alpha%20Shop%20Mobile%20Photo.png)

---
## 專案介紹
此專案為Alpha Camp學期三A1切版挑戰，使用Sass打造出Alpha Shop購物車介面並以webpack打包，介面以375px為分界點，共分為五大區塊：導覽列、stepper、form、購物籃、footer(建構中)。

---
## 功能描述
1. 導覽列：在小螢幕會收縮成漢堡排。
2. stepper：標示「寄送地址、運送方式、付款資訊」三個操作階段。
3. form：「寄送地址、運送方式、付款資訊」各自有對應表單，表單下方有「上一步」和「下一步」按鈕可切換，切換的時候僅部分板塊被抽換，不會有頁面轉跳情形產生。
4. 購物籃：不論切到哪個操作階段，都會顯示有兩件商品的照片、單價、用費和總價，每項商品有「 ＋ 」和「 − 」按鈕可增減商品數量。
5. footer：在小螢幕不顯示。 (建構中)

--- 
## 開發工具 
1. SASS
2. Webpack
3. Java Script

---
## 專案安裝與執行步驟
1. 打開終端機並Clone此專案到本地電腦。
``` bash 
git clone https://github.com/jj280385/Alpha-Shop
```

2.使用終端機進入此專案資料夾：alpha_shop。
``` bash 
cd Alpha-Shop
```

3.使用終端機安裝webpack。
``` bash 
npm install webpack webpack-cli
```

4.啟動webpack。
``` bash 
npm run build
```

5.打開任一瀏覽器輸入此網址即可瀏覽網頁。
``` bash 
http://127.0.0.1:5500/index.html
```

---
## 待更新功能
1. footer建構

---
## 專案開發人員
[ZORA CHEN](https://medium.com/@jj280385)


