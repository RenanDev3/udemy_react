import React, {useState} from 'react'

import Field from "./components/Field"
import Languages from './components/Languages'
import Translate from './components/Translate'

function App() {
  const [language, setLanguage] = useState('es')
  const [text, setText] = useState('')

  return (
    <div>
      <Field onChange={setText}/>
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>
    </div>
  )
}

export default App