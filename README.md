# react-app-protect

> Password protect a react app.

[![NPM](https://img.shields.io/npm/v/react-app-protect.svg)](https://www.npmjs.com/package/react-app-protect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### ✨ [Demo](https://bay0.github.io/ev0-skin-gen/)
###### password: test

## Install

```bash
npm install --save react-app-protect
yarn add react-app-protect
```

> Using [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) to encrypt the password via AES.
> Storing the cipher in the localStorage.

## Props
| Name             | Type    | Default                          | Description                     |
|------------------|---------|----------------------------------|---------------------------------|
| password         | String  |                                  | Password for the react app      |
| blur             | Boolean | false                            | Blur the content                |
| title            | String  | This page is password protected. | Title of the login box          |
| inputPlaceholder | String  | Password                         | Placeholder for the input field  |
| buttonLabel      | String  | Submit                           | Label used for the button       |
| wrapperClass     | String  |                                  | CSS class to wrap               |

## Usage

```jsx
import React, { Component } from 'react'

import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

class App extends Component {
  render() {
    return (
      <Protect password="test">
        <div>Content</div>
      </Protect>
    )
  }
}
```
## License

MIT © [bay0](https://github.com/bay0)
