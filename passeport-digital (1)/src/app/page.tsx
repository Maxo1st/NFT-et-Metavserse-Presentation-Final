import Header from "../components/header"
import NavSquares from "../components/nav-squares"
import GridSquares from "../components/grid-squares"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-2">
        <NavSquares />
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        <GridSquares />
      </div>
    </main>
  )
}

