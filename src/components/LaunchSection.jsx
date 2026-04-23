import { useEffect, useRef, useState } from "react"

export default function LaunchSection() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`launch-section ${inView ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="launch-top">
          <div className="launch-image-wrap launch-reveal launch-image-reveal launch-delay-1">
            <div className="launch-image-card">
              <img
                src="./assets/launch.png"
                alt="Swadesh Developers Surat Project"
              />
            </div>
          </div>

          <div className="launch-content">
            <p className="launch-tag launch-reveal launch-delay-2">
              Latest Launches
            </p>

            <h2 className="launch-title launch-reveal launch-delay-3">
              Swadesh Celestia
            </h2>

            <h3 className="launch-price launch-reveal launch-delay-4">
              Premium Living in Surat, Gujarat
            </h3>

            <div className="launch-line launch-reveal launch-delay-5"></div>

            <p className="launch-text launch-reveal launch-delay-6">
              Swadesh Shivalik Valley is a thoughtfully planned residential
              development of 3BHK in Vesu, Surat, created for families who value
              comfort, modern design, and long-term lifestyle benefits. With
              practical layouts, elegant elevation, and peaceful surroundings,
              every home is designed to deliver a refined and connected living
              experience.
            </p>

            <a href="#about" className="launch-link launch-reveal launch-delay-7">
              Know More
            </a>
          </div>
        </div>

        <div className="launch-bottom launch-reveal launch-delay-8">
          <div className="launch-bottom-left">
            <h2>REDEFINED LIVING</h2>
          </div>

          <div className="launch-bottom-right">
            <p>
              At Swadesh Developers, our approach to design and construction
              reflects modern living in Surat. We create spaces that are stylish,
              functional, and built for long-term value. From planning to quality
              finishes, every detail is crafted to offer families a home that
              feels elegant, practical, and future-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}