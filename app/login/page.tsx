import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"
import { NotificationBanner } from "@/components/notification-banner"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12">
        <LoginForm />
      </div>
      <Footer />
    </main>
  )
}
