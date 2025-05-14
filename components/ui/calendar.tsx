"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = {
  className?: string
  onSelect?: (date: Date) => void
  selected?: Date
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function Calendar({ className, onSelect, selected }: CalendarProps) {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth())
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear())

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth)

  const weeks: (Date | null)[][] = []
  let week: (Date | null)[] = Array(firstDayOfWeek).fill(null)

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(new Date(currentYear, currentMonth, day))
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null)
    weeks.push(week)
  }

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1)
        return 11
      }
      return prev - 1
    })
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1)
        return 0
      }
      return prev + 1
    })
  }

  return (
    <div className={cn("p-3", className)}>
      <div className="flex justify-between items-center mb-2">
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7 p-0 opacity-50 hover:opacity-100")}
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium">
          {new Date(currentYear, currentMonth).toLocaleString(undefined, { month: "long", year: "numeric" })}
        </span>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }), "h-7 w-7 p-0 opacity-50 hover:opacity-100")}
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="w-full border-collapse space-y-1">
        <div className="flex">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center">
              {d}
            </div>
          ))}
        </div>
        {weeks.map((week, i) => (
          <div key={i} className="flex w-full mt-2">
            {week.map((date, j) => (
              <button
                key={j}
                type="button"
                className={cn(
                  "h-9 w-9 text-center text-sm p-0 relative",
                  date && selected && isSameDay(date, selected) && "bg-primary text-primary-foreground",
                  date && isSameDay(date, today) && "bg-accent text-accent-foreground",
                  !date && "invisible"
                )}
                disabled={!date}
                onClick={() => date && onSelect?.(date)}
                aria-selected={date && selected && isSameDay(date, selected)}
              >
                {date ? date.getDate() : ""}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
