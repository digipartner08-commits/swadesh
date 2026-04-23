export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="./assets/hero.mp4" type="video/mp4" />
      </video>

      <a href="#projects" className="scroll-down">
        <span></span>
      </a>
    </section>
  )
}