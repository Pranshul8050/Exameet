import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NotificationBanner } from "@/components/notification-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      title: "Complete JEE Preparation",
      instructor: "Dr. Rahul Sharma",
      duration: "6 months",
      level: "Advanced",
      rating: "4.8/5",
    },
    {
      title: "NEET Complete Course",
      instructor: "Dr. Priya Patel",
      duration: "6 months",
      level: "Advanced",
      rating: "4.7/5",
    },
    {
      title: "UPSC Prelims Crash Course",
      instructor: "Rajesh Kumar, IAS",
      duration: "3 months",
      level: "Intermediate",
      rating: "4.9/5",
    },
    {
      title: "GATE CSE Complete Course",
      instructor: "Prof. Amit Singh",
      duration: "4 months",
      level: "Advanced",
      rating: "4.8/5",
    },
    {
      title: "CAT Quantitative Aptitude",
      instructor: "Sanjay Gupta, IIM-A",
      duration: "2 months",
      level: "Intermediate",
      rating: "4.6/5",
    },
    {
      title: "SSC CGL Complete Course",
      instructor: "Vikram Rathore",
      duration: "3 months",
      level: "Beginner to Advanced",
      rating: "4.7/5",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Courses</h1>

        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Input type="text" placeholder="Search courses..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Button className="absolute right-0 top-0 rounded-l-none">Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{course.title}</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Instructor:</span> {course.instructor}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Level:</span> {course.level}
                  </p>
                  <p>
                    <span className="font-semibold">Rating:</span> {course.rating}
                  </p>
                </div>
                <Button variant="link" className="mt-2 p-0">
                  View Course &gt;&gt;
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
