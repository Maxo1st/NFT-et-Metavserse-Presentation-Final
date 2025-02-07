import Header from "../../components/header"
import NavSquares from "../../components/nav-squares"
import CourseSquare from "../../components/course-square"

export default function Cours() {
  const obligatoryCourses = [
    "Ethique et compliance",
    "Machine Learning pour la finance",
    "Macroéconomie",
    "Venture Capital",
  ]

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-2">
        <NavSquares />
      </div>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#00326E] border-b-2 border-[#00326E] pb-2">
          Mon Master et mes cours
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Master 224 - Banque et Finance</h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#00326E]">Mes cours obligatoires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {obligatoryCourses.map((course, index) => (
              <CourseSquare key={index} title={course} href={`/cours/${encodeURIComponent(course)}`} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-[#00326E]">Mes cours à choix libre</h3>
          <p className="text-gray-600 italic">Aucun cours à choix libre sélectionné pour le moment.</p>
        </section>
      </div>
    </main>
  )
}

