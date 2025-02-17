import { Search, Settings } from "lucide-react"
import { Input } from "./ui/input"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-[#00326E] p-4 space-y-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white flex items-center font-sans">
          Passeport{" "}
          <span className="relative inline-flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(2)-G6N3w2LtdZhLW6gIjtswXBTPOcJH99.png"
              alt="D"
              width={28}
              height={28}
              className="mx-1"
            />
            igital
          </span>
        </h1>
        <Settings className="h-5 w-5 text-white cursor-pointer" />
      </div>
      <div className="relative">
        <Input type="search" placeholder="Rechercher..." className="w-full pl-4 pr-10 py-2 rounded-full bg-white" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#682c45] p-1.5 rounded-full">
          <Search className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  )
}


