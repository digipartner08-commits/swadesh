import { useEffect, useRef, useState } from "react"

export default function Stats() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [triggerCount, setTriggerCount] = useState(0)

  const items = [
    { number: 10, suffix: "+", label: "Projects Delivered" },
    { number: 1000, suffix: "+", label: "Happy Families" },
    { number: 5, suffix: "+", label: "Years of Trust" },
    { number: 24, suffix: "/7", label: "Client Support" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTriggerCount((prev) => prev + 1)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.3,
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`stats-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container stats-grid">
        {items.map((item, index) => (
          <StatCard
            key={`${item.label}-${triggerCount}`}
            item={item}
            isVisible={isVisible}
            delayClass={`stat-delay-${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

function StatCard({ item, isVisible, delayClass }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    let start = 0
    const end = item.number
    const duration = 1600
    const incrementTime = 16
    const step = end / (duration / incrementTime)

    const counter = setInterval(() => {
      start += step

      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, incrementTime)

    return () => clearInterval(counter)
  }, [isVisible, item.number])

  return (
    <div className={`stat-card ${delayClass}`}>
      <h3>
        {count}
        {item.suffix}
      </h3>
      <p>{item.label}</p>
    </div>
  )
}