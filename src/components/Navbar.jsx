import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ isAuthenticated, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold tracking-wide hover:text-gray-200"
          >
            MyApp Luana
          </Link>

          {/* Botón del menú (solo visible en móviles) */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Enlaces del navbar (en escritorio) */}
          <div className="hidden sm:flex space-x-6">
            <Link to="/tasks" className="hover:text-gray-200">
              Tasks
            </Link>
            <Link to="/home" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/profile" className="hover:text-gray-200">
              Profile
            </Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
                <Link to="/register" className="hover:text-gray-200">
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={onLogout}
                className="hover:text-gray-200 focus:outline-none"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menú desplegable (solo en móviles) */}
      {menuOpen && (
        <div className="sm:hidden bg-blue-700 px-4 py-3 space-y-2">
          <Link
            to="/tasks"
            className="block hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Tasks
          </Link>
          <Link
            to="/home"
            className="block hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="block hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="block hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                onLogout();
                setMenuOpen(false);
              }}
              className="block w-full text-left hover:text-gray-200"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
