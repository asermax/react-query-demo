import { useMemo, useState } from 'react'
import Head from 'next/head'
import { Header } from '~/components/Header'
import classNames from 'classnames'
import { useBooks } from '~/hooks'
import { Spinner } from '~/components/Spinner'

const BOOKS_BY_PAGE = 3

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data: { books, booksCount } = { books: [], booksCount: 0 },
    isFetching,
    isPreviousData,
  } = useBooks(BOOKS_BY_PAGE, currentPage, { keepPreviousData: true })

  const pages = useMemo(() => {
    const pageCount = Math.ceil(booksCount / BOOKS_BY_PAGE)
    const result = []
    for (let i = 1; i <= pageCount; i++) {
      result.push(i)
    }
    return result
  }, [booksCount])


  return (
    <>
      <Head>
        <title>Book Tracker | Your books</title>
      </Head>

      <Header />

      <main className="bg-gray-200 font-sans leading-normal tracking-normal grow">
        <div className="container px-4 md:px-16 py-12 max-w-6xl mx-auto flex flex-col gap-16">
          <div className="bg-gray-200 w-full h-96 grid md:grid-cols-3 sm:grid-cols-1 gap-16 relative">
            {books?.map((book) => (
              <div
                className="flex flex-col shadow-lg hover:scale-105 transition-transform"
                key={book.id}
              >
                <img
                  src={book.image}
                  className="h-96 w-full object-cover object-top block"
                  alt={book.title}
                />
                <div className="h-4 bg-slate-300">
                  <div className="h-full bg-sky-500" style={{ width: `${book.progress}%` }}></div>
                </div>
              </div>
            ))}
            {isFetching && isPreviousData ? (
              <div
                className={classNames(
                  'flex flex-col items-center justify-center absolute',
                  {
                    'h-full w-full inset-0': !isPreviousData,
                    'top-0 -right-16 h-12 w-12': isPreviousData
                  }
                )}
              >
                <Spinner />
              </div>
            ) : null}
          </div>
          <div className="self-end flex flex-row gap-2">
            <button
              className="bg-gray-400 enabled:hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &lt;
            </button>
            {pages.map((page) => (
              <button
                className={classNames(
                  "hover:bg-sky-500 text-white font-bold py-2 px-4",
                  { 'bg-sky-500': page === currentPage, 'bg-gray-400': page !== currentPage }
                )}
                onClick={() => setCurrentPage(page)}
                key={page}
              >
                {page}
              </button>
            ))}
            <button
              className="bg-gray-400 enabled:hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === pages.length}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
