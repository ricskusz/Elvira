import { MenetrendProvider } from "./context/MenetrendContext"
import { TelepulesProvider } from "./context/TelepulesekContext"
import AllomasokInput from "./components/AllomasokInput"
function App() {


  return (
    <TelepulesProvider>
       <MenetrendProvider>
      <div className="mx-10">
        <AllomasokInput />
      </div>
    </MenetrendProvider>
    </TelepulesProvider>
  )
}

export default App
