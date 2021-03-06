import Head from 'next/head'
import '../styles/globals.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head> 
    <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossOrigin="anonymous"
    />
</Head>
  <Component {...pageProps} />
    </>
  )
}

export default MyApp
