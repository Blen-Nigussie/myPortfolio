import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';
import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import logo from '/images/logos/My_logo.png'; // Import logo

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); // Re-run effect if isOpen changes

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            <img src={logo} alt="Blen | Nigussie Logo" className="w-20 h-auto" />
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? close : menu}
              alt={isOpen ? 'Close menu' : 'Open menu'}
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`nav-sidebar transition-max-height duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden sm:hidden`}
      >
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;