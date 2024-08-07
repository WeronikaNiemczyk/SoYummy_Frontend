import cookies from "./cookies"
import { Navigate } from 'react-router-dom';

const CheckRoute = ({ component: Component, redirectTo = '/' })=>{
    if(!cookies.readCookie()){
        return(
            <Navigate to={redirectTo}/>
        )
    }    
    else {
        return (Component)}
}

export default CheckRoute
