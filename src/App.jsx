// import {Card} from './component/components.jsx'
import { Diffcard } from './component/components.jsx'
import { Carinfo } from './component/carinfo.jsx'

import './App.css'
import { Profile } from './component/profil.jsx'
import { Profile1 } from './component/css_module_practice.jsx'
import { Practice } from './component/st.jsx'
import { Afu } from './component/st.jsx'
import { EventProps } from "./component/react_props.jsx"
import {
  EventPropagation1,
  EventPropagation2,
  EventPropagation3,
} from "./component/event_prop.jsx";
import { Challenge, Challenge1 } from './component/react_state_challeneg.jsx'
import{
Counter,
NameCounter,
StateRendering,
SiblingComp
} from './component/react_state.jsx'

import{Parent} from './component/lifting.jsx'
import { LiftingState } from './component/lifting.jsx'

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
        <EventProps/>
        <EventPropagation1/>
        <EventPropagation2/>
        <EventPropagation3/>
        <Counter/>
        <NameCounter/>
        <StateRendering/>
        <SiblingComp/>
        <Challenge/>
        <Challenge1/>
        <Parent/>
        <LiftingState/>
      </main>
    </div>

  )
}
export default App