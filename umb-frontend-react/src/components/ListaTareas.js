export default function ListaTareas({ tareas, onToggle, onDelete }) {
  return (
    <ul>
      {tareas.map(t => (
        <li key={t.id}>
          <input 
            type="checkbox"
            checked={t.completada}
            onChange={() => onToggle(t)}
          />
          {t.titulo}
          <button onClick={() => onDelete(t.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}
