
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobListings } from "@/components/job-listings"
import { NotificationBanner } from "@/components/notification-banner"

export default function GovtJobsPage() {
  const jobsData = [
    {
      organization: "NIACL",
      details: "Administrative Officer - 50 posts",
      qualification: "Any Degree",
      registrationStart: "06-Sep-2024",
      registrationEnd: "29-Sep-2024",
      company: "Creativision",
    },
    {
      organization: "NIACL",
      details: "Administrative Officer - 50 posts",
      qualification: "Any Degree",
      registrationStart: "06-Sep-2024",
      registrationEnd: "29-Sep-2024",
      company: "Creativision",
    },
    {
      organization: "NIACL",
      details: "Administrative Officer - 50 posts",
      qualification: "Any Degree",
      registrationStart: "06-Sep-2024",
      registrationEnd: "29-Sep-2024",
      company: "Creativision",
    },
    {
      organization: "NIACL",
      details: "Administrative Officer - 50 posts",
      qualification: "Any Degree",
      registrationStart: "06-Sep-2024",
      registrationEnd: "29-Sep-2024",
      company: "Creativision",
    },
    {
      organization: "NIACL",
      details: "Administrative Officer - 50 posts",
      qualification: "Any Degree",
      registrationStart: "06-Sep-2024",
      registrationEnd: "29-Sep-2024",
      company: "Creativision",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Government Jobs/ Notification/ Updates</h1>
        <JobListings jobs={jobsData} />
      </div>
      <Footer />
    </main>
  )
}
