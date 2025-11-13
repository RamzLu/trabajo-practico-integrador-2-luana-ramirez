import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getUser = async () => {
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
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
        {user ? (
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center w-full max-w-md">
            <h2 className="text-3xl font-bold mb-3">
              ¡Bienvenido, {user.name}!
            </h2>
            <p className="text-white/90 text-lg">
              Nos alegra tenerte de vuelta. Accedé a tus tareas desde el menú
              superior.
            </p>
          </div>
        ) : (
          <p className="text-white/80 text-lg">Cargando tu información...</p>
        )}
      </main>
    </>
  );
};
