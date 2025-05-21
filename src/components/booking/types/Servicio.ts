export interface PriceItem {
  idPrecio: number;
  monto: number;  // número en toda la app
  rangoPeso: {
    idRango: number;
    nombre: string;
    pesoMin: number;
    pesoMax: number;
  };
}

export interface UIService {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: number;          // número base
  prices: PriceItem[];    // lista de tamaños
  description: string;
  includes: { id: number; descripcion: string }[];
  note?: string | null;
}