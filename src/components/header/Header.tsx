import "./header.css";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../../public/logo.svg";
import adminAvatar from "../../../public/pexels-photo-11038549.jpeg";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>dashboard</span>
      </div>

      <div className="iconsWraper">
        <IoIosSearch />
        <div className="notificationWraper">
          <IoNotificationsOutline />
          <span>1</span>
        </div>
        <div className="avaterWraper">
          <img src={adminAvatar} alt="avater" width={25} height={25} />
          <span>Admin</span>
        </div>
        <IoSettingsOutline />
      </div>
    </header>
  );
};

export default Header;
