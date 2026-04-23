export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src="./assets/logo.png"
            alt="Swadesh Developer"
            className="footer-logo"
          />
          <p className="foot-text">
            Premium real-estate development focused on elegant design, quality construction,
            and trust-driven customer relationships.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* PROJECTS SECTION */}
        <div>
          <h4>Our Projects</h4>

          <a href="/projects/shivalik-valley">Shivalik Valley</a>
          <a href="/projects/shivalik-residency">Shivalik Residency</a>
          <a href="/projects/shivalik-lite">Shivalik Lite</a>
          <a href="/projects/shivalik-crown">Shivalik Crown</a>
          <a href="/projects/shivalik-height">Shivalik Height</a>
          <a href="/projects/shivalik-greens">Shivalik Greens</a>
          <a href="/projects/shivalik-avenue">Shivalik Avenue</a>
          <a href="/projects/shivalik-homes">Shivalik Homes</a>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>
          <p>Surat, Gujarat</p>
          <p>+91 95127 47475</p>
          <p>swadeshdevelopersinfo@gmail.com</p>
        </div>

      </div>
    </footer>
  )
}