
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';

function App() {
  // Lógica Ejercicio 5 
  useEffect(() => {
    const mensaje = window.api.saludar("Mundo");
    console.log(mensaje);
  }, []);
  

  // Lógica Ejercicio 6 
  const handleChangeTitle = () => {
    const nuevoTitulo = "Mi aplicación React + Electron"; //

    // Enviamos el mensaje 'setWindowTitle' al proceso Main
    // (Esto es comunicación unidireccional)
    window.electron.ipcRenderer.send('setWindowTitle', nuevoTitulo); //
  };
  

  return (
    <div className="p-3">
      <h1>Ejercicio 5</h1>
      <p>Revisa la consola (F12) para ver el mensaje del preload.</p>

      <hr />

      <h1>Ejercicio 6</h1>
      <button className="btn btn-primary" onClick={handleChangeTitle}>
        Cambiar Título de la Ventana
      </button>
    </div>
  );
}

export default App;