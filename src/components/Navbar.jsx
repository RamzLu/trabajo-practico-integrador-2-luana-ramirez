import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ isAuthenticated, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo o nombre */}
          <Link to="/" className="text-xl font-bold tracking-wide">
            MyApp
          </Link>

          {/* Botón menú responsive */}
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

          {/* Enlaces escritorio */}
          <div className="hidden sm:flex space-x-6 items-center">
            {isAuthenticated ? (
              <>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
                <Link to="/tasks" className="hover:text-gray-200">
                  Tasks
                </Link>
                <Link to="/profile" className="hover:text-gray-200">
                  Profile
                </Link>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-200">
                  Login
                </Link>
                <Link to="/register" className="hover:text-gray-200">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Menú responsive */}
      {menuOpen && (
        <div className="sm:hidden bg-blue-700 px-4 pb-3 space-y-2">
          {isAuthenticated ? (
            <>
              <Link
                to="/"
                className="block py-1 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tasks"
                className="block py-1 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Tasks
              </Link>
              <Link
                to="/profile"
                className="block py-1 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-1 text-red-300 hover:text-red-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block py-1 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block py-1 hover:text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
