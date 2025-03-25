export interface ContactoRequest {
  idContacto: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  number: string; // este debe coincidir con el backend (no "numero")
  correo: string;
  mensaje: string;
  fechaEnvio: string;
  estado: string;
}
