import { useQuery } from "@tanstack/react-query"

import { IUser } from "./types/types"

import { sleep } from "./utils/sleep"

// isLoading (boolean) => Será true quando a query function estiver executando na primeira requisição, deveria ser isInitialLoading
// isPending (boolean) => Será true quando não houver nenhum valor no cache
// isFetching (boolean) => Será true sempre que a query function estiver executando, seja na primeira execução ou nas subsequentes

// staleTime (number) => Define o tempo em milissegundos que a query será considerada "stale" (desatualizada) e será refetchada
// gcTime (number) => Define o tempo em milissegundos que a query será considerada "garbage" (lixo) e será removida do cache

// refetchOnWindowFocus (boolean) => Se true, a query será automaticamente refetchada quando a janela do navegador ganhar foco
// refetchOnInterval (number) => Se definido, a query será automaticamente refetchada a cada X milissegundos

// error (Error) => Será um objeto Error caso ocorra um erro na execução da query function
// isError (boolean) => Será true se ocorrer um erro na execução da query function

// retry (number | boolean) => Define a quantidade de vezes que a query será retentada em caso de erro, ou se true, a query será retentada indefinidamente (default 3)
// retryDelay (number) => Define o tempo em milissegundos que a query será retentada em caso de erro

export function Users() {
  const { data: users, isLoading: isUsersInitialLoading, isFetching: isUsersFetching, refetch: refetchUsers, error: errorUsers } = useQuery({
    queryKey: ['users'],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: async (): Promise<IUser[]> => {
      // throw new Error('Erro ao buscar usuários')
      await sleep(1000)
      const response = await fetch('http://localhost:3000/users')
      return response.json()
    },
  })

  return (
    <div className="p-4">
      <button
        type="button"
        className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => refetchUsers()}
      >
        Listar usuários
      </button>

      {isUsersInitialLoading && <h2>Carregando...</h2>}
      {!isUsersInitialLoading && isUsersFetching && <small className="block">Fetching...</small>}
      {errorUsers && <h2 className="text-red-400">{errorUsers.message}</h2>}

      {users?.map(user => (
        <div key={user.id}>
          <strong className='block'>{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
