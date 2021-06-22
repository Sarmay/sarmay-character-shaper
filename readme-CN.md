# @Sarmay/Character-Shaper

## [English](https://github.com/Sarmay/sarmay-character-shaper#readme) | 简体中文

### 这是一个哈萨克语阿拉伯文字字符定型器，辅助开发者在文字混乱的区域修正文字，常用于PhotoShop，PR等软件上正常输入哈萨克文字；也可以用在nodejs图片合成

[![npm version](https://img.shields.io/npm/v/@sarmay/character-shaper.svg?style=flat-square)](https://www.npmjs.org/package/@sarmay/character-shaper)
[![Build Status](https://www.travis-ci.com/Sarmay/sarmay-character-shaper.svg?branch=main)](https://www.travis-ci.com/Sarmay/sarmay-character-shaper)    [![Coverage Status](https://coveralls.io/repos/github/Sarmay/sarmay-character-shaper/badge.svg?branch=main)](https://coveralls.io/github/Sarmay/sarmay-character-shaper?branch=main)   [![install size](https://packagephobia.now.sh/badge?p=@sarmay/character-shaper)](https://packagephobia.now.sh/result?p=@sarmay/character-shaper)
[![GitHub issues](https://img.shields.io/github/issues/Sarmay/sarmay-character-shaper)](https://github.com/Sarmay/sarmay-character-shaper/issues)   [![GitHub forks](https://img.shields.io/github/forks/Sarmay/sarmay-character-shaper)](https://github.com/Sarmay/sarmay-character-shaper/network)   [![GitHub stars](https://img.shields.io/github/stars/Sarmay/sarmay-character-shaper)](https://github.com/Sarmay/sarmay-character-shaper/stargazers)


# 安装

### 使用 npm:

```
$ npm install @sarmay/character-shaper
```

### 使用 yarn:

```
$ yarn add @sarmay/character-shaper
```

### 使用 jsDelivr CDN:

```
<script src="https://cdn.jsdelivr.net/npm/@sarmay/character-shaper/dist/index.min.js"></script>
```
### 使用 unpkg CDN:

```
<script src="https://unpkg.com/@sarmay/character-shaper/dist/index.min.js"></script>
```

# 使用

### 参数:  `<String>`

```
新疆哈萨克-阿拉伯文文字
```


### 用于 Node

```
const shaper = require('@sarmay/character-shaper')
const value = shaper('سالەم سارماي')
console.log(value)
```

### 用于 Vue
-    提示: React / Angular  用法一样

```
<template>
  <div>
    <textarea v-model="value" name="sarmay-ime" id="sarmay-ime" cols="30" rows="10" @keydown="keydownHandel"></textarea>
    <div>{{newValue}}</div>
  </div>
</template>
<script>
  import webIME from '@sarmay/web-ime'
  import characterShaper from '@sarmay/character-shaper'
  export default {
  data() {
    return {
      value: '',
      newValue: ''
    }
  },

  methods: {
    keydownHandel(event) {
      const inputValue = webIME('kz', event)
      this.newValue = characterShaper(inputValue)
    }
  }
}
</script>
```
### 用于 Html script

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>@Sarmay/character-shaper</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--  load from unpkg -->
    <script src="https://unpkg.com/@sarmay/web-ime/dist/index.min.js"></script>
    <script src="https://unpkg.com/@sarmay/character-shaper/dist/index.min.js"></script>
    <!--  or load from  jsdelivr
      <script src="https://cdn.jsdelivr.net/npm/@sarmay/web-ime/dist/index.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@sarmay/character-shaper/dist/index.min.js"></script>
    -->
  </head>
  <body>
    <div>
      <textarea name="values" id="values" cols="50" rows="10"></textarea>
      <div id="show"></div>
    </div>
    <script>
      var values = document.getElementById('values');
      var show = document.getElementById('show');
      values.addEventListener("keydown", function(event) {
         var newValue = sarmayIme('kz', event);
         show.innerText = sarmayCharacterShaper(newValue)
      });
    </script>
  </body>
</html>
```

## License

[MIT](LICENSE)