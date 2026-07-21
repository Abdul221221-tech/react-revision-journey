// import {Card} from './component/components.jsx'
import { Diffcard } from './component/components.jsx'
import { Carinfo } from './component/carinfo.jsx'

import './App.css'
import { Profile } from './component/profil.jsx'

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
      </main>
    </div>
  )
}
export default App