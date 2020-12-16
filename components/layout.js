import Head from 'next/head'
import Header from './header'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bringing your digital presence to life"
        />
      </Head>
      <Header />
      <main>{children}</main>

    </>
  )
}