import { useQuery } from '@tanstack/react-query'

const fetchUser = () => fetch('/api/me').then((res) => res.json())

export const useUser = (options) => useQuery(['user'], fetchUser, options)
