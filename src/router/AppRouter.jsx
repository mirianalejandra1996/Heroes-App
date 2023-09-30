import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage /> 
            </PublicRoute>
          }
        />

        {/* Es otra forma de resolver las rutas */}
          {/* <Route
          path="/login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        /> */}

        {/* PrivateRoute */}
        {/* * "/*"" es para hacer que cualquier ruta que no sea login pase por HeroesRoutes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path="login" element={<LoginPage />} /> */}

        {/* <Route path="/*" element={<HeroesRoutes/>}/> */}

        {/* Otra forma de solucionarlo */}
        {/* <Route path="/heroes" element={<HeroesRoutes/>}/> */}
        {/* <Route path="/*" element={<Navigate to="/heroes"/>}/> */}
      </Routes>
    </>
  );
};
