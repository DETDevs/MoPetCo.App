/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_MAPS_API: string
  // Agrega aquí las demás variables que uses con el prefijo VITE_
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
