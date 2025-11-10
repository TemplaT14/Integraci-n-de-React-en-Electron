# Proyecto de Ejercicios: React y Electron IPC

Este proyecto implementa una serie de ejercicios prácticos basados en los apuntes de la UD6. [cite_start]El objetivo es practicar los fundamentos de React y la comunicación entre procesos (IPC) en un entorno de Electron + Vite[cite: 155].

El proyecto está dividido en dos grandes bloques, reflejando el enfoque del examen:
1.  **Fundamentos de React (Ejercicios 1-4):** Creación de componentes, manejo de `props` y `estado`.
2.  **Integración con Electron (Ejercicios 5-7):** Comunicación entre el proceso Renderer (React) y el proceso Main (Electron).

---

## 🚀 Cómo Ejecutar

1.  **Instalar dependencias** (solo la primera vez):
    ```bash
    npm install
    npm install bootstrap bootstrap-icons
    ```

2.  **Arrancar la aplicación** (en modo desarrollo):
    ```bash
    npm run dev
    ```

---

## 🧠 Conceptos Clave Practicados

Esta sección resume lo que se ha aprendido y es la base para el examen.

### 1. Fundamentos de React (Ej. 1-4)

* [cite_start]**Componentes Funcionales:** Creación de componentes en archivos `.jsx` separados (ej. `DatosPersonales.jsx`) [cite: 509-510].
* [cite_start]**Props (Propiedades):** Pasar datos de un componente padre a uno hijo (ej. `SaludoPersonalizado` recibiendo `nombre` y `hora`)[cite: 532, 535].
* **Estado (`useState`):** Es la "memoria" del componente. [cite_start]Lo usamos para crear los botones interactivos del Ejercicio 3, guardando si estaba `isConectado` o no[cite: 716, 740, 760].
* [cite_start]**Eventos (`onClick`):** Hacer que los botones respondan al clic del usuario para cambiar el estado[cite: 675, 693].
* **Renderizado Condicional:** Cambiar la apariencia de un componente (clases CSS, texto) basándose en una variable de estado o una prop (ej. el color verde/rojo de `BotonEstado`).
* [cite_start]**Renderizado de Listas (`.map()`):** Usar `.map()` para transformar un array de datos (ej. `misTareas`) en una lista de elementos HTML (`<li>`), asignando siempre una `key` única[cite: 857, 866, 870].

### 2. Comunicación IPC de Electron (Ej. 5-7)

Esta es la parte más importante de la integración, permitiendo que React (la "cara") hable con Electron (el "cerebro").

* **Ejercicio 5: Preload API (Preload → Renderer)**
    * [cite_start]**Método:** Se añaden funciones al objeto `api` en `src/preload/index.js`[cite: 222].
    * [cite_start]**Uso:** `contextBridge` expone de forma segura esas funciones a `window.api` para que `App.jsx` pueda llamarlas (ej. `window.api.saludar()`)[cite: 216].

* **Ejercicio 6: Unidireccional (Renderer → Main)**
    * **Método:** Comunicación "enviar y olvidar".
    * [cite_start]**Renderer (`App.jsx`):** Envía un mensaje con `window.electron.ipcRenderer.send('canal', datos)`[cite: 221].
    * **Main (`main/index.js`):** Escucha ese mensaje con `ipcMain.on('canal', (event, datos) => { ... })`.
    * **Ejemplo:** Cambiar el título de la ventana.

* **Ejercicio 7: Bidireccional (Renderer ↔ Main)**
    * **Método:** Comunicación de "petición y respuesta".
    * [cite_start]**Renderer (`App.jsx`):** Llama a una función `async` que usa `await window.api.funcion()` [cite: 928-939].
    * [cite_start]**Preload (`preload/index.js`):** Expone esa función que utiliza `ipcRenderer.invoke('canal', datos)`[cite: 926].
    * [cite_start]**Main (`main/index.js`):** Maneja la petición con `ipcMain.handle('canal', async (event, datos) => { return 'respuesta'; })`[cite: 910].
    * **Ejemplo:** Enviar un texto al Main y recibir una confirmación de vuelta.

---

## ⚠️ Notas Técnicas y Errores Comunes

* **¡REINICIAR!** Cada vez que se modifica `src/main/index.js` o `src/preload/index.js`, el refresco automático **NO funciona**. Es obligatorio parar el servidor (`Ctrl + C`) y volver a arrancarlo (`npm run dev`).
* **`TypeError: window.api.miFuncion is not a function`**: Este error significa 100% que no has reiniciado el servidor (`npm run dev`) después de añadir `miFuncion` a `src/preload/index.js`.
* **Error `optimizer.watchWindow`**: En `src/main/index.js`, la línea `optimizer.watchWindow(window)` se comentó para solucionar un error de arranque de la plantilla.
# electron-react-app

An Electron application with React

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
