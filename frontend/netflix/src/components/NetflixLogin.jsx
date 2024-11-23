import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NetflixLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      localStorage.setItem("token", data.token); // Salva o token no localStorage
      navigate("/catalog");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-black bg-opacity-50 flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef9-659f73e4609c/BR-pt-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="w-32 mx-auto mb-8"
        />
        <h2 className="text-white text-3xl font-bold mb-8">Entrar</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email ou número de telefone"
            className="w-full p-4 bg-gray-700 text-white border-none rounded placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-4 bg-gray-700 text-white border-none rounded placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-bold"
          >
            Entrar
          </button>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="cursor-pointer">
                Lembre-se de mim
              </label>
            </div>
            <a href="#" className="hover:underline">
              Precisa de ajuda?
            </a>
          </div>
        </form>
        <div className="mt-16 text-gray-400">
          <p>
            Novo por aqui?{" "}
            <a href="#" className="text-white hover:underline">
              Assine agora
            </a>
            .
          </p>
          <p className="mt-4 text-sm">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              Saiba mais
            </a>
            .
          </p>
        </div>
      </div>
      {error && alert(`Credenciais inválidas ${error}`)}
    </div>
  );
}
export default NetflixLogin;
