import { useNavigate } from "react-router-dom";
import Logo from "../assets/github.svg";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <a onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" />
        <h2>Github Profile Finder</h2>
      </a>
    </div>
  );
};

export default Header;
