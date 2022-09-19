import { useCreateUserContext } from '~/hooks';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const UserProvider = useCreateUserContext()

  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  )
}

export default MyApp
