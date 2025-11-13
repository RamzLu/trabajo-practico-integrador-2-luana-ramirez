import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Profile = () => {
  const [user, setUser] = useState(null); //estado para el usuario
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Error fetch profile");
      }
      const data = await response.json();
      console.log(data);
      setUser(data.user);
    } catch (error) {
      console.log(error);
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        credentials: "include",
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Error al hacer logout");
      }
      alert("Sesion cerrada");
      navigate("/login");
    } catch (error) {
      console.log(error);
      return alert("Error del catch");
    }
  };

  if (isLoading) {
    <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-6">
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md text-white text-center">
          <h1 className="text-3xl font-bold mb-6">Perfil de Usuario</h1>

          {user ? (
            <div className="space-y-4 text-lg">
              <p>
                <span className="font-semibold">ID:</span> {user.id}
              </p>
              <p>
                <span className="font-semibold"> Nombre:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold"> Apellido:</span>{" "}
                {user.lastname}
              </p>
            </div>
          ) : (
            <p className="text-white/80">Cargando información del usuario...</p>
          )}

          <button
            onClick={handleLogout}
            className="mt-8 w-full py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-200"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
