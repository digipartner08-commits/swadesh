import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const imageWrapRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageWrapRef.current, {
        opacity: 0,
        x: -80,
      })

      gsap.set(contentRef.current, {
        opacity: 0,
        x: 80,
      })

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 60,
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(imageWrapRef.current, {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power3.out',
          })

          gsap.to(contentRef.current, {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.15,
          })

          gsap.to(cardsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power3.out',
            delay: 0.3,
          })
        },
        onLeaveBack: () => {
          gsap.set(imageWrapRef.current, {
            opacity: 0,
            x: -80,
          })

          gsap.set(contentRef.current, {
            opacity: 0,
            x: 80,
          })

          gsap.set(cardsRef.current, {
            opacity: 0,
            y: 60,
          })
        },
      })

      gsap.to(imageRef.current, {
        y: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.about-premium-glow-1', {
        y: -60,
        x: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.about-premium-glow-2', {
        y: 50,
        x: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about-section about-premium-section" id="about" ref={sectionRef}>
      <div className="about-premium-glow about-premium-glow-1"></div>
      <div className="about-premium-glow about-premium-glow-2"></div>

      <div className="container about-premium-grid">
        {/* LEFT IMAGE */}
        <div className="about-premium-image-wrap" ref={imageWrapRef}>
          <div className="about-premium-image-card" ref={imageRef}>
            <img
              src="/assets/about-building.jpg"
              alt="Swadesh Developers premium project"
              className="about-premium-image"
            />

            <div className="about-premium-badge about-premium-badge-top">
              <span className="about-premium-badge-number">10+</span>
              <span className="about-premium-badge-text">Years of Vision</span>
            </div>

            <div className="about-premium-badge about-premium-badge-bottom">
              <span className="about-premium-badge-number">Premium</span>
              <span className="about-premium-badge-text">Living Experience</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-premium-content" ref={contentRef}>
          <p className="about-tag">Who We Are</p>

          <h2 className="about-title">
            Crafting spaces with <span>trust, style,</span> and long-term value
          </h2>

          <p className="about-text">
            Swadesh Developers focuses on premium real estate development in
            Surat, Gujarat, with a strong commitment to design quality,
            functionality, and customer satisfaction. Every project is carefully
            planned to deliver better living, strong construction, and a refined
            lifestyle experience for modern families.
          </p>

          <div className="about-premium-cards">
            <div
              className="about-card about-card-premium"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <span className="about-card-number">01</span>
              <h3>Luxury Design</h3>
              <p>
                Premium elevation, modern layouts, and refined aesthetic details
                that enhance everyday living.
              </p>
            </div>

            <div
              className="about-card about-card-premium"
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <span className="about-card-number">02</span>
              <h3>Smart Planning</h3>
              <p>
                Efficient use of space, comfort-first layouts, and practical
                design built for real life.
              </p>
            </div>

            <div
              className="about-card about-card-premium"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <span className="about-card-number">03</span>
              <h3>Trusted Quality</h3>
              <p>
                Built with strong materials and a commitment to long-term value
                and durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}