import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobListings } from "@/components/job-listings"
import { NotificationBanner } from "@/components/notification-banner"

export default function TechJobsPage() {
  const jobsData = [
    {
      organization: "Microsoft",
      details: "Software Engineer - 20 posts",
      qualification: "B.Tech/M.Tech",
      registrationStart: "10-Sep-2024",
      registrationEnd: "30-Sep-2024",
      company: "Microsoft India",
    },
    {
      organization: "Google",
      details: "Frontend Developer - 15 posts",
      qualification: "B.Tech/MCA",
      registrationStart: "12-Sep-2024",
      registrationEnd: "02-Oct-2024",
      company: "Google India",
    },
    {
      organization: "Amazon",
      details: "Backend Developer - 25 posts",
      qualification: "B.Tech/M.Tech",
      registrationStart: "15-Sep-2024",
      registrationEnd: "05-Oct-2024",
      company: "Amazon India",
    },
    {
      organization: "TCS",
      details: "Full Stack Developer - 30 posts",
      qualification: "Any Degree",
      registrationStart: "18-Sep-2024",
      registrationEnd: "08-Oct-2024",
      company: "TCS",
    },
    {
      organization: "Infosys",
      details: "Data Scientist - 10 posts",
      qualification: "B.Tech/M.Tech/PhD",
      registrationStart: "20-Sep-2024",
      registrationEnd: "10-Oct-2024",
      company: "Infosys",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Tech Jobs/ Notification/ Updates</h1>
        <JobListings jobs={jobsData} />
      </div>
      <Footer />
    </main>
  )
}
