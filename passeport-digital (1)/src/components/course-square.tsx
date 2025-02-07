"use client"

import type React from "react"
import Link from "next/link"

interface CourseSquareProps {
  title: string
  href: string
}

const CourseSquare: React.FC<CourseSquareProps> = ({ title, href }) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 h-full flex items-center justify-center">
        <h4 className="text-center text-gray-800 font-medium">{title}</h4>
      </div>
    </Link>
  )
}

export default CourseSquare

