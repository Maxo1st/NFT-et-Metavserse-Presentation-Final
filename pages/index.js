import Head from "next/head"
import Header from "../components/header"
import NavSquares from "../components/nav-squares"
import GridSquares from "../components/grid-squares"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Passeport Digital</title>
        <meta name="description" content="Passeport Digital pour les étudiants de Paris Dauphine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <div className="pt-2">
          <NavSquares />
        </div>
        <div className="p-4 max-w-6xl mx-auto">
          <GridSquares />
        </div>
      </main>
    </div>
  )
}

