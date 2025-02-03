import { useQuery } from "@tanstack/react-query"
import { IUser } from "./types/types"
import { sleep } from "./utils/sleep"

export function Posts() {
  const {data: users} = useQuery({
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
      <pre>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  )
}
