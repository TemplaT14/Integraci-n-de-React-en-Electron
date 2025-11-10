import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

function App() {

  // --- Lógica Ejercicio 5 ---
  useEffect(() => {
    const mensaje = window.api.saludar("Mundo");
    console.log(mensaje);
  }, []);
  // --- Fin Lógica Ejercicio 5 ---


  // --- Lógica Ejercicio 6 ---
  const handleChangeTitle = () => {
    const nuevoTitulo = "Mi aplicación React + Electron";
    window.electron.ipcRenderer.send('setWindowTitle', nuevoTitulo);
  };
  // --- Fin Lógica Ejercicio 6 ---


  // --- Lógica Ejercicio 7 ---
  const handleBidiComm = async () => {
    const mensajeParaMain = "Este es un mensaje desde el Renderer";
    console.log(`Renderer: Enviando: "${mensajeParaMain}"`);
    
    // Llamamos a la función del preload y ESPERAMOS (await) la respuesta
    const respuesta = await window.api.enviarMensajeBidireccional(mensajeParaMain);
    
    // Mostramos la respuesta del Main en la consola del Renderer (F12)
    console.log(`Renderer: Respuesta recibida: "${respuesta}"`);
  };
  // --- Fin Lógica Ejercicio 7 ---

  return (
    <div className="p-3">
      <h1>Ejercicio 5</h1>
      <p>Revisa la consola (F12) para ver el mensaje del preload.</p>
      <hr />

      <h1>Ejercicio 6</h1>
      <button className="btn btn-primary" onClick={handleChangeTitle}>
        Cambiar Título de la Ventana
      </button>
      <hr />

      {/* --- HTML Ejercicio 7 --- */}
      <h1>Ejercicio 7</h1>
      <button className="btn btn-info" onClick={handleBidiComm}>
        Prueba IPC Bidireccional (Revisa Consolas)
      </button>
    </div>
  );
}

export default App;