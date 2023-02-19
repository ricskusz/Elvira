import { MenetrendProvider } from "./context/MenetrendContext"
import { TelepulesProvider } from "./context/TelepulesekContext"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <div>
      <TelepulesProvider>
        <MenetrendProvider>
          <Main />
          <Footer />
        </MenetrendProvider>
      </TelepulesProvider>
      <ToastContainer />
    </div>
  )
}

export default App
