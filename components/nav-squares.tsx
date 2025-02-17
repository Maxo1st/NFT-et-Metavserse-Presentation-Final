import { Filter } from "lucide-react"
import Link from "next/link"

const NavSquares = () => {
  const items = [
    { text: "My Dashboard", href: "/" },
    { text: "Cours", href: "/cours" },
    { text: "Conférences", href: "/conferences" },
    { text: "Activités", href: "/activites" },
    { text: "Filtrer", icon: <Filter className="h-4 w-4" />, href: "#" },
  ]

  return (
    <div className="flex justify-between px-2 py-2 bg-gray-100">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center justify-center px-4 py-3 bg-white rounded-lg shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer flex-grow mx-0.5"
        >
          {item.text}
          {item.icon && <span className="ml-2">{item.icon}</span>}
        </Link>
      ))}
    </div>
  )
}

export default NavSquares

