import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HeaderEl } from "./Header.styled";

export const Header = () => {
  return (
    <>
    <HeaderEl>
      <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/movies'>Movies</NavLink></li>
        </ul>
      </nav>
    </HeaderEl>
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
