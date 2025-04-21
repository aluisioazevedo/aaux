"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    checkScroll()
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={cn("flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory", className)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <div key={i} className="snap-start flex-shrink-0">
              {child}
            </div>
          ))
        ) : (
          <div className="snap-start flex-shrink-0">{children}</div>
        )}
      </div>
    </div>
  )
}
