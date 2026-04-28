import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [inView, setInView] = useState(false);

  // 👇 CUSTOM ORDER
  const customOrder = [
    "shivalik-crown",
    "shivalik-classic",
    "shivalik-greens",
    "shivalik-candle",
    "shivalik-lite",
    "shivalik-valley",
    "shivalik-residency",
    "shivalik-homes",
  ];

  const orderedProjects = customOrder
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .filter(
      (item, index, self) => index === self.findIndex((p) => p.id === item.id),
    );
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section
      className={`ss-projects-section ${inView ? "is-visible" : ""}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="container ss-projects-header">
        <div>
          <p className="ss-projects-tag ss-project-reveal ss-delay-1">
            Our Projects
          </p>
          <h2 className="ss-projects-title ss-project-reveal ss-delay-2">
            Signature <span>Developments</span>
          </h2>
        </div>

        <div className="ss-slider-controls ss-project-reveal ss-delay-3">
          <button className="ss-prev" onClick={scrollLeft}>
            ‹
          </button>
          <button className="ss-next" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>

      <div
        className="ss-projects-slider-wrap ss-project-reveal ss-delay-4"
        ref={sliderRef}
      >
        <div className="ss-projects-slider">
          {orderedProjects.map((project, index) => (
            <Link
              to={`/projects/${project.slug}`}
              className={`ss-project-card ss-card-delay-${(index % 4) + 1}`}
              key={project.id}
            >
              <img
                src={project.image}
                alt={project.title}
                className="ss-project-image"
              />

              <div className="ss-project-overlay">
                <div className="ss-project-bottom">
                  <div className="ss-project-left">
                    <div className="ss-project-line"></div>

                    <div className="ss-project-copy">
                      <h3>{project.title}</h3>
                      <p>{project.location}</p>
                    </div>
                  </div>

                  <div className="ss-project-btn-wrap">
                    <span className="ss-project-btn">Know More</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
