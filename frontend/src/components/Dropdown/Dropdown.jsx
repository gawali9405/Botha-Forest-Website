import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ title, items, mobile }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => !mobile && setOpen(true)}
      onMouseLeave={() => !mobile && setOpen(false)}
    >
      <span onClick={() => mobile && setOpen(!open)}>
        {title} {mobile && <span className="arrow">▾</span>}
      </span>

      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        {items.map((item) => (
          <Link key={item.path} to={item.path}>
            {item.label}  
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;