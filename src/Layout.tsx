import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import { ToastContainer } from "react-toast";
import { useCookies } from "react-cookie";
import Login from "./pages/login/Login";

const Layout = () => {
  const [cookies, setCookie] = useCookies(["token"]);

  return (
    <>
      <ToastContainer position={"top-center"} />
      {cookies.token ? (
        <>
          <Header />
          <div className="mainContainer">
            <Nav />
            <div className="view">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Layout;
