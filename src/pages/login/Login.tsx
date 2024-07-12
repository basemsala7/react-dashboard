import "./login.css";
import image from "../../../public/images.png";
import { useCookies } from "react-cookie";
import { toast } from "react-toast";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);

  const user = {
    email: "admin@dashboard.com",
    password: "admin123",
  };
  const loginFunction = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await fetch(
        "https://dashboard-backend-orpin.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },

          body: JSON.stringify(user),
        }
      );
      if (!res.ok) throw Error();
      const { token } = await res.json();
      setCookie("token", token, { path: "/" });

      console.log(token);
    } catch (error) {
      setLoading(false);
      console.log(error);
      const errorTosat = () => toast.error("some thing error try again");
      errorTosat();
      throw error;
    }
  };

  return (
    <div className="loginContainer">
      {loading && (
        <div className="loginLoader">
          <div className="loader" style={{ left: "48%" }}></div>
        </div>
      )}
      <form action="">
        <img src={image} alt="" />
        <input type="text" value={user.email} />
        <input type="password" value={user.password} />
        <button onClick={loginFunction}>Login</button>
      </form>
    </div>
  );
};

export default Login;
