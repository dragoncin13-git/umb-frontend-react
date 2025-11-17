fetch(`${API_URL}/controlador.php`)

export async function loginRequest(usuario) {
    const response = await fetch(`${API_URL}/login.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario })
    });

    return response.json();
}
