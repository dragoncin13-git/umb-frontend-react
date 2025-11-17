import ListaTareas from "../components/ListaTareas";
import FormularioTarea from "../components/FormularioTarea";

export default function Home({ tareas, onAdd, onToggle, onDelete }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Tareas</h1>

      <FormularioTarea onAdd={onAdd} />

      <ListaTareas
        tareas={tareas}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}
