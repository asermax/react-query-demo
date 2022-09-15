import Head from 'next/head'
import Link from 'next/link'
import { Header } from '~/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Tracker | Your books</title>
      </Head>

      <Header />

      <main className="bg-gray-200 font-sans leading-normal tracking-normal grow">
        <div className="container px-4 md:px-0 max-w-6xl mx-auto">
          <div className="mx-0 sm:mx-6">
            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              <div className="flex flex-wrap justify-between pt-12">
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="relative flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <img src="/images/best-book-javascript-eloquent-javascript.webp" className="h-96 w-full rounded-t object-cover object-top block" alt="book" />
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="relative flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <img src="/images/best-book-javascript-eloquent-javascript.webp" className="h-96 w-full rounded-t object-cover object-top block" alt="book" />
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="relative flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <img src="/images/best-book-javascript-eloquent-javascript.webp" className="h-96 w-full rounded-t object-cover object-top block" alt="book" />
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="relative flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <img src="/images/best-book-javascript-eloquent-javascript.webp" className="h-96 w-full rounded-t object-cover object-top block" alt="book" />
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="relative flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <img src="/images/best-book-javascript-eloquent-javascript.webp" className="h-96 w-full rounded-t object-cover object-top block" alt="book" />
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="relative flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <img src="/images/best-book-javascript-eloquent-javascript.webp" className="h-96 w-full rounded-t object-cover object-top block" alt="book" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
