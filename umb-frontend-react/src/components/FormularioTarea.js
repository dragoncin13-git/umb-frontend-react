import { useState } from "react";

export default function FormularioTarea({ onAdd }) {
  const [titulo, setTitulo] = useState("");

  function enviar(e) {
    e.preventDefault();
    if (titulo.trim() === "") return;
    onAdd(titulo);
    setTitulo("");
  }

  return (
    <form onSubmit={enviar} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
