import { useQuery } from "@tanstack/react-query"

import { IUser } from "./types/types"
import { sleep } from "./utils/sleep"

// isLoading (boolean) => Será true quando a query function estiver executando na primeira requisição, deveria ser isInitialLoading
// isPending (boolean) => Será true quando não houver nenhum valor no cache
// isFetching (boolean) => Será true sempre que a query function estiver executando, seja na primeira execução ou nas subsequentes

export function Users() {
  const {data: users, isLoading: isUsersInitialLoading, isFetching: isUsersFetching, refetch: refetchUsers} = useQuery({
    queryKey: ['users'],
    enabled: false,
    queryFn: async (): Promise<IUser[]> => {
      await sleep()
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

      {users?.map(user => (
        <div key={user.id}>
          <strong className='block'>{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
