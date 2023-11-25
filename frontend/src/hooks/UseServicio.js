import { useContext } from "react";
import ServicioContext from "../context/ServicioProvider";

const UseServicio = () => {
    return useContext(ServicioContext)
}

export default UseServicio;