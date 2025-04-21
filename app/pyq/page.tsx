import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NotificationBanner } from "@/components/notification-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function PYQPage() {
  const examCategories = [
    {
      name: "UPSC Civil Services",
      papers: ["Prelims", "Mains - General Studies", "Mains - Optional Subjects"],
      years: "2010-2023",
    },
    {
      name: "JEE Mains",
      papers: ["Physics", "Chemistry", "Mathematics"],
      years: "2010-2023",
    },
    {
      name: "JEE Advanced",
      papers: ["Paper 1", "Paper 2"],
      years: "2010-2023",
    },
    {
      name: "NEET",
      papers: ["Physics", "Chemistry", "Biology"],
      years: "2010-2023",
    },
    {
      name: "GATE",
      papers: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"],
      years: "2010-2023",
    },
    {
      name: "CAT",
      papers: ["Quantitative Aptitude", "Verbal Ability", "Data Interpretation", "Logical Reasoning"],
      years: "2010-2023",
    },
    {
      name: "BPSC",
      papers: ["Prelims", "Mains"],
      years: "2010-2023",
    },
    {
      name: "SSC CGL",
      papers: ["Tier 1", "Tier 2", "Tier 3"],
      years: "2010-2023",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Previous Year Question Papers (PYQs)</h1>

        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Input type="text" placeholder="Search exams, subjects..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Button className="absolute right-0 top-0 rounded-l-none">Search</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examCategories.map((exam, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{exam.name}</h3>
                <div className="mt-2">
                  <p className="text-sm">
                    <span className="font-semibold">Papers:</span> {exam.papers.join(", ")}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Available Years:</span> {exam.years}
                  </p>
                </div>
                <Button variant="link" className="mt-2 p-0">
                  View Papers &gt;&gt;
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
