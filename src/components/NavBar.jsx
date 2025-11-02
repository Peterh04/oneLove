import { useEffect, useState } from "react";
import logo from "../assets/oneLoveClubLogo.png";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navBar ${show ? "navBar--visible" : "navBar--hidden"}`}>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* Regular menu for desktop */}
        <div className="nav-menu desktop">
          <a href="#">Home</a>
          <a href="#">Tables</a>
          <a href="#">Events</a>
          <a href="#">Tickets</a>
          <a href="#">Gallery</a>
          <a href="#">
            Cart(<span>0</span>)
          </a>
          <a href="#">About</a>
        </div>

        <button>BUY TICKETS</button>
      </nav>

      {/* Overlay (for mobile view) */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Sliding Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <a href="#">Home</a>
        <a href="#">Tables</a>
        <a href="#">Events</a>
        <a href="#">Tickets</a>
        <a href="#">Gallery</a>
        <a href="#">
          Cart(<span>0</span>)
        </a>
        <a href="#">About</a>
      </div>
    </>
  );
}
