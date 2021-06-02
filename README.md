# react-app-protect

> Password protect a react app.

> Simple password field, not a replacment for basic auth.

> Not secure at all.

[![NPM](https://img.shields.io/npm/v/react-app-protect.svg)](https://www.npmjs.com/package/react-app-protect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### ✨ [Demo](https://bay0.github.io/react-app-protect/)

###### password: test

## Install

```bash
npm install --save react-app-protect
yarn add react-app-protect
```

> Using [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) to encrypt the password via AES.
> Storing the cipher in the localStorage.
> Checking if the stored cipher is valid against the sha512 hash.

## Props

| Name             | Type    | Default                          | Description                     |
| ---------------- | ------- | -------------------------------- | ------------------------------- |
| sha512           | String  |                                  | SHA 512 Hash app                |
| blur             | Boolean | false                            | Blur the content                |
| boxTitle         | String  | This page is password protected. | Title of the login box          |
| inputPlaceholder | String  | Password                         | Placeholder for the input field |
| buttonLabel      | String  | Submit                           | Label used for the button       |
| styles           | Object  |                                  | Styles                          |

## Usage

```jsx
import React, { Component } from 'react'

import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

class App extends Component {
  render() {
    return (
      <Protect sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF'>
        <div>Content</div>
      </Protect>
    )
  }
}
```

## License

MIT © [bay0](https://github.com/bay0)
