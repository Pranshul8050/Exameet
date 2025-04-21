import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ForgotPasswordForm } from "@/components/forgot-password-form"
import { NotificationBanner } from "@/components/notification-banner"

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </main>
  )
}
