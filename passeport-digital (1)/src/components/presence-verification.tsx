"use client"

import type React from "react"
import { useState } from "react"
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

const PresenceVerification: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(true)
  const [showError, setShowError] = useState(false)
  const router = useRouter()

  const handleYesClick = () => {
    router.push("/confirmation-presence")
  }

  const handleNoClick = () => {
    setIsVerifying(false)
    setShowError(true)
  }

  return (
    <div className="space-y-6">
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 flex items-start">
        <ExclamationTriangleIcon className="h-6 w-6 mr-2 flex-shrink-0" />
        <p className="text-lg">En train de vérifier si vous êtes dans le Wifi d'un établissement PSL</p>
      </div>

      {isVerifying && (
        <div className="flex justify-center items-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
        </div>
      )}

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleYesClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Oui
        </button>
        <button onClick={handleNoClick} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Non
        </button>
      </div>

      {showError && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <p>Vous n'êtes pas connecté au Wifi d'un établissement PSL, on ne peut pas vérifier votre présence</p>
        </div>
      )}
    </div>
  )
}

export default PresenceVerification

