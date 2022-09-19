import Head from 'next/head'
import { useCallback, useState } from 'react';
import { Avatar } from '~/components/Avatar'
import { Header } from '~/components/Header'
import { useUser } from '~/hooks';

export default function Home() {
  const { data: user, update } = useUser()
  const [userChanges, setUserChanges] = useState({});

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    update(userChanges)
  }, [update, userChanges])

  return (
    <>
      <Head>
        <title>Book Tracker | Profile</title>
      </Head>

      <Header />

      <main className="bg-gray-200 font-sans leading-normal tracking-normal grow">
        <div className="container px-4 md:px-0 max-w-6xl mx-auto">
          <div className="flex flex-row justify-center py-12">
            <Avatar user={user} />
          </div>
        </div>

        <form className="container px-4 md:px-0 max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">Username</span>
            <input
              type="text"
              value={userChanges.username ?? user?.username ?? ''}
              onChange={(e) => setUserChanges({ ...userChanges, username: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">Email</span>
            <input
              type="text"
              value={userChanges.email ?? user?.email ?? ''}
              onChange={(e) => setUserChanges({ ...userChanges, email: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">Bio</span>
            <textarea
              rows="5"
              value={userChanges.bio ?? user?.bio ?? ''}
              onChange={(e) => setUserChanges({ ...userChanges, bio: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "
            />
          </label>
          <div className="flex justify-end pb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  )
}
