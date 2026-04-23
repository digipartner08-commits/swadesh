import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const cardsRef = useRef([])
  const fieldsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, {
        opacity: 0,
        x: -80,
      })

      gsap.set(rightRef.current, {
        opacity: 0,
        x: 80,
      })

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 50,
      })

      gsap.set(fieldsRef.current, {
        opacity: 0,
        y: 35,
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to(leftRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
          })

          gsap.to(rightRef.current, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.12,
          })

          gsap.to(cardsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
          })

          gsap.to(fieldsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 0.25,
          })
        },
        onLeaveBack: () => {
          gsap.set(leftRef.current, {
            opacity: 0,
            x: -80,
          })

          gsap.set(rightRef.current, {
            opacity: 0,
            x: 80,
          })

          gsap.set(cardsRef.current, {
            opacity: 0,
            y: 50,
          })

          gsap.set(fieldsRef.current, {
            opacity: 0,
            y: 35,
          })
        },
      })

      gsap.to('.contact-clean-glow-1', {
        y: -40,
        x: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.contact-clean-glow-2', {
        y: 45,
        x: -18,
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
    <section className="contact-clean-section" id="contact" ref={sectionRef}>
      <div className="contact-clean-glow contact-clean-glow-1"></div>
      <div className="contact-clean-glow contact-clean-glow-2"></div>

      <div className="container">
        <div className="contact-clean-grid">
          <div className="contact-clean-left" ref={leftRef}>
            <p className="contact-clean-tag">Get In Touch</p>

            <h2 className="contact-clean-title">
              Let’s Discuss Your <span>Dream Home</span>
            </h2>

            <p className="contact-clean-text">
              Our expert team is ready to guide you through every step — from
              project details to site visits and booking assistance in Surat.
            </p>

            <div className="contact-clean-cards">
              <div
                className="contact-clean-card"
                ref={(el) => (cardsRef.current[0] = el)}
              >
                <div className="contact-clean-icon">📞</div>
                <div>
                  <p>Phone</p>
                  <h4>+91 95127 47475</h4>
                </div>
              </div>

              <div
                className="contact-clean-card"
                ref={(el) => (cardsRef.current[1] = el)}
              >
                <div className="contact-clean-icon">✉️</div>
                <div>
                  <p>Email</p>
                  <h4>swadeshdevelopersinfo@gmail.com</h4>
                </div>
              </div>

              <div
                className="contact-clean-card"
                ref={(el) => (cardsRef.current[2] = el)}
              >
                <div className="contact-clean-icon">📍</div>
                <div>
                  <p>Address</p>
                  <h4>Surat, Gujarat, India</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-clean-right" ref={rightRef}>
            <h3 className="contact-form-heading">Send an Enquiry</h3>
            <p className="contact-form-subtext">
              Fill in the form below and our team will get back to you shortly.
            </p>

            <form className="contact-clean-form">
              <div className="contact-row">
                <div
                  className="contact-field"
                  ref={(el) => (fieldsRef.current[0] = el)}
                >
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" />
                </div>

                <div
                  className="contact-field"
                  ref={(el) => (fieldsRef.current[1] = el)}
                >
                  <label>Phone Number *</label>
                  <input type="text" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div
                className="contact-field"
                ref={(el) => (fieldsRef.current[2] = el)}
              >
                <label>Email Address (Optional)</label>
                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="contact-row">
                <div
                  className="contact-field"
                  ref={(el) => (fieldsRef.current[3] = el)}
                >
                  <label>Interested In</label>
                  <select>
                    <option>Select a project</option>
                    <option>Shivalik Valley</option>
                    <option>Shivalik Residency</option>
                    <option>Shivalik Lite</option>
                    <option>Shivalik Crown</option>
                    <option>Shivalik Height</option>
                    <option>Shivalik Greens</option>
                    <option>Shivalik Avenue</option>
                    <option>Shivalik Homes</option>
                  </select>
                </div>

                <div
                  className="contact-field"
                  ref={(el) => (fieldsRef.current[4] = el)}
                >
                  <label>Budget Range</label>
                  <select>
                    <option>Select range</option>
                    <option>Below 25 Lakh</option>
                    <option>25 - 50 Lakh</option>
                    <option>50 Lakh - 1 Cr</option>
                    <option>Above 1 Cr</option>
                  </select>
                </div>
              </div>

              <div
                className="contact-field"
                ref={(el) => (fieldsRef.current[5] = el)}
              >
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div ref={(el) => (fieldsRef.current[6] = el)}>
                <button type="submit" className="contact-submit-btn">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}