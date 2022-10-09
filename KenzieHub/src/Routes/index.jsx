import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

function RoutesMenu() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<Home/>}/>
        </Routes>
        
    )

}

export default RoutesMenu
