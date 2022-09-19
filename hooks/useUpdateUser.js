import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateUser = (changes) => fetch('/api/me', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(changes),
}).then((res) => res.json())


export const useUpdateUser = () => {
  const queryKey = ['user']
  const queryClient = useQueryClient()

  return useMutation(updateUser, {
    onMutate: async (changes) => {
      await queryClient.cancelQueries(queryKey)
      const previousUser = queryClient.getQueryData(queryKey)
      queryClient.setQueryData(queryKey, (oldUser) => ({ ...oldUser, ...changes }))

      return { previousUser }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context.previousUser)
    },
    onSuccess: (user) => {
      queryClient.setQueryData(queryKey, user)
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(queryKey)
    },
  })
}
