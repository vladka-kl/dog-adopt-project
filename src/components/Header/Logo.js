import { Link } from "react-router-dom";
import logo from "../../assets/pictures/page-logo.svg";
export const Logo = () => {
  return (
    <div className="header-logo">
      <Link to="./pages/LandingPage">
        <img src={logo}></img>
      </Link>
    </div>
  );
};
