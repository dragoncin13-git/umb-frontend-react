import { useState } from "react";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");

  function enviar(e) {
    e.preventDefault();
    if (usuario.trim() === "") return;
    onLogin(usuario);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Iniciar sesión</h2>

      <form onSubmit={enviar}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
