import React from 'react'

import Encrypt from 'react-app-protect'
import 'react-app-protect/dist/index.css'

const App = () => {
  return (
    <Encrypt password="test" obfuscate={true} blur={true}>
      <div>I am hidden</div>
    </Encrypt>
  )
}

export default App
