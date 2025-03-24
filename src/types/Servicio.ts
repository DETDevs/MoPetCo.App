export interface RangoPeso {
  idRango: number;
  nombre: string;
  pesoMin: number;
  pesoMax: number;
}

export interface PrecioItem {
  idPrecio: number;
  monto: number;
  rangoPeso: RangoPeso;
}

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
  icon: string;
  urlImagen: string | null;
  precio: PrecioItem[]; // ✅ Aquí corregido
  incluyeLista: IncluyeItem[];
}
