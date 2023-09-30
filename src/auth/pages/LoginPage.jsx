import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext( AuthContext )

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || "/"

    login( 'Alejandra Arévalo' )
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
