import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <img
            src="/assets/logo.png"
            alt="Swadesh Developer"
            className="footer-logo"
          />
          <p className="foot-text">
            Premium real-estate development focused on elegant design, quality construction,
            and trust-driven customer relationships.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <div>
          <h4>Our Projects</h4>

          <Link to="/projects/shivalik-valley">Shivalik Valley</Link>
          <Link to="/projects/shivalik-residency">Shivalik Residency</Link>
          <Link to="/projects/shivalik-lite">Shivalik Lite</Link>
          <Link to="/projects/shivalik-crown">Shivalik Crown</Link>
          <Link to="/projects/shivalik-candle">Shivalik Candle</Link>
          <Link to="/projects/shivalik-greens">Shivalik Greens</Link>
          <Link to="/projects/shivalik-classic">Shivalik Classic</Link>
          <Link to="/projects/shivalik-homes">Shivalik Homes</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Surat, Gujarat</p>
          <p>+91 95127 47475</p>
          <p>swadeshdevelopersinfo@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}