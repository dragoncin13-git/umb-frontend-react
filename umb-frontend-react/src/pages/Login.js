import React, { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/login.php`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ usuario })
});


      const data = await response.json();

      if (!response.ok) {
        alert("Error: " + data.error);
        return;
      }

      // Guardar sesión simple
      localStorage.setItem("usuario", data.usuario);

      // Redirigir
      window.location.href = "/home";

    } catch (error) {
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{ padding: "10px", width: "200px", marginBottom: "10px" }}
        />

        <br />

        <button
          type="submit"
          style={{ padding: "10px 20px" }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
