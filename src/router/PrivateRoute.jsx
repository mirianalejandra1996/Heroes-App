import { useContext } from "react";
import { AuthContext } from "../auth/context";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation()

  console.log({pathname, search})

    // Podemos dejar un useMemo y un useEffect
    const lastPath = pathname + search

    localStorage.setItem('lastPath', lastPath)
    console.log('re rendered')


  return logged ? children : <Navigate to="/login" replace={true} />;
};
