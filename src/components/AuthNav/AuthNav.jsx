import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};
export default function AuthNav() {
    return (
        <div>
            <NavLink className={makeLinkClass}  to="/register">
                Register
            </NavLink>
            <NavLink className={makeLinkClass} to="/login">
                Log In
            </NavLink>
        </div>
    );
}