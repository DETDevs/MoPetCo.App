export interface ServiceOption {
  id: string;
  name: string;
  durationMinutes: number;
  price: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  img: string;
  options: ServiceOption[];
}
