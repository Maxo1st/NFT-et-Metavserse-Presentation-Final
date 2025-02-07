import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-[#3f51b5] p-4 space-y-4">
      <h1 className="text-2xl font-bold text-white">Passeport Digital</h1>
      <div className="relative">
        <Input type="search" placeholder="Rechercher..." className="w-full pl-4 pr-10 py-2 rounded-full bg-white" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#682c45] p-1.5 rounded-full">
          <Search className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  )
}

