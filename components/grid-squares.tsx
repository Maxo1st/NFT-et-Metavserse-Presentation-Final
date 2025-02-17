import Link from "next/link"

const GridSquares = () => {
  const squares = [
    { id: 1, text: "Vérifier ma présence", href: "/verifier-presence" },
    { id: 2, text: "Mes notes", href: "/mes-notes" },
    { id: 3, text: "Mon emploi du temps", href: "/emploi-du-temps" },
    { id: 4, text: "Mes absences", href: "/absences" },
    { id: 5, text: "Mes stages", href: "/stages" },
    { id: 6, text: "Mes associations", href: "/associations" },
    { id: 7, text: "Mes certifications", href: "/certifications" },
    { id: 8, text: "Mes documents", href: "/documents" },
  ]

  return (
    <div className="space-y-2">
      {squares.map((square) => (
        <Link
          key={square.id}
          href={square.href}
          className="block w-full text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-lg"
        >
          {square.text}
        </Link>
      ))}
    </div>
  )
}

export default GridSquares

