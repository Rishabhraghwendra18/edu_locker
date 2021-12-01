import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import NavBar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>EduLocker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
  <Component {...pageProps} />
    </>
  )
}

export default MyApp