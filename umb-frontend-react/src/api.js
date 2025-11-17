const API = process.env.REACT_APP_API_BASE;

export async function obtenerTareas() {
  const res = await fetch(`${API}/controlador.php`);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return res.json();
}

export async function crearTarea(titulo) {
  const res = await fetch(`${API}/controlador.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo })
  });
  return res.json();
}

export async function actualizarTarea(id, campos) {
  const res = await fetch(`${API}/controlador.php`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...campos })
  });
  return res.json();
}

export async function eliminarTarea(id) {
  const res = await fetch(`${API}/controlador.php?id=${id}`, {
    method: "DELETE"
  });
  return res.json();
}
