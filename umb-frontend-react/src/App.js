// src/App.js
import React, { useEffect, useState } from 'react';

const API_BASE = process.env.REACT_APP_API_BASE || 'https://TU_BACKEND.onrender.com';

function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [cargando, setCargando] = useState(false);

  useEffect(() => { fetchTareas(); }, []);

  async function fetchTareas() {
    setCargando(true);
    try {
      const res = await fetch("https://tu_backend.onrender.com/controlador.php"); // o index.php si lo renombraste
      const data = await res.json();
      setTareas(data);
    } catch (err) {
      console.error(err);
      alert('Error al cargar tareas');
    } finally {
      setCargando(false);
    }
  }

  async function handleCrear(e) {
    e.preventDefault();
    if (!titulo.trim()) return;
    try {
      await fetch(`${API_BASE}/controlador.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo })
      });
      setTitulo('');
      fetchTareas();
    } catch (err) { console.error(err); }
  }

  async function toggleCompletada(id, current) {
    try {
      await fetch(`${API_BASE}/controlador.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, completada: !current })
      });
      fetchTareas();
    } catch (err) { console.error(err); }
  }

  async function eliminar(id) {
    try {
      await fetch(`${API_BASE}/controlador.php?id=${id}`, {
        method: 'DELETE'
      });
      fetchTareas();
    } catch (err) { console.error(err); }
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding:'1rem' }}>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleCrear}>
        <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Nueva tarea" />
        <button type="submit">Agregar</button>
      </form>

      {cargando ? <p>Cargando...</p> : (
        <ul>
          {tareas.map(t => (
            <li key={t.id} style={{ display:'flex', gap:10, alignItems:'center' }}>
              <input type="checkbox" checked={t.completada} onChange={() => toggleCompletada(t.id, t.completada)} />
              <span style={{ textDecoration: t.completada ? 'line-through' : 'none' }}>{t.titulo}</span>
              <button onClick={() => eliminar(t.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
