import { useMemo, useState } from 'react'
import { useQuery } from './useQuery'

export const useBooks = (booksByPage) => {
  const [currentPage, setCurrentPage] = useState(1)
  const query = useQuery(`/api/books?take=${booksByPage}&skip=${(currentPage - 1) * booksByPage}`)
  const pageCount = useMemo(() => Math.ceil(query.count / booksByPage), [query.count, booksByPage])

  return {
    ...query,
    pageCount,
    currentPage,
    changePage: setCurrentPage,
  }
}
