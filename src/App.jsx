import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRoutes from "./routes/AppRoutes";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter} from "react-router-dom";
function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
