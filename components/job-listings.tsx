"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"

interface Job {
  organization: string
  details: string
  qualification: string
  registrationStart: string
  registrationEnd: string
  company: string
}

interface JobListingsProps {
  jobs: Job[]
}

export function JobListings({ jobs }: JobListingsProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  // Filter and sort logic would go here in a real application
  const filteredJobs = jobs

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search Internships here.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        <div className="flex gap-2">
          <Button type="button">Search</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="government">Government</SelectItem>
            <SelectItem value="private">Private</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="alphabetical">Alphabetical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Organization Name</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Qualification</TableHead>
              <TableHead className="text-center">
                Registration
                <div className="flex justify-between text-xs">
                  <span>Starts On</span>
                  <span>Ends On</span>
                </div>
              </TableHead>
              <TableHead>More Information</TableHead>
              <TableHead>Company</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-blue-50" : ""}>
                <TableCell>{job.organization}</TableCell>
                <TableCell>{job.details}</TableCell>
                <TableCell>{job.qualification}</TableCell>
                <TableCell>
                  <div className="flex justify-between">
                    <span>{job.registrationStart}</span>
                    <span>{job.registrationEnd}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="link" size="sm">
                    Get Details&gt;&gt;
                  </Button>
                </TableCell>
                <TableCell>{job.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
