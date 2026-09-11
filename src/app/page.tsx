import Experience from "./components/Experience";

const services = [
  [
    "01",
    "Websites.",
    "A first impression that lasts.",
    "Thoughtful design meets fast, responsive development. A home for your brand that feels as good as it performs.",
    "website",
  ],
  [
    "02",
    "Web applications.",
    "Big ideas. Beautifully engineered.",
    "Custom tools and digital products built around your business, with room to grow as your ambitions do.",
    "application",
  ],
  [
    "03",
    "Commerce.",
    "Turn discovery into desire.",
    "Shopify stores with a considered shopping experience, from the first product view to the final checkout.",
    "commerce",
  ],
  [
    "04",
    "Search & growth.",
    "Be there when it matters.",
    "Technical SEO and clear content foundations that help the right people discover what you do.",
    "growth",
  ],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="navigation">
        <a className="brand" href="#home" aria-label="Novel TechWorks home">
          <span className="brand-icon">
            n<span>.</span>
          </span>
          <span>
            novel<span className="brand-light"> techworks</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Expertise</a>
          <a href="#about">Studio</a>
          <a href="#process">Approach</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <span>↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT DIGITAL STUDIO ·
              CANADA
            </p>
            <h1>
              Great ideas.
              <br />
              Extraordinary
              <br />
              <span className="muted">digital experiences.</span>
            </h1>
            <p className="hero-description">
              We bring ambitious brands to life through
              <br className="desktop-break" /> design, development, and a little
              unexpected.
            </p>
            <a className="button primary" href="#services">
              Explore what’s possible <span>↗</span>
            </a>
          </div>
          <Experience />
          <div className="hero-foot">
            <span>DESIGNED WITH INTENTION. BUILT FOR IMPACT.</span>
            <a href="#services">
              SCROLL TO DISCOVER <span>↓</span>
            </a>
          </div>
        </section>
        <section className="intro section-wrap" id="about">
          <p className="eyebrow">SMALL STUDIO. EXPANSIVE THINKING.</p>
          <h2>
            Technology is the medium.
            <br />
            <span className="muted">Your ambition is the starting point.</span>
          </h2>
          <div className="intro-bottom">
            <span className="small-mark">✳</span>
            <p>
              We’re Novel TechWorks. A digital partner for businesses ready for
              their next chapter. We connect thoughtful design with dependable
              engineering to make the complex feel effortless.
            </p>
          </div>
        </section>
        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <p className="eyebrow">01 / OUR EXPERTISE</p>
            <h2>Everything connects.</h2>
            <p>
              From your first website to your next big platform.
              <br />
              One partner, every step of the way.
            </p>
          </div>
          <div className="service-grid">
            {services.map(([number, title, subtitle, description, type]) => (
              <a
                href="#contact"
                className={`service-card ${type}`}
                key={number}
              >
                <div className="card-top">
                  <span>{number}</span>
                  <span className="card-arrow">↗</span>
                </div>
                <div className="service-art" aria-hidden="true">
                  {type === "website" ? (
                    <div className="browser-art">
                      <div className="browser-dots">● ● ●</div>
                      <div className="browser-line" />
                      <div className="browser-line short" />
                      <div className="browser-orb" />
                    </div>
                  ) : type === "application" ? (
                    <div className="stack-art">
                      <i />
                      <i />
                      <i />
                    </div>
                  ) : type === "commerce" ? (
                    <div className="bag-art">
                      <i />
                      <span>n.</span>
                    </div>
                  ) : (
                    <div className="growth-art">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                </div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="statement">
          <p className="eyebrow">THE NOVEL DIFFERENCE</p>
          <h2>
            Every pixel.
            <br />
            Every interaction.
            <br />
            <span>Every detail matters.</span>
          </h2>
          <p>
            Beautiful on the surface.
            <br />
            Considered all the way through.
          </p>
          <div className="statement-orbit" aria-hidden="true" />
        </section>
        <section className="process section-wrap" id="process">
          <div className="section-heading">
            <p className="eyebrow">02 / HOW WE WORK</p>
            <h2>
              A clear path.
              <br />
              <span className="muted">An exceptional outcome.</span>
            </h2>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Discover",
                "We listen first. Your goals, your audience, and the opportunity ahead shape everything we do.",
              ],
              [
                "02",
                "Design & build",
                "Ideas become experiences. We design, develop, and refine with you involved along the way.",
              ],
              [
                "03",
                "Launch & evolve",
                "Tested with care. Launched with confidence. Supported as your business moves forward.",
              ],
            ].map(([n, title, body]) => (
              <article key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="contact section-wrap" id="contact">
          <p className="eyebrow">
            <span className="status-dot" /> LET’S MAKE SOMETHING MEANINGFUL
          </p>
          <h2>
            Your next chapter
            <br />
            starts with <span>a hello.</span>
          </h2>
          <a className="button primary" href="mailto:info@noveltechworks.ca">
            Tell us about your project <span>↗</span>
          </a>
          <a className="email" href="mailto:info@noveltechworks.ca">
            info@noveltechworks.ca
          </a>
          <p className="contact-hours">Monday–Friday · 9 AM–5 PM Eastern</p>
        </section>
      </main>
      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-icon">
            n<span>.</span>
          </span>
          <span>
            novel<span className="brand-light"> techworks</span>
          </span>
        </a>
        <span>© {new Date().getFullYear()} Novel TechWorks Ltd.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
