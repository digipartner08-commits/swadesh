import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/project-detail.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)

    const elements = document.querySelectorAll('.pd-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pd-show')
          } else {
            entry.target.classList.remove('pd-show')
          }
        })
      },
      {
        threshold: 0.18,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="pd-not-found">
          <div className="container">
            <p className="pd-badge">Project Not Found</p>
            <h1>This project page is not available.</h1>
            <Link to="/" className="pd-btn pd-btn-primary">
              Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="pd-page">
        <section className="pd-hero">
          <div className="pd-hero-image-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="pd-hero-image"
            />
          </div>

          <div className="pd-hero-overlay"></div>

          <div className="container pd-hero-content">
            <div className="pd-hero-inner pd-reveal pd-up">
              <Link to="/" className="pd-back-link">
                Back to Projects
              </Link>

              <p className="pd-eyebrow">{project.type}</p>
              <h1>{project.title}</h1>

              <div className="pd-location">
                <span>{project.location}</span>
              </div>

              <p className="pd-hero-text">{project.description}</p>
            </div>
          </div>
        </section>

        <section className="pd-section" id="project-overview">
          <div className="container pd-overview-grid">
            <div className="pd-overview-left pd-reveal pd-left">
              <p className="pd-section-tag">About Project</p>
              <h2 className="pd-section-title">
                A premium address designed for modern families
              </h2>
              <p className="pd-section-text">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="pd-overview-right pd-reveal pd-right">
              <div className="pd-spec-card">
                <div>
                  <h4>Configuration</h4>
                  <p>{project.config}</p>
                </div>
              </div>

              <div className="pd-spec-card">
                <div>
                  <h4>Total Units</h4>
                  <p>{project.units} Units</p>
                </div>
              </div>

              <div className="pd-spec-card">
                <div>
                  <h4>Area</h4>
                  <p>{project.area || 'Premium Planning'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section pd-section-soft">
          <div className="container">
            <div className="pd-section-head center pd-reveal pd-up">
              <p className="pd-section-tag">Project Highlights</p>
              <h2 className="pd-section-title">
                Crafted for <span>Luxury Living</span>
              </h2>
            </div>

            <div className="pd-highlights-grid">
              {(project.highlights || []).map((item, index) => (
                <div
                  key={index}
                  className="pd-highlight-card pd-reveal pd-up"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="pd-highlight-icon">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="container">
            <div className="pd-section-head center pd-reveal pd-up">
              <p className="pd-section-tag">Gallery</p>
              <h2 className="pd-section-title">Visual Experience</h2>
            </div>

            <div className="pd-gallery-grid">
              {(project.gallery || []).map((img, index) => (
                <div
                  className="pd-gallery-card pd-reveal pd-zoom"
                  key={index}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <img src={img} alt={`${project.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pd-section pd-section-soft">
          <div className="container pd-plan-wrap">
            <div className="pd-plan-content pd-reveal pd-left">
              <p className="pd-section-tag">Floor Plan</p>
              <h2 className="pd-section-title">Thoughtfully planned spaces</h2>
              <p className="pd-section-text">
                Explore layouts designed for better comfort, practical use, and
                a refined living experience.
              </p>
            </div>

            <div
              className="pd-plan-card pd-plan-card-interactive pd-reveal pd-right"
              onMouseMove={(e) => {
                const card = e.currentTarget
                const img = card.querySelector('.pd-plan-image')

                const rect = card.getBoundingClientRect()
                const x = ((e.clientX - rect.left) / rect.width) * 100
                const y = ((e.clientY - rect.top) / rect.height) * 100

                if (img) {
                  img.style.transformOrigin = `${x}% ${y}%`
                  img.style.transform = 'scale(1.9)'
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.pd-plan-image')
                if (img) {
                  img.style.transformOrigin = 'center center'
                  img.style.transform = 'scale(1)'
                }
              }}
            >
              <div className="pd-plan-image-wrap">
                <img
                  src={project.planImage || project.image}
                  alt={project.title}
                  className="pd-plan-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="container">
            <div className="pd-section-head center pd-reveal pd-up">
              <p className="pd-section-tag">Location</p>
              <h2 className="pd-section-title">
                Well Connected <span>Prime Address</span>
              </h2>
              <p className="pd-section-text pd-location-intro">
                Enjoy a location that offers daily convenience, strong
                connectivity, and a comfortable lifestyle for modern families.
              </p>
            </div>

            <div className="pd-location-grid">
              <div className="pd-location-card pd-reveal pd-left">
                <p className="pd-location-label">Project Address</p>
                <h3>{project.location}</h3>
                <p>
                  Strategically positioned in a fast-growing area with smooth
                  access to key city routes, lifestyle needs, and essential
                  services.
                </p>

                <div className="pd-location-points">
                  <div className="pd-location-point">
                    <div className="pd-location-icon">✓</div>
                    <span>Easy city connectivity</span>
                  </div>
                  <div className="pd-location-point">
                    <div className="pd-location-icon">✓</div>
                    <span>Nearby schools and hospitals</span>
                  </div>
                  <div className="pd-location-point">
                    <div className="pd-location-icon">✓</div>
                    <span>Peaceful residential surroundings</span>
                  </div>
                  <div className="pd-location-point">
                    <div className="pd-location-icon">✓</div>
                    <span>Strong future growth potential</span>
                  </div>
                </div>
              </div>

              <div className="pd-map-card pd-reveal pd-right">
                {project.mapEmbed ? (
                  <iframe
                    src={project.mapEmbed}
                    title={`${project.title} Location`}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="pd-map-placeholder">
                    <div className="pd-map-pin">📍</div>
                    <h3>{project.location}</h3>
                    <p>Google Map embed can be added here for this project.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="pd-cta">
          <div className="container">
            <div className="pd-cta-box pd-reveal pd-up">
              <p className="pd-section-tag">Let’s Connect</p>
              <h2>Interested in {project.title}?</h2>
              <p>
                Discover a better lifestyle with premium design, trusted
                quality, and a modern residential experience.
              </p>

              <div className="pd-hero-actions center">
                <a href="/#contact" className="pd-btn pd-btn-primary">
                  Book an Enquiry
                </a>

                <Link to="/" className="pd-btn pd-btn-secondary">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}