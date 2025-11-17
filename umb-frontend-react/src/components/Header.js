import React from "react";
import "./Header.css";

function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="header">
      <h2>Mi Panel</h2>
      <button onClick={logout}>Cerrar sesión</button>
    </header>
  );
}

export default Header;
