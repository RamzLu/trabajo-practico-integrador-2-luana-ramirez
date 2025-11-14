import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const Register = () => {
  const { form, handleChange } = useForm({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  evento.preventDefault(); //evita recargar la pagina
  const handleRegister = async (evento) => {
    try {
      

      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        return alert(data.message);
      }

      alert("¡Usuario registrado exitosamente! Serás redirigido al login.");
      navigate("/login");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Registro de Usuario
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white/40 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={form.lastname}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white/40 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white/40 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white/40 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white/40 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="w-full py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-200"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-white mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="underline font-medium hover:text-indigo-200"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};
