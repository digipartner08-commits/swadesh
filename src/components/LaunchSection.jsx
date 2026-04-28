import { useEffect, useRef, useState } from "react"

export default function LaunchSection() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.22 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`lux-launch-section ${inView ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="lux-launch-grid">
          <div className="lux-launch-image-wrap lux-launch-reveal">
            <div className="lux-launch-badge">Coming Soon</div>

            <div className="lux-launch-image-card">
              <img src="./assets/launch.png" alt="Swadesh Celestia" />
            </div>
          </div>

          <div className="lux-launch-content lux-launch-reveal">
            <span className="lux-launch-tag">Upcoming Launch</span>

            <h2>Swadesh Celestia</h2>

            <h3>Luxury 3BHK Living in Vesu, Surat</h3>

            <p>
              A new landmark of refined living is arriving in Vesu. Designed for
              families who desire elegance, comfort, and long-term value,
              Swadesh Celestia brings together premium planning, modern
              elevation, and peaceful urban living.
            </p>

            <div className="lux-launch-features">
              <div>
                <strong>3BHK</strong>
                <span>Elite Living</span>
              </div>
              <div>
                <strong>Vesu</strong>
                <span>Prime Location</span>
              </div>
              <div>
                <strong>Premium</strong>
                <span>Lifestyle</span>
              </div>
            </div>

            <a href="#contact" className="lux-launch-btn">
              Register Interest
            </a>
          </div>
        </div>

        <div className="lux-launch-strip lux-launch-reveal">
          <h2>REDEFINED LIVING</h2>
          <p>
            Crafted with thoughtful layouts, elegant detailing, and a future-ready
            lifestyle vision for modern families in Surat.
          </p>
        </div>
      </div>
    </section>
  )
}