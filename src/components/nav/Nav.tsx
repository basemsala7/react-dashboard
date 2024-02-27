import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Nav = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigtae = useNavigate();

  return (
    <nav>
      <div className="linksItemWraper">
        <Link to="/">
          <AiOutlineHome />
          <span>Home</span>
        </Link>
      </div>

      <div className="linksItemWraper">
        <Link to="/users">
          <LuUsers />
          <span>Users</span>
        </Link>
      </div>
      <div className="linksItemWraper">
        <Link to="/products">
          <AiOutlineShoppingCart />
          <span>products</span>
        </Link>
      </div>
      <div className="linksItemWraper">
        <Link to="/">
          <IoStatsChart />
          <span>anaylsis</span>
        </Link>
      </div>
      <div className="linksItemWraper">
        <IoSettingsOutline />
        <span>Settings</span>
      </div>
      <div className="linksItemWraper">
        <FaRegUser />
        <span>profile</span>
      </div>
      <div
        className="linksItemWraper"
        onClick={() => {
          removeCookie("token", { path: "/", domain: "localhost" });
        }}
      >
        <MdLogout />
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default Nav;
