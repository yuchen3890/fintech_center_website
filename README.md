# Getting Started with fintech_center_website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The visual layout was created with Chakra UI component library (https://v2.chakra-ui.com/).  

## Commands
Before running scripts below, please install npm and node on your computer, and make sure the versions are the same as those written in `package.json`. 
In the project directory, you can run:
### `npm install`
Packages (with the predefined version) written in package.json will be installed, which will be stored in a directory named `node_modules`.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Structures
```
/Public
  /activity
  /report
  (other data...)
```
- `Public` can be viewed as a static database storing files (.jpg, .png, .pdf, etc).
- `activity` and `report` folders store files especially for the activity and report pages, respectively.

```
/src
  /Activities
  /Components
  /FinBuss
  /FinLaw
  /Fintech
  /Industry
  /Pages
  /App.css
  /App.js
  /App.test.js
  /index.css
  /index.js
  (other files...)
```
- `index.js`: the root file that the browser renders.
- `App.js`: the routing path and the corresponding element to render is defined in this file.

| Folder | 頁面 |
| --- | --- |
| `Fintech` | 金融科技組 |
| `FinBuss` | 金融業務組 |
| `FinLaw` | 金融法律組 |
| `Industry` | 產學合作組 |
- Each folder contains introduction and members info.

```
/Pages
  /Activity.js
  /Chief.js
  /Contact.js
  /HomePage.js
  /Organization.js
  /PersonalPage.js
  /Report.js
  /Research.js
```
| File | 頁面 |
| --- | --- |
| `HomePage.js` | 中心簡介 |
| `Organization.js` | 組織成員 |
| `Report.js` | 各組研究方向 |
| `Activity.js` | 活動快訊 |
| `Research.js` | 相關研究 |
| `Contact.js` | 聯絡我們 |
| `Chief.js` | 歷屆主任 |
- `PersonalPage.js`: pages for each organization member.

```
/Acitivies
  /event.js
  /eventIntro_XX.js
  ...
```
- event.js: render all events.
- eventIntro_XX.js: detailed information (page) of each event.

```
/Components
  /NavBar.js
  /Footer.js
  /xxxCard.js
  /info_all_xxx.js
```
- NavBar.js: Define url of each NavBar component.
- Footer.js: Including lab info and logo.
- xxxCard.js: template of listing info of xxx (member, assistant and report).
- info_all_xxx.js: information of xxx (activies, groups, members and reports). Add new information here and render them in the coresponding pages using variables.


## Deploy to server
Please refer to document "軟體架構/金融科技中心網站".
