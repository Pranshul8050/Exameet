import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon } from "lucide-react"

export function HomeContent() {
  const notifications = [
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
    "Important notification: Entrance exam for IITs - JEE Advanced scheduled on May 3",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome to Exameets – Your One-Stop Solution for All Your Aspirations!
          </h2>

          <p className="text-gray-700 mb-6">
            Exameets is more than just a website – it's a comprehensive platform designed to meet the unique needs of
            students and professionals. Our goal is to provide all the resources you need for your academic journey and
            career progression, from study materials and job notifications to travel support for exams and admissions.
          </p>

          <p className="text-gray-700 mb-6">
            Join Exameets today and let us help you achieve your dreams – because here at Exameets, we "Meet All Your
            Needs.
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Input type="text" placeholder="Search..." className="pr-10 rounded-md" />
              <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            <Button variant="default">Search</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">What's New</h3>
              <div className="space-y-2">
                {notifications.map((notification, index) => (
                  <p key={index} className="text-sm">
                    &gt;&gt; {notification}
                  </p>
                ))}
                <Link href="/notifications" className="block text-primary hover:underline mt-4">
                  View All &gt;&gt;
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
