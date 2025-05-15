import { useEffect, useRef, useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="grid gap-10 absolute grid-cols-2 py-4 lg:py-8 px-5 lg:px-10 items-center">
      <ul className="order-1 lg:order-2 hidden lg:flex items-center gap-6 text-custom-white font-600">
        <li>
          <a
            href="#"
            className="hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            shop
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:underline hover:decoration-2 hover:underline-offset-8"
          >
            contact
          </a>
        </li>
      </ul>
      <img
        src="/icon-hamburger.svg"
        alt="Open menu"
        className="lg:hidden flex cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      />
      {isMenuOpen && (
        <MobileNavigation ref={menuRef} onClose={() => setIsMenuOpen(false)} />
      )}
      <img src="/logo.svg" alt="Logo" className="order-2 lg:order-1" />
    </nav>
  );
}
