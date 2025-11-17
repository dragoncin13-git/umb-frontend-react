import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>Bienvenido al panel</h1>
        <p>Has iniciado sesión correctamente.</p>
      </div>
    </div>
  );
}

export default Home;
