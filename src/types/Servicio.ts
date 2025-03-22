export interface IncluyeItem {
  id: number;
  descripcion: string;
}

export interface Servicio {
  idServicio: number;
  titulo: string;
  subTitulo: string;
  incluye: string;
  descripcion: string;
  icon: string; // Puede ser clase fa-* o URL (verificados abajo)
  urlImagen: string | null;
  precio: string[]; // Lista de precios si se llena luego
  incluyeLista: IncluyeItem[];
}
