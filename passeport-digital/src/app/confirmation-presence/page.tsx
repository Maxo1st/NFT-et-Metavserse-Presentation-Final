import Header from "../../components/header"
import NavSquares from "../../components/nav-squares"

export default function ConfirmationPresence() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-2">
        <NavSquares />
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#00326E] border-b-2 border-[#00326E] pb-2">
          Confirmation de Présence
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Votre présence a été confirmée. Plus de détails seront ajoutés ici.
        </p>
      </div>
    </main>
  )
}

