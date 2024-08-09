import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import ms from "ms"
import Product from "../entities/Product";

const useProducts = () => useQuery({
  queryKey: ['products'],
  queryFn: () => apiClient.get<Product[]>('/api/products').then(res => res.data),
  staleTime: ms('24h')
});

export default useProducts;