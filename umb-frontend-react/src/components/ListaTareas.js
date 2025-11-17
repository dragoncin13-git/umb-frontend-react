export default function ListaTareas({ tareas, onToggle, onDelete }) {
  return (
    <ul>
      {tareas.map(t => (
        <li key={t.id} style={{ marginBottom: 8 }}>
          <span
            onClick={() => onToggle(t)}
            style={{
              textDecoration: t.completada ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {t.titulo}
          </span>

          <button style={{ marginLeft: 10 }} onClick={() => onDelete(t.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
