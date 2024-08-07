import cookies from "./cookies"
import { Navigate } from 'react-router-dom';

const CheckRoute = ({ component: Component, redirectTo = '/' })=>{
    if(!cookies.readCookie()){
        console.log(redirectTo)
        return(
            <Navigate to={redirectTo}/>
        )
    }    
    else {
        console.log(Component)
        return (Component)}
}

export default CheckRoute
