import { useCallback, useState } from 'react';
import { useQuery } from './useQuery';

export const useUser = () => {
  const { data, ...query } = useQuery('/api/me');
  const [updatedData, setUpdatedData] = useState(null);

  const update = useCallback((changes) => {
    fetch('/api/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, ...changes }),
    })
      .then((res) => res.json())
      .then((user) => setUpdatedData(user))
  }, [data])

  return { ...query, data: updatedData ?? data, update }
}
