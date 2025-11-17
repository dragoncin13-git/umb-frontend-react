import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea
} from "./api";

import Login from "./pages/Login";
import Home from "./pages/Home";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    if (usuario) cargar();
  }, [usuario]);

  async function cargar() {
    try {
      const data = await obtenerTareas();
      setTareas(data);
    } catch (e) {
      console.error("Error cargando tareas:", e);
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
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login onLogin={setUsuario} />} />

        {/* Página principal */}
        <Route
          path="/"
          element={
            usuario ? (
              <Home
                tareas={tareas}
                onAdd={agregar}
                onToggle={toggle}
                onDelete={borrar}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Si no existe la ruta */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
