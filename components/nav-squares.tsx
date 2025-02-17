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
    <nav className="bg-white p-4">
      <div className="max-w-6xl mx-auto">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 py-2 rounded-lg"
              >
                {item.text}
                {item.icon && <span className="ml-2">{item.icon}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavSquares


