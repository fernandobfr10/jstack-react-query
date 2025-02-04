import { useMutation } from "@tanstack/react-query"
import { IUser } from "../types/types"
import { sleep } from "../utils/sleep"

export function useCreateUser() {
  return useMutation({
    mutationFn: async ({ name, email }: { name: string, email: string }): Promise<IUser> => {
      await sleep()

      const response = fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })

      return (await response).json()
    },
    onError: (error, variables) => {
      console.log({ error, variables })
    },
    onSuccess: (data, variables) => {
      console.log('onSuccess:', { data, variables })
    },
    onSettled: (data, error) => {
      if(data) {
        console.log('onSettled:', data)
      }

      if(error) {
        console.log('onSettled:', error)
      }
    }
  })
}

// Controlando o que será retornado

export function useCreateUserSpecificReturn() {
  const { mutate, isPending, data } = useMutation({
    mutationFn: async ({ name, email }: { name: string, email: string }): Promise<IUser> => {
      await sleep()

      const response = fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })

      return (await response).json()
    },
    onError: (error, variables) => {
      console.log({ error, variables })
    },
    onSuccess: (data, variables) => {
      console.log('onSuccess:', { data, variables })
    },
    onSettled: (data, error) => {
      if(data) {
        console.log('onSettled:', data)
      }

      if(error) {
        console.log('onSettled:', error)
      }
    }
  })
  return {
    createUser: mutate,
    isCreatingUser: isPending,
    userCreated: data
  }
}


