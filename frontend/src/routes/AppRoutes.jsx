import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Registrar from "../pages/Registrar";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil"
import Oferente from "../pages/Oferente"
import Categoria from "../pages/Categoria";
import Error from "../pages/Error";
import React from "react";
import Navbar from '../components/Navbar/Navbar';

function AppRoutes() {
    return (
        <>
            <Router>
            <Navbar/>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/registrar" element={<Registrar />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/user" element={<Perfil />} />
                        <Route path="/categoria" element={<Categoria/> } />
                        <Route path="/perfil/:Id_Usuario" element={<Perfil/>}/>  
                        <Route path="/oferente/:Id_Usuario" element={<Oferente/>}/> 
                        <Route path="*" element={<Error/>}/>
                    </Routes>
            </Router>
        </>
    )
}

export default AppRoutes