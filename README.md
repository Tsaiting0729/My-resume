# 履歷使用說明

## 檔案結構
- **resume-data.js** → 你的履歷內容(姓名、學歷、經歷、技能、證照...)
- **index.html** → 版面設計與排版邏輯
- 兩者分開,改內容不會動到版面,改版面不會動到內容。

## 修改內容
打開 `resume-data.js`,直接編輯文字即可,例如:
- 換工作 → 在 `experience` 陣列裡新增一個區塊,格式照抄現有的就好
- 加一條 bullet → 在對應的 `bullets: [...]` 裡新增一行,記得結尾加逗號
- 刪除整個區塊(例如 Projects)→ 把該陣列改成空的 `[]`,版面會自動隱藏該區段

## 修改版面/風格
打開 `index.html`,找到最上面 `:root { ... }` 的區塊:
- `--color-navy`、`--color-accent` 等 → 改顏色
- `--font-display`、`--font-body` → 改字型
- `--page-width`、`--section-gap` → 改版面寬度與間距

改這裡不需要動內容,排版會自動套用到全部區塊。

## 匯出 PDF
1. 用瀏覽器打開 `index.html`(雙擊檔案即可)
2. 點右上角「Download PDF」按鈕,或按 `Ctrl+P` / `Cmd+P`
3. 選擇「另存為 PDF」/ "Save as PDF"

> 注意:`index.html` 和 `resume-data.js` 兩個檔案要放在同一個資料夾,缺一不可。

## 之後想換成 GitHub 風格 / 其他風格?
保留 `resume-data.js` 不變,只要請我重新設計一份新的 `index.html` 即可,
內容不用重打。
