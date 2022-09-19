import { useCallback, useMemo, useState } from 'react';
import { UserContext } from './context';
import { useQuery } from '../useQuery';

export const useCreateUserContext = () => {
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

  const value = useMemo(() => ({ ...query, data: updatedData ?? data, update }), [data, query, update, updatedData])
  const UserProvider = (props) => (<UserContext.Provider {...props} value={value} />)

  return UserProvider
}
