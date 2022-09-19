import { useEffect, useState } from 'react'

export const useQuery = (url) => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null)
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const response = fetch(url);
    response
      .then((res) => res.json())
      .then((returnedData) => {
        setData(returnedData)
        setLoading(false)
      })
    response.then((res) => setCount(res.headers.get('X-Total-Count')))
  }, [url])

  return { data, loading, count }
}
