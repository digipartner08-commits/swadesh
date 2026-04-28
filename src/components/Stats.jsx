import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const items = [
    { number: 10, suffix: "+", label: "Projects Delivered" },
    { number: 1000, suffix: "+", label: "Happy Families" },
    { number: 5, suffix: "+", label: "Years of Trust" },
    { number: 24, suffix: "/7", label: "Client Support" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`lux-stats ${isVisible ? "show" : ""}`}
    >
      <div className="lux-overlay"></div>

      <div className="container lux-grid">
        {items.map((item, index) => (
          <StatCard
            key={item.label}
            item={item}
            isVisible={isVisible}
            delay={index}
          />
        ))}
      </div>
    </section>
  )
}

function StatCard({ item, isVisible, delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    let start = 0
    const end = item.number
    const duration = 1400
    const step = end / (duration / 16)

    const counter = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [isVisible, item.number])

  return (
    <div
      className="lux-card"
      style={{ transitionDelay: `${delay * 0.15}s` }}
    >
      <h3>
        {count}
        {item.suffix}
      </h3>
      <p>{item.label}</p>
    </div>
  )
}