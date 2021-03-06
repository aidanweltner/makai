import Header from '@components/header'
import HeroHeader from '@components/heroHeader'
import Layout from '@components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Makai Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroHeader />
      </Layout>
    </>
  )
}
