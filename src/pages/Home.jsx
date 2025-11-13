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
      <main className="min-h-screen p-6 bg-gray-50 text-center">
        {user && (
          <h2 className="text-3xl font-bold mb-6">bienvenido {user.name}</h2>
        )}
      </main>
    </>
  );
};
