import Header from "../components/header"
import NavSquares from "../components/nav-squares"
import GridSquares from "../components/grid-squares"

export default function Home() {
  const dashboardSquares = [
    { id: 1, text: "Vérifier ma présence", href: "/verifier-presence" },
    { id: 2, text: "Mon relevé de notes" },
    { id: 3, text: "Ma convention de stage" },
    { id: 4, text: "" },
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-2">
        <NavSquares />
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        <GridSquares squares={dashboardSquares} />
      </div>
    </main>
  )
}

