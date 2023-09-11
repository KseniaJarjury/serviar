import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";

function AppRoutes() {
    return (
      <>
      <Router>
          <Routes>
              <Route path="/" element={<Inicio/>}/>
              {/* <Route path="/categoria" element={<Categoria/>}/>
              <Route path="/visitante" element={<Visitante/>}/>
              <Route path="/oferente" element={<Oferente/>}/>   */}
          </Routes>
      </Router>
      </>
    )
}

export default AppRoutes