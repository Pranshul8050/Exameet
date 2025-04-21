import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">Exameets</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/contact-us" className="hover:underline">
              Contact Us
            </Link>
            <span>|</span>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <span>|</span>
            <Link href="/community" className="hover:underline">
              Community
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/our-team" className="hover:underline">
              Our Team
            </Link>
          </div>

          <div className="text-center text-sm mb-4">
            <p>© 2024 Exameets, All rights Reserved</p>
            <p>Developed in Partnership with Ceeras</p>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center py-2 text-xs">
        <p>Success is not final, Failure is not final, It is the courage to continue that counts</p>
      </div>
    </footer>
  )
}
