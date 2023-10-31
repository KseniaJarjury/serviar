//import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registrar from "./pages/Registrar";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Oferente from "./pages/Oferente";
import Categoria from "./pages/Categoria";

function App() {
  const user = true;
  return (
      <Router>
              <Routes>
                  <Route path="/" element={<Inicio />} />
                  <Route path="/registrar" element={<Registrar />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/user" element={<Perfil />} />
                  <Route path="/categoria" element={user ? <Categoria to="/categoria" /> : <Registrar />} />
                  <Route path="/perfil" element={<Perfil/>}/>  
                  <Route path="/oferente" element={<Oferente/>}/>  
              </Routes>
      </Router>
  )
}

export default App;
