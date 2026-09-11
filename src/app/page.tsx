import Experience from "./components/Experience";
import StudioConcepts from "./components/StudioConcepts";
import ProjectBrief from "./components/ProjectBrief";

const offers = [
  [
    "01",
    "A website with presence.",
    "Web design & development",
    "Responsive design, clear content structure, fast pages, and an easy path to get in touch.",
  ],
  [
    "02",
    "Software that fits your day.",
    "Custom web applications",
    "Dashboards, client portals, and connected workflows built around how your business operates.",
  ],
  [
    "03",
    "A store worth exploring.",
    "Shopify & ecommerce",
    "Store setup, product organisation, and a considered journey from discovery to checkout.",
  ],
  [
    "04",
    "Built to be found.",
    "SEO foundations",
    "Technical SEO, page structure, metadata, and practical improvements to your search presence.",
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
          novel<span>✳</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#concepts">Concepts</a>
          <a href="#services">Capabilities</a>
          <a href="#studio">Studio</a>
        </nav>
        <a className="nav-contact" href="#contact">
          Have a project? <span>↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-top">
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT DIGITAL STUDIO
            </p>
            <p className="location">
              BASED IN CANADA
              <br />
              BUILDING FOR THE WEB
            </p>
          </div>
          <h1 className="hero-title">
            A novel
            <br />
            <span>way forward.</span>
          </h1>
          <Experience />
          <div className="hero-bottom">
            <p>
              Thoughtful websites.
              <br />
              Useful software.
              <br />
              <span>Made for your next chapter.</span>
            </p>
            <a
              className="round-link"
              href="#concepts"
              aria-label="Explore studio concepts"
            >
              ↓
            </a>
          </div>
          <div className="hero-index">
            NOVEL TECHWORKS <span>SCROLL TO EXPLORE</span> ©{" "}
            {new Date().getFullYear()}
          </div>
        </section>
        <section className="concept-section section-wrap" id="concepts">
          <div className="section-heading">
            <p className="eyebrow">01 / STUDIO CONCEPTS</p>
            <div>
              <h2>
                A little look
                <br />
                at what’s possible.
              </h2>
              <p>
                Three ideas, brought to life. Explore these interactive studio
                demos to get a feel for what we can build together.
              </p>
            </div>
          </div>
          <StudioConcepts />
        </section>
        <section className="manifesto section-wrap">
          <p className="eyebrow">GOOD DESIGN HAS A JOB TO DO.</p>
          <h2>
            Make it clear.
            <br />
            Make it useful.
            <br />
            <span>Make it feel effortless.</span>
          </h2>
          <p>
            Every interaction is a chance to make someone’s day a little easier.
            That’s where we start.
          </p>
        </section>
        <section className="capabilities section-wrap" id="services">
          <div className="section-heading">
            <p className="eyebrow">02 / CAPABILITIES</p>
            <div>
              <h2>
                From first impression
                <br />
                to everyday essential.
              </h2>
              <p>
                A focused set of services. A considered approach to every one.
              </p>
            </div>
          </div>
          <div className="offers">
            {offers.map(([n, title, label, body]) => (
              <article className="offer" key={n}>
                <span className="offer-number">{n}</span>
                <div>
                  <p className="eyebrow">{label}</p>
                  <h3>{title}</h3>
                </div>
                <p>{body}</p>
                <a href="#contact" aria-label={`Enquire about ${label}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="studio section-wrap" id="studio">
          <div className="studio-mark" aria-hidden="true">
            <span>n.</span>
            <div>
              INDEPENDENT IN SPIRIT.
              <br />
              PERSONAL BY DESIGN.
            </div>
          </div>
          <div className="studio-copy">
            <p className="eyebrow">03 / THE PERSON BEHIND NOVEL</p>
            <h2>
              Hi, I’m Abhinav.
              <br />
              <span>
                Let’s build something
                <br />
                that matters to you.
              </span>
            </h2>
            <p>
              Novel TechWorks is where I bring design and software development
              together. I’m interested in the details that make a website feel
              right—and the systems that make it work.
            </p>
            <p>
              Tell me what you’re trying to do. We’ll start with a conversation,
              shape a clear scope, and work through the details together.
            </p>
            <a className="text-link" href="#contact">
              Start a conversation ↗
            </a>
          </div>
        </section>
        <section className="process section-wrap" id="process">
          <p className="eyebrow">04 / A SIMPLE WAY TO WORK</p>
          <div className="steps">
            {[
              [
                "01",
                "Talk it through.",
                "We discuss your goals, audience, and constraints. You get a proposed scope and a clear next step.",
              ],
              [
                "02",
                "Make it together.",
                "Design and development happen in stages, with opportunities to review and refine as we go.",
              ],
              [
                "03",
                "Launch with care.",
                "We check the details, prepare the handover, and agree on the support you need after launch.",
              ],
            ].map(([n, title, body]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="contact section-wrap" id="contact">
          <div>
            <p className="eyebrow">YOUR NEXT CHAPTER</p>
            <h2>
              Got an idea?
              <br />
              <span>Let’s hear it.</span>
            </h2>
            <p>
              A rough sketch. A business problem.
              <br />A “what if.” That’s enough to start.
            </p>
            <a className="email" href="mailto:info@noveltechworks.ca">
              info@noveltechworks.ca ↗
            </a>
            <p className="hours">Monday–Friday · 9 AM–5 PM Eastern</p>
          </div>
          <ProjectBrief />
        </section>
      </main>
      <footer className="footer">
        <a href="#home" className="footer-wordmark">
          novel techworks<span>↗</span>
        </a>
        <div>
          <span>© {new Date().getFullYear()} Novel TechWorks Ltd.</span>
          <span>DESIGNED WITH INTENTION.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
