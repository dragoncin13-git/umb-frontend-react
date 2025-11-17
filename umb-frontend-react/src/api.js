const API_URL = process.env.REACT_APP_API_BASE;

export const loginUser = async (correo, password) => {
  const res = await fetch(`${API_URL}/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password })
  });

  if (!res.ok) throw new Error("Error en el servidor");
  return await res.json();
};
