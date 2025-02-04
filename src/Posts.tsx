import { useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import { IUser } from "./types/types"

import { sleep } from "./utils/sleep"

export function Posts() {
  const queryClient = useQueryClient() // É o mesmo queryClient que é passado para o ReactQueryCacheProvider, apenas utilizamos o hook useQueryClient para acessá-lo.

  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: async (): Promise<IUser[]> => {
            // throw new Error('Erro ao buscar usuários')
            await sleep(1000)
            const response = await fetch('http://localhost:3000/users')
            return response.json()
          },
    })
  }

  return (
    <div className="p-4">
      <pre>
        Posts
        <Link to='/' onMouseEnter={handleMouseEnter} className="block">Ir para list de usuários</Link>
      </pre>
    </div>
  )
}
