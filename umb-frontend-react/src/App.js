import { useEffect, useState } from "react";
import {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea
} from "./api";
import ListaTareas from "./components/ListaTareas";
import FormularioTarea from "./components/FormularioTarea";

export default function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    try {
      const data = await obtenerTareas();
      setTareas(data);
    } catch (err) {
      console.error("Error cargando tareas:", err);
    }
  }

  async function agregar(titulo) {
    await crearTarea(titulo);
    cargar();
  }

  async function toggle(t) {
    await actualizarTarea(t.id, { completada: !t.completada });
    cargar();
  }

  async function borrar(id) {
    await eliminarTarea(id);
    cargar();
  }

  return (
    <div>
      <h1>Tareas</h1>
      <FormularioTarea onAdd={agregar} />
      <ListaTareas tareas={tareas} onToggle={toggle} onDelete={borrar} />
    </div>
  );
}
