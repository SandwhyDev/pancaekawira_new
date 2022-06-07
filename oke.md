# import css di next

buatlah sebuah file bernama **next.config.js**
lalu masukan syntax berikut :

```javascript
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withSass();
module.exports = withCSS();
```

jangan lupa install package yang dibutuhkan 

```
yarn add @zeit/next-sass @zeit/next-css
atau
npm install @zeit/next-sass @zeit/next-css
```

>Dengan begitu kita tidak perlu lagi membuat className dengan OBJECT
