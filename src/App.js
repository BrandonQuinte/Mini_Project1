import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-circle"></div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#programas">Programas</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* HEADER */}
      <header className="header" id="inicio">
        <h1>SERVICIO NACIONAL DE APRENDIZAJE</h1>
        <h2>CENTRO DE GESTIÓN DE MERCADOS</h2>
        <h3>BOGOTÁ</h3>
      </header>
      <hr />

      {/* SECCIONES */}
      <main className="sections" id="programas">
        <div className="row">
          <section className="box">ADSO</section>
          <section className="box">REDES DE DATOS</section>
          <section className="box">ANIMACIÓN 3D</section>
        </div>
        <div className="row">
          <section className="box">LOGÍSTICA</section>
          <section className="box">MERCADEO</section>
          <section className="box">SISTEMAS</section>
        </div>
      </main>

      

      <hr />

      {/* FORMULARIO */}
      <div className="form-container" id="contacto">
        <h2>Formulario de contacto</h2>
        <form className="form">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
          />

          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Tu correo"
          />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>

      <hr />

    </div>
  );
}

export default App;
