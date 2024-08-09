import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import ms from "ms"

const useProducts = () => useQuery({
  queryKey: ['products'],
  queryFn: () => apiClient.get('/api/products').then(res => res.data),
  staleTime: ms('24h')
});

export default useProducts;