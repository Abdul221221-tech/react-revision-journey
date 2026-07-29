// import {Card} from './component/components.jsx'
import { Diffcard } from './component/components.jsx'
import { Carinfo } from './component/carinfo.jsx'

import './App.css'
import { Profile } from './component/profil.jsx'
import { Profile1 } from './component/css_module_practice.jsx'
import { Practice } from './component/st.jsx'
import { Afu } from './component/st.jsx'
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Netflix Movies</h1>
      </header>
    
      <main>
        <Diffcard/>
        <Carinfo/>
        <Profile/>
        <Profile1/>
        <Practice/>
        <Afu/>
      </main>
    </div>
  )
}
export default App