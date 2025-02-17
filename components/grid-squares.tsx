import Link from "next/link"

const GridSquares = () => {
  const squares = [
    { id: 1, text: "Vérifier ma présence", href: "/verifier-presence" },
    { id: 2, text: "Mes notes", href: "#" },
    { id: 3, text: "Mon emploi du temps", href: "#" },
    { id: 4, text: "Mes absences", href: "#" },
    { id: 5, text: "Mes stages", href: "#" },
    { id: 6, text: "Mes associations", href: "#" },
    { id: 7, text: "Mes certifications", href: "#" },
    { id: 8, text: "Mes documents", href: "#" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {squares.map((square) => (
        <Link key={square.id} href={square.href} className="block h-full">
          <div className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center p-4 text-center font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            {square.text}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default GridSquares

