import { useCreateUser } from "./hooks/useCreateUser"
import { useUsers } from "./hooks/useUsers"

export function Users() {

  const { data: users, isLoading: isUsersInitialLoading, isFetching: isUsersFetching, refetch: refetchUsers, error: errorUsers } = useUsers()

  const { mutate, isPending, data } = useCreateUser()

  console.log({ data }) // Dados da resposta da mutation

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const elements = event.currentTarget.elements as typeof event.currentTarget.elements & {
      name: HTMLInputElement
      email: HTMLInputElement
    }

    mutate({
      name: elements.name.value,
      email: elements.email.value
    })
  }

  return (
    <div className="p-4">
      <div className="mb-10">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="border border-white p-1 rounded-md text-zinc-900 bg-white outline-none"
            placeholder="Nome"
            name="name"

          />
          <input
            className="border border-white p-1 rounded-md text-zinc-900 bg-white outline-none"
            placeholder="E-mail"
            name="email"
          />

          <button className="bg-blue-400 py-2 text-zinc-950 rounded-md">
            {isPending ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

      </div>

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
