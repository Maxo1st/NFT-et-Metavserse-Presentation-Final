import { Search, Settings } from "lucide-react"
import { Input } from "./ui/input"

export default function Header() {
  return (
    <header className="bg-white p-4 border-b">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            Passeport <span className="font-bold">igital</span>
          </h1>
          <Settings className="h-5 w-5 text-gray-600 cursor-pointer" />
        </div>
        <div className="relative">
          <Input type="search" placeholder="Rechercher..." className="w-full pl-4 pr-10 py-2 border rounded bg-white" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

