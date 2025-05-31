import { useQuery } from "@tanstack/react-query";
import { fetchPromocion } from "../Service/promocionesApi";

export const usePromociones = () =>
  useQuery({
    queryKey: ["promociones"],
    queryFn: fetchPromocion,
    staleTime: 1000 * 60 * 5, 
  });
