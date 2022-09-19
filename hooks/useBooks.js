import { useQuery } from '@tanstack/react-query'

const fetchBooks = async ({ queryKey: [,pageSize, currentPage]}) => {
  const response = await fetch(`/api/books?take=${pageSize}&skip=${(currentPage - 1) * pageSize}`)
  const books = await response.json()

  return { books, booksCount: response.headers.get('X-Total-Count') }
}

export const useBooks = (booksByPage, currentPage, options) => useQuery(['books', booksByPage, currentPage], fetchBooks, options)
