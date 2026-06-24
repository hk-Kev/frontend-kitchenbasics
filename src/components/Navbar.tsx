import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo-info">
          <img src="/logo.png" alt="Our Kithen Logo" id="logo" />
          <p>KitchenBasics</p>
        </div>
        <div className="nav-links">
          <a href="#">Cookware</a>
          <a href="#">Tableware</a>
          <a href="#">Appliances</a>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#" id="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </div>
    </nav>
  );
}
