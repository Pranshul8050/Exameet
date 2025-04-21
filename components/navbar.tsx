"use client"

import Link from "next/link"
import { useState } from "react"
import { Home, Briefcase, Laptop, GraduationCap, BookOpen, FileText, BookMarked, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Govt Jobs", href: "/govt-jobs", icon: Briefcase },
    { name: "Tech Jobs", href: "/tech-jobs", icon: Laptop },
    { name: "Internship", href: "/internship", icon: GraduationCap },
    { name: "Admissions", href: "/admissions", icon: BookOpen },
    { name: "PYQ", href: "/pyq", icon: FileText },
    { name: "Courses", href: "/courses", icon: BookMarked },
  ]

  return (
    <header className="w-full">
      <div className="bg-primary text-white text-center py-2 text-sm">
        "Exameets is a one stop platform for students, where all the needs are met"
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <h1 className="text-4xl font-bold text-primary">exameets</h1>
            <p className="text-xs text-gray-500 ml-2">meets your needs</p>
          </Link>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="default">Register</Button>
            </Link>
          </div>
        </div>

        <nav className={cn("mt-4 md:flex md:justify-center md:space-x-2", isMenuOpen ? "block" : "hidden md:flex")}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <div className="rounded-full border border-primary p-2 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="bg-primary text-white text-center py-2">
        <Link href="/register" className="hover:underline">
          Register to get the notifications you need &gt;&gt;&gt;&gt;
        </Link>
      </div>
    </header>
  )
}
