import { useQuery } from "@tanstack/react-query"
import apiClient from "../services/apiClient"
import ms from "ms"
import Product from "../entities/Product";

const useProduct = (productId: number) => useQuery({
  queryKey: ['products', productId],
  queryFn: () => apiClient.get<Product>(`/api/products/${productId}`).then(res => res.data),
  staleTime: ms('24h'),
  retry: 1
});

export default useProduct;