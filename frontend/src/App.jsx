import AppRoutes from "./routes/AppRoutes"
import { ServicioProvider } from "./context/ServicioProvider"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <ServicioProvider>
      <AppRoutes/>
    </ServicioProvider>
    </>
  )
}

export default App

