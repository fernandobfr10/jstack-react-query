import { useUsers } from "./hooks/useUsers"

export function Users() {
  const { data: users, isLoading: isUsersInitialLoading, isFetching: isUsersFetching, refetch: refetchUsers, error: errorUsers } = useUsers()

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
