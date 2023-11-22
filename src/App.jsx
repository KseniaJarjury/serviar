import AppRoutes from "./routes/AppRoutes"
import { ServicioProvider } from "./context/ServicioProvider"

function App() {
  return (
    <>
    <ServicioProvider>
      <AppRoutes/>
    </ServicioProvider>
    </>
  )
}

export default App

