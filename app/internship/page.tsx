import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobListings } from "@/components/job-listings"
import { NotificationBanner } from "@/components/notification-banner"

export default function InternshipPage() {
  const internshipData = [
    {
      organization: "Microsoft",
      details: "Software Engineer Intern - 10 posts",
      qualification: "B.Tech/M.Tech (Pursuing)",
      registrationStart: "05-Sep-2024",
      registrationEnd: "25-Sep-2024",
      company: "Microsoft India",
    },
    {
      organization: "Google",
      details: "Frontend Developer Intern - 8 posts",
      qualification: "B.Tech/MCA (Pursuing)",
      registrationStart: "08-Sep-2024",
      registrationEnd: "28-Sep-2024",
      company: "Google India",
    },
    {
      organization: "Amazon",
      details: "Backend Developer Intern - 12 posts",
      qualification: "B.Tech/M.Tech (Pursuing)",
      registrationStart: "10-Sep-2024",
      registrationEnd: "30-Sep-2024",
      company: "Amazon India",
    },
    {
      organization: "TCS",
      details: "Full Stack Developer Intern - 15 posts",
      qualification: "Any Degree (Pursuing)",
      registrationStart: "12-Sep-2024",
      registrationEnd: "02-Oct-2024",
      company: "TCS",
    },
    {
      organization: "Infosys",
      details: "Data Science Intern - 5 posts",
      qualification: "B.Tech/M.Tech/PhD (Pursuing)",
      registrationStart: "15-Sep-2024",
      registrationEnd: "05-Oct-2024",
      company: "Infosys",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Internship Opportunities</h1>
        <JobListings jobs={internshipData} />
      </div>
      <Footer />
    </main>
  )
}
