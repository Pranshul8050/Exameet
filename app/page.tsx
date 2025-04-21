import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomeContent } from "@/components/home-content"
import { NotificationBanner } from "@/components/notification-banner"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <HomeContent />
      <Footer />
    </main>
  )
}
