import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegisterForm } from "@/components/register-form"
import { NotificationBanner } from "@/components/notification-banner"

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12">
        <RegisterForm />
      </div>
      <Footer />
    </main>
  )
}
