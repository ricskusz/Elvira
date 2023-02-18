import { MenetrendProvider } from "./context/MenetrendContext"
import { TelepulesProvider } from "./context/TelepulesekContext"
import AllomasokInput from "./components/AllomasokInput"
import Main from "./components/Main"
import Footer from "./components/Footer"
function App() {


  return (
    <TelepulesProvider>
       <MenetrendProvider>
        <Main />
        <Footer />
    </MenetrendProvider>
    </TelepulesProvider>
  )
}

export default App
