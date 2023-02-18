import { MenetrendProvider } from "./context/MenetrendContext"
import { TelepulesProvider } from "./context/TelepulesekContext"
import AllomasokInput from "./components/AllomasokInput"
import Kezdoadatok from "./components/Kezdoadatok"
import Main from "./components/Main"
function App() {


  return (
    <TelepulesProvider>
       <MenetrendProvider>
        <AllomasokInput />
        <Main />
    </MenetrendProvider>
    </TelepulesProvider>
  )
}

export default App
