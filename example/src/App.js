import React from 'react'

import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

const App = () => {
  return (
    <Protect password="test" obfuscate={true} blur={true}>
      <div>I am hidden</div>
    </Protect>
  )
}

export default App
