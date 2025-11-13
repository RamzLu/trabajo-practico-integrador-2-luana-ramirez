import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

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
  console.log(user);
  return (
    <div>
      <h1>Perfil de usuario</h1>
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Nombre: {user.name}</p>
          <p>Apellido: {user.lastname}</p>
        </div>
      )}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};
