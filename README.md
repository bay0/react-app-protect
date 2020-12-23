# react-app-protect

> Password protect a react app.

[![NPM](https://img.shields.io/npm/v/react-app-protect.svg)](https://www.npmjs.com/package/react-app-protect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-app-protect
yarn add react-app-protect
```

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
