import Header from "../../components/header"
import NavSquares from "../../components/nav-squares"
import GridSquares from "../../components/grid-squares"

export default function Conferences() {
  const conferenceSquares = Array(8)
    .fill(null)
    .map((_, index) => ({ id: index + 1, text: "" }))

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-2">
        <NavSquares />
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#00326E] border-b-2 border-[#00326E] pb-2">Conférences</h1>
        <GridSquares squares={conferenceSquares} />
      </div>
    </main>
  )
}

