import "./Header.css";
import { Link } from "react-router-dom";

function Header({ position, isAdmin }) {
  return (
    <header>
      {position.map(({ title, color }, index) => (
        <div className="block_header">
          <div className="store" style={{ backgroundColor: color }}></div>
          <Link to="#" className="text">
            {title}
          </Link>
        </div>
      ))}
      {isAdmin && (
        <div className="block_header">
          <div className="store" style={{ backgroundColor: "black" }}></div>
          <Link to="#" className="text">
            123
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
