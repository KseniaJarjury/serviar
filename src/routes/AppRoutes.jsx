import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from "../pages/Inicio";
import Registrar from "../pages/Registrar";
import Categoria from "../pages/Categoria";
import { AuthContextProvider } from "../context/AuthContext";

function AppRoutes() {
    return (
        <AuthContextProvider>
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Inicio/>}/>
                        <Route path="/registrar" element={<Registrar/>}/>
                        <Route path="/categoria" element={<Categoria/>}/>
                        {/* <Route path="/visitante" element={<Visitante/>}/>
                        <Route path="/oferente" element={<Oferente/>}/>   */}
                    </Routes>
                </Router>
            </>

        </AuthContextProvider>
      
    )
}

export default AppRoutes