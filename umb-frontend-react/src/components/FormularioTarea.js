import { useState } from "react";

export default function FormularioTarea({ onAdd }) {
  const [titulo, setTitulo] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (titulo.trim() === "") return;
    onAdd(titulo);
    setTitulo("");
  };

  return (
    <form onSubmit={enviar}>
      <input 
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Añadir</button>
    </form>
  );
}
