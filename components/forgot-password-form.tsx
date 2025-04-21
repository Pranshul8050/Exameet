"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log("Password reset requested for:", email)
    setSubmitted(true)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>Enter your email address and we'll send you a link to reset your password</CardDescription>
      </CardHeader>
      <CardContent>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>

            <div className="text-center">
              <Link href="/login" className="text-primary hover:underline text-sm">
                Back to Login
              </Link>
            </div>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-600">
              If an account exists with the email {email}, you will receive a password reset link shortly.
            </p>
            <Link href="/login">
              <Button variant="outline" className="mt-4">
                Back to Login
              </Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
