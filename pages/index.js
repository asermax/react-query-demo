import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head'
import { Header } from '~/components/Header'
import classNames from 'classnames';

const BOOKS_BY_PAGE = 3

export default function Home() {
  const [booksCount, setBooksCount] = useState(BOOKS_BY_PAGE)
  const [currentPage, setCurrentPage] = useState(1)
  const [books, setBooks] = useState([]);

  const pages = useMemo(() => {
    const result = []
    for (let i = 1; i <= Math.ceil(booksCount / BOOKS_BY_PAGE); i++) {
      result.push(i)
    }
    return result
  }, [booksCount])

  useEffect(() => {
    const response = fetch(`/api/books?take=${BOOKS_BY_PAGE}&skip=${(currentPage - 1) * BOOKS_BY_PAGE}`);
    response
      .then((res) => res.json())
      .then((books) => setBooks(books));
    response.then((res) => setBooksCount(res.headers.get('X-Total-Count')));
  }, [currentPage])

  return (
    <>
      <Head>
        <title>Book Tracker | Your books</title>
      </Head>

      <Header />

      <main className="bg-gray-200 font-sans leading-normal tracking-normal grow">
        <div className="container px-4 md:px-16 py-12 max-w-6xl mx-auto flex flex-col gap-16">
          <div className="bg-gray-200 w-full grid md:grid-cols-3 sm:grid-cols-1 gap-16">
            {books.map((book) => (
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
