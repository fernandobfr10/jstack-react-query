import { useQuery } from "@tanstack/react-query"

import { IUser } from "../types/types"
import { sleep } from "../utils/sleep"

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: async (): Promise<IUser[]> => {
      await sleep(1000)
      const response = await fetch('http://localhost:3000/users')
      return response.json()
    },
  })
}

// Se eu quiser retornar apenas dados específicos e/ou renomeados:

export function useUsersSpecificData() {
  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['users'],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: async (): Promise<IUser[]> => {
      await sleep(1000)
      const response = await fetch('http://localhost:3000/users')
      return response.json()
    },
  })

  return {
    users: data ?? [], // Evitando o uso de optional chaining no componente.
    isInitialLoading: isLoading,
    isFetchingUsers: isFetching,
    errorUsers: error,
    isErrorUsers: isError,
    refetchUsers: refetch,
  }
}
