import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageWrapRef = useRef(null)
  const imageRef = useRef(null)
  const bgTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 45,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(imageWrapRef.current, {
        opacity: 0,
        x: 90,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
gsap.fromTo(
  bgTextRef.current,
  {
    xPercent: 8,
  },
  {
    xPercent: -8,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.6,
    },
  }
)

gsap.to(imageRef.current, {
  y: -28,
  scale: 1.035,
  ease: 'none',
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1.3,
  },
})

      gsap.to(bgTextRef.current, {
        x: -160,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.8,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about-ss-section" id="about" ref={sectionRef}>
      <div className="container about-ss-grid">
        <div className="about-ss-content" ref={contentRef}>
          <p className="about-ss-tag">SWADESH DEVELOPERS</p>

          <h2 className="about-ss-title">
            REAL ESTATE IN <br />
            SURAT
          </h2>

          <p className="about-ss-text">
            Trust is built through consistent commitment, thoughtful planning,
            and a dedication to quality. Swadesh Developers creates premium
            residential spaces with refined design, strong construction, and
            long-term value for modern families.
          </p>

          <a href="#projects" className="about-ss-btn">
            Know More
          </a>
        </div>

        <div className="about-ss-image-wrap" ref={imageWrapRef}>
          <img
            ref={imageRef}
            src="/assets/about-building.jpg"
            alt="Swadesh Developers"
            className="about-ss-image"
          />
        </div>
      </div>

      <div className="about-ss-bg-text" ref={bgTextRef}>
        SWADESH
      </div>
    </section>
  )
}