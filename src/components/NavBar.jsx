import { useEffect, useState } from "react";
import logo from "../assets/oneLoveClubLogo.png";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        // if scrolled beyond 200px, hide
        setShow(false);
      } else {
        // otherwise show
        setShow(true);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <>
      <nav className={`navBar ${show ? "navBar--visible" : "navBar--hidden"}`}>
        <div className="nav-identificaation">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <h2>One love</h2>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* Regular menu for desktop */}
        <div className="nav-menu desktop">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Tables</a>
          <a href="#">Events</a>
          <a href="#">Tickets</a>
          <a href="#">Gallery</a>
          <a href="#">
            Cart(<span>0</span>)
          </a>
          <a href="#">About</a>
        </div>
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
        <a href="#">Menu</a>
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
