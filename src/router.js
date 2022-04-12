import { Routes, Route, Navigate } from "react-router-dom"
import ChangePass from "./pages/changePass/changePass";
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Home from "./pages/Home/Home";

const Router = ({loggined}) => {

    return (
        <Routes>
            {
                loggined ? (
                    <>
                        <Route path="/change" element={<ChangePass/>} />
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </>
                    )
                :   (<>
                        <Route path="/registration" element={<Registration/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </>)
            }
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default Router