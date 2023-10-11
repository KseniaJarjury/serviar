import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Registrar from "../pages/Registrar";
import Categoria from "../pages/Categoria";

function AppRoutes() {
    const user = true;
    return (
        <>
            <Router>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/registrar" element={<Registrar />} />
                        <Route path="/categoria" element={user ? <Categoria to="/categoria" /> : <Registrar />} />
                        {/* <Route path="/visitante" element={<Visitante/>}/>
                    <Route path="/oferente" element={<Oferente/>}/>   */}
                    </Routes>
            </Router>
        </>
    )
}

export default AppRoutes