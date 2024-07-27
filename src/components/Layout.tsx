import {FC} from "react";
import Toast from "./Toast.tsx";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Toast />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
