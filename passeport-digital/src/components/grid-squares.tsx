import type React from "react"
import Link from "next/link"

interface Square {
  id: number
  text: string
  href?: string
}

interface GridSquaresProps {
  squares?: Square[]
}

const GridSquares: React.FC<GridSquaresProps> = ({ squares = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {squares.map((square) => (
        <div key={square.id}>
          {square.href ? (
            <Link href={square.href} className="block h-full">
              <div className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center p-4 text-center font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                {square.text}
              </div>
            </Link>
          ) : (
            <div className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center p-4 text-center font-semibold text-gray-700">
              {square.text}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default GridSquares

