import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import Loader from "../Loader/Loader";
import css from './App.module.css';


const HomePage = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() => import("../../pages/Register/Register"));
const LoginPage = lazy(() => import("../../pages/Login/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts/Contacts"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={css.container}>
<Layout>
      {isRefreshing ? (
     <Loader/>
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
              }
            />
          </Routes>
        </Suspense>
      )}
      <Toaster />
    </Layout>
    </div>
    
  );
}