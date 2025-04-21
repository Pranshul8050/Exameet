import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NotificationBanner } from "@/components/notification-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function AdmissionsPage() {
  const colleges = [
    {
      name: "Indian Institute of Technology (IIT) Delhi",
      courses: "B.Tech, M.Tech, PhD",
      admissionProcess: "JEE Advanced, GATE",
      deadline: "May 15, 2024",
    },
    {
      name: "Indian Institute of Technology (IIT) Bombay",
      courses: "B.Tech, M.Tech, PhD",
      admissionProcess: "JEE Advanced, GATE",
      deadline: "May 15, 2024",
    },
    {
      name: "Indian Institute of Technology (IIT) Madras",
      courses: "B.Tech, M.Tech, PhD",
      admissionProcess: "JEE Advanced, GATE",
      deadline: "May 15, 2024",
    },
    {
      name: "Indian Institute of Technology (IIT) Kanpur",
      courses: "B.Tech, M.Tech, PhD",
      admissionProcess: "JEE Advanced, GATE",
      deadline: "May 15, 2024",
    },
    {
      name: "National Institute of Technology (NIT) Trichy",
      courses: "B.Tech, M.Tech, PhD",
      admissionProcess: "JEE Main, GATE",
      deadline: "June 10, 2024",
    },
    {
      name: "National Institute of Technology (NIT) Warangal",
      courses: "B.Tech, M.Tech, PhD",
      admissionProcess: "JEE Main, GATE",
      deadline: "June 10, 2024",
    },
    {
      name: "Delhi University",
      courses: "Various UG and PG courses",
      admissionProcess: "CUET, Department Entrance Tests",
      deadline: "July 5, 2024",
    },
    {
      name: "Jawaharlal Nehru University",
      courses: "Various UG and PG courses",
      admissionProcess: "CUET, JNU Entrance Examination",
      deadline: "June 30, 2024",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">College Admissions</h1>

        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Input type="text" placeholder="Search colleges, courses..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Button className="absolute right-0 top-0 rounded-l-none">Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colleges.map((college, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{college.name}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Courses:</span> {college.courses}
                  </p>
                  <p>
                    <span className="font-semibold">Admission Process:</span> {college.admissionProcess}
                  </p>
                  <p>
                    <span className="font-semibold">Application Deadline:</span> {college.deadline}
                  </p>
                </div>
                <Button variant="link" className="mt-2 p-0">
                  View Details &gt;&gt;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
