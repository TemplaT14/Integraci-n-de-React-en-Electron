import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// === INICIO CÓDIGO EJERCICIOS ===

// Custom APIs for renderer
const api = {
  // 5. (EJERCICIO 5) Exponer función saludar
  saludar: (nombre) => {
    return `Hola, ${nombre}, desde el preload`;
  },

  // 7. (EJERCICIO 7) Función para la comunicación bidireccional
  enviarMensajeBidireccional: (mensaje) => {
    // 'invoke' devuelve una Promesa con la respuesta del Main
    return ipcRenderer.invoke('mi-mensaje-bidireccional', mensaje);
  }
}

// === FIN CÓDIGO EJERCICIOS ===

// Use contextBridge APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}