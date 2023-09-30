// import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

// puedo escribir crtl + p como atajo para llegar más rapido a algún archivo con el buscador

export const Navbar = () => {
    
    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    
    const onLogout = () => {
        logout();

        // en este caso no es necesario la redirección por la protección de rutas
        navigate("/login", { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">
            Asociaciones
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">
            <NavLink
                // className={`nav-item nav-link ${location?.pathname === '/marvel' ? 'active' : ''}`}
                className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/marvel"
            >
                Marvel
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/dc"
            >
                DC
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/search"
            >
                Search
            </NavLink>
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-primary">{user?.name}</span>

            <button onClick={onLogout} className="nav-item nav-link btn">
                Logout
            </button>
            </ul>
        </div>
        </nav>
    );
};
