import { useEffect, useState } from "react";
import { API_URL } from "./config";

function App() {
  const [tareas, setTareas] = useState([]);

  const fetchTareas = async () => {
    try {
      const res = await fetch(`${API_URL}/controlador.php`);
      const data = await res.json();
      setTareas(data);
    } catch (error) {
      console.error("Error cargando tareas:", error);
    }
  };

  useEffect(() => {
    fetchTareas();
  }, []);

  return (
    <div>
      <h1>Tareas</h1>
      {tareas.map((t) => (
        <p key={t.id}>{t.nombre}</p>
      ))}
    </div>
  );
}

export default App;
