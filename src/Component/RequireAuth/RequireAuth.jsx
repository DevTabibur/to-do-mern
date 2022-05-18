import {useAuthState} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
// import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';

const RequireAuth = ({children}) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // if(loading){
    //     return <SpinnerLoader/>
    // }

    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={{from:location}} replace />
    }
}

export default RequireAuth;