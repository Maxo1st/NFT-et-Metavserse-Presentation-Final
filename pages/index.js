import Head from "next/head"
import Header from "../components/header"
import NavSquares from "../components/nav-squares"
import GridSquares from "../components/grid-squares"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Passeport Digital</title>
        <meta name="description" content="Passeport Digital pour les étudiants de Paris Dauphine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex min-h-[calc(100vh-140px)]">
        <aside className="w-64 border-r">
          <NavSquares />
        </aside>
        <main className="flex-1 p-6">
          <GridSquares />
        </main>
      </div>
    </div>
  )
}

