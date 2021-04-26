# Unnotech Frontend Engineer 徵才小專案

這是一個小型的徵才專案，會需要你使用 React Native 和 API 所提供的資料，依照 wireframe 來完成頁面。

## 說明

- 請參考 **wireframe** 及 **頁面需求** 實作此專案
- 請使用 React Native, React Navigation 進行開發
- 請勿使用 Expo
- 使用 git / GitHub 來做整個專案的版本控管
- 請將小專案上傳到 GitHub， **不接受其它方式或信件夾帶壓縮檔的形式繳交作業**
- 提供一份 README 文件說明：
  - 我們該如何執行你完成的專案
  - 專案的架構、邏輯說明
  - 你對於所有使用到的第三方 library 的理解，以及為何使用它
  - 在這份專案中你遇到的困難、問題，以及解決的方法

## 加分建議

- 程式的可讀性與可維護性
- 使用 Redux
- 使用 tailwind css
- 任何你覺得可以讓網頁變得更有趣或是很酷的事情

## 頁面需求

- 電腦手機呈現的 UI 相同，請依照螢幕尺寸延展寬度
- 整個專案會需要兩個頁面
  - Book List Page (網址: `/books`)
  - Book Detail Page (網址: `/books/:bookId`)
- "Book List" 上的元素我們稱為 "Book Card"，在 "Book List" 中由左到右由上到下排列
- "Book Card" 必須包含書名以及作者
- "Book Card" 連結會連到單一 Book 的 "Book Detail Page"
- 當在 "Book List Page" 時要將現在所選中的 "Book Card" 用不同的顏色或陰影標示出來，且 Header 有新增書本的按鈕可以點擊進到新增頁面。
- 新增書籍頁面有 名稱(title)、作者(author)、備註(description) 三個欄位，名稱與作者為必填欄位，按下新增按鈕並檢核通過後即可新增書本 (API: `POST https://fe-interview-api.unnotech.com/api/book/`)
- "Book Detail Page" 會顯示 Book 的author、title 與 description (API: `GET https://fe-interview-api.unnotech.com/api/book/:bookId/`)
- "Book Detail Page" 右上方有一個修改按鈕，按下按鈕後，會進到修改頁面，修改頁面 有 名稱(title)、作者(author)、備註(description) 三個欄位，名稱與作者為必填欄位，按下修改按鈕並檢核通過後即可修改書本 (API: `PATCH https://fe-interview-api.unnotech.com/api/book/:bookId/`)

## Wireframe

- 列表
![](assets/列表.png)

- 詳情
![](assets/詳情.png)

- 新增
![](assets/新增.png)

- 修改
![](assets/修改.png)

## 最後

當你完成後，請將你的 GitHub repo 連結 e-mail 給我們。

如果過程中你有任何問題，不論是看不懂我們所寫的文件，或是對於我們提供的 API 有疑問，都歡迎直接 e-mail 和我們討論。

## 我們所提供的 API

### List Books [GET] `https://fe-interview-api.unnotech.com/api/book/`

**Request**

```bash
curl -H "Accept: application/json" -H "Content-Type: application/json" -X GET https://fe-interview-api.unnotech.com/api/book/
```

**Response 200**

```js
[
  {
    "id": 1,
    "author": "Laurence Moroney",
    "title": "從程式員到 AI 專家｜寫給程式員的人工智慧與機器學習指南",
    "description": "如果你想從程式員轉職為AI專家，本書是理想的起點。本書來自Laurence Moroney的成功AI課程，將會帶著你親自動手寫程式，讓你充滿信心地學習重要的主題，你要做的，只是用Python和它的資料表示法及陣列處理法來做實驗。  你會學到如何實作機器學習最常見的場景，包括電腦視覺、自然語言處理(NLP)，以及在web、行動設備、雲端與嵌入式等執行環境中建立序列模型。大多數的機器學習書籍在一開始都會展示大量且令人生畏的高等數學，但這本書提供實用的課程，直接帶你編寫實用的程式。",
    "created_at": "2021-04-26T02:34:17.303484Z",
    "updated_at": "2021-04-26T02:34:17.303514Z"
  },
  // ...
]
```

### Single Book [GET] `https://fe-interview-api.unnotech.com/api/book/:bookId/`

**Request**

```bash
curl -H "Accept: application/json" -H "Content-Type: application/json" -X GET https://fe-interview-api.unnotech.com/api/book/1/
```

**Response 200**

```js
{
  "id": 1,
  "author": "Laurence Moroney",
  "title": "從程式員到 AI 專家｜寫給程式員的人工智慧與機器學習指南",
  "description": "如果你想從程式員轉職為AI專家，本書是理想的起點。本書來自Laurence Moroney的成功AI課程，將會帶著你親自動手寫程式，讓你充滿信心地學習重要的主題，你要做的，只是用Python和它的資料表示法及陣列處理法來做實驗。  你會學到如何實作機器學習最常見的場景，包括電腦視覺、自然語言處理(NLP)，以及在web、行動設備、雲端與嵌入式等執行環境中建立序列模型。大多數的機器學習書籍在一開始都會展示大量且令人生畏的高等數學，但這本書提供實用的課程，直接帶你編寫實用的程式。",
  "created_at": "2021-04-26T02:34:17.303484Z",
  "updated_at": "2021-04-26T02:34:17.303514Z"
}
```

### Patch Book Detail [Patch] `https://fe-interview-api.unnotech.com/api/book/:bookId/`

**Request**

```bash
curl -X PATCH -H "Content-Type: application/json" -d '{"author": "Moroney"}' "https://fe-interview-api.unnotech.com/api/book/1"
```

**Response 200**

```js
{
  "id": 1,
  "author": "Moroney",
  "title": "從程式員到 AI 專家｜寫給程式員的人工智慧與機器學習指南",
  "description": "如果你想從程式員轉職為AI專家，本書是理想的起點。本書來自Laurence Moroney的成功AI課程，將會帶著你親自動手寫程式，讓你充滿信心地學習重要的主題，你要做的，只是用Python和它的資料表示法及陣列處理法來做實驗。  你會學到如何實作機器學習最常見的場景，包括電腦視覺、自然語言處理(NLP)，以及在web、行動設備、雲端與嵌入式等執行環境中建立序列模型。大多數的機器學習書籍在一開始都會展示大量且令人生畏的高等數學，但這本書提供實用的課程，直接帶你編寫實用的程式。",
  "created_at": "2021-04-26T02:34:17.303484Z",
  "updated_at": "2021-04-26T02:34:17.303514Z"
}
```

### Add Book [POST] `https://fe-interview-api.unnotech.com/api/book/`

**Request**

```bash
curl -X POST --data "author=TEST&title=New Book&description=TEST" https://fe-interview-api.unnotech.com/api/book/
```

**Response 200**

```js
{
  "id": 2,
  "author": "TEST",
  "title": "New Book",
  "description": "TEST",
  "created_at": "2021-04-26T02:34:17.303484Z",
  "updated_at": "2021-04-26T02:34:17.303514Z"
}
```

### Delete Book [Delete] `https://fe-interview-api.unnotech.com/api/book/`

**Request**

```bash
curl -X "DELETE" https://fe-interview-api.unnotech.com/api/book/2/
```
