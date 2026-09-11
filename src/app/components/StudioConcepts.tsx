"use client";
import { useState } from "react";

const concepts = [
  {
    name: "Sunday Studio",
    category: "SERVICE BUSINESS",
    description: "A calmer way to book your next appointment.",
    detail:
      "A service website with a simple booking journey. Try selecting a session below.",
  },
  {
    name: "Objects, considered",
    category: "ECOMMERCE",
    description: "Everyday objects. An uncommon shopping experience.",
    detail:
      "A product page concept for a Shopify storefront. Choose a finish and try the demo bag.",
  },
  {
    name: "Orbit",
    category: "WEB APPLICATION",
    description: "Less busywork. A clearer picture of your day.",
    detail:
      "A workspace concept for managing projects. Filter the tasks and mark one complete.",
  },
];
const tasks = [
  { name: "Refine homepage direction", project: "Website", date: "Today" },
  { name: "Review product collection", project: "Commerce", date: "Today" },
  { name: "Prepare launch checklist", project: "Website", date: "Tomorrow" },
];
export default function StudioConcepts() {
  const [active, setActive] = useState(0);
  const [session, setSession] = useState("Slow flow");
  const [slot, setSlot] = useState("9:00 AM");
  const [booking, setBooking] = useState(false);
  const [finish, setFinish] = useState("Chalk");
  const [bag, setBag] = useState(0);
  const [filter, setFilter] = useState("All tasks");
  const [complete, setComplete] = useState<string[]>([]);
  return (
    <div className="concepts">
      <div
        className="concept-tabs"
        role="tablist"
        aria-label="Explore studio concepts"
      >
        {concepts.map((c, i) => (
          <button
            key={c.name}
            role="tab"
            id={`concept-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`concept-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onKeyDown={(e) => {
              if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 2
                      : (active + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                setActive(next);
                document.getElementById(`concept-tab-${next}`)?.focus();
              }
            }}
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            {c.name}
            <span className="tab-arrow">↗</span>
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        tabIndex={0}
        id={`concept-panel-${active}`}
        aria-labelledby={`concept-tab-${active}`}
        className={`concept-panel concept-${active}`}
      >
        <div className="demo-toolbar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <span>
            {
              [
                "sunday.studio / sessions",
                "objects.store / collection",
                "orbit.app / workspace",
              ][active]
            }
          </span>
          <span>INTERACTIVE DEMO</span>
        </div>
        {active === 0 ? (
          <div className="wellness-demo">
            <div className="wellness-copy">
              <div className="demo-brand">
                sunday<span>STUDIO</span>
              </div>
              <p className="demo-kicker">A LITTLE SPACE FOR YOURSELF.</p>
              <h3>
                Find your
                <br />
                <em>own rhythm.</em>
              </h3>
              <p>
                Movement, a deep breath,
                <br />
                and a moment just for you.
              </p>
              <div className="wellness-art" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="booking-card">
              <p className="demo-kicker">YOUR NEXT GOOD MOMENT</p>
              <h4>Make room for you.</h4>
              <label htmlFor="session">Choose a session</label>
              <select
                id="session"
                value={session}
                onChange={(e) => {
                  setSession(e.target.value);
                  setBooking(false);
                }}
              >
                <option>Slow flow</option>
                <option>Morning stretch</option>
                <option>Mindful movement</option>
              </select>
              <label>Choose a time</label>
              <div className="time-options">
                {["9:00 AM", "12:30 PM", "5:00 PM"].map((t) => (
                  <button
                    key={t}
                    aria-pressed={slot === t}
                    onClick={() => {
                      setSlot(t);
                      setBooking(false);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="session-detail">
                <span>45 minutes</span>
                <span>All levels welcome</span>
              </div>
              <button className="demo-cta" onClick={() => setBooking(true)}>
                Preview booking <span>↗</span>
              </button>
              <p className="demo-feedback" role="status">
                {booking
                  ? `${session} at ${slot} selected. This is a demo; no appointment was booked.`
                  : "Try the booking flow. No account needed."}
              </p>
            </div>
          </div>
        ) : active === 1 ? (
          <div className="commerce-demo">
            <div className={`product-stage finish-${finish.toLowerCase()}`}>
              <span className="demo-brand">objects.</span>
              <div
                className="lamp"
                aria-label={`${finish} table lamp illustration`}
                role="img"
              >
                <div className="lamp-shade" />
                <div className="lamp-stem" />
                <div className="lamp-base" />
              </div>
              <span className="product-caption">
                FORM / FUNCTION / EVERYDAY
              </span>
            </div>
            <div className="product-details">
              <div className="product-top">
                <span>THE EVERYDAY COLLECTION</span>
                <span aria-live="polite">Bag ({bag})</span>
              </div>
              <p className="demo-kicker">OBJECT NO. 001</p>
              <h3>
                A softer
                <br />
                kind of light.
              </h3>
              <p>
                The Arc table lamp.
                <br />A sculptural companion for quiet corners.
              </p>
              <div className="product-price">
                $128 <span>CAD · DEMO PRICE</span>
              </div>
              <fieldset>
                <legend>Finish — {finish}</legend>
                <div className="swatches">
                  {["Chalk", "Clay", "Ink"].map((f) => (
                    <button
                      key={f}
                      aria-label={`${f} finish`}
                      aria-pressed={finish === f}
                      className={`swatch swatch-${f.toLowerCase()}`}
                      onClick={() => setFinish(f)}
                    />
                  ))}
                </div>
              </fieldset>
              <button className="demo-cta" onClick={() => setBag((b) => b + 1)}>
                Add to demo bag <span>+</span>
              </button>
              <div className="bag-status" role="status">
                {bag > 0 ? (
                  <>
                    <span>
                      {bag} {bag === 1 ? "item" : "items"} in your demo bag. No
                      purchase is made.
                    </span>
                    <button onClick={() => setBag(0)}>Clear bag</button>
                  </>
                ) : (
                  "A storefront concept. No payment or checkout."
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="dashboard-demo">
            <aside>
              <div className="demo-brand">◉ orbit</div>
              <span className="workspace-label">STUDIO WORKSPACE</span>
              <span className="workspace-current">▦ Overview</span>
              <span>◷ Activity</span>
              <span>□ Documents</span>
              <div className="workspace-bottom">
                <i>A</i> Alex’s workspace
              </div>
            </aside>
            <div className="dashboard-content">
              <div className="dashboard-top">
                <span>Workspace / Overview</span>
                <span className="demo-avatar">A</span>
              </div>
              <h3>A little more clarity.</h3>
              <p>Your projects, moving in the right direction.</p>
              <div className="dashboard-metrics">
                <div>
                  <span>Active projects</span>
                  <strong>03</strong>
                  <small>Across your workspace</small>
                </div>
                <div>
                  <span>Tasks complete</span>
                  <strong>
                    {String(complete.length).padStart(2, "0")}
                    <em> / 03</em>
                  </strong>
                  <small>One step at a time</small>
                </div>
                <div>
                  <span>Next milestone</span>
                  <strong>
                    Fri<span> 18</span>
                  </strong>
                  <small>Website review</small>
                </div>
              </div>
              <div className="task-heading">
                <h4>Your focus</h4>
                <select
                  aria-label="Filter demo tasks"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option>All tasks</option>
                  <option>Website</option>
                  <option>Commerce</option>
                </select>
              </div>
              <div className="task-list">
                {tasks
                  .filter((t) => filter === "All tasks" || t.project === filter)
                  .map((t) => (
                    <label
                      className={`task ${complete.includes(t.name) ? "completed" : ""}`}
                      key={t.name}
                    >
                      <input
                        type="checkbox"
                        checked={complete.includes(t.name)}
                        onChange={() =>
                          setComplete((prev) =>
                            prev.includes(t.name)
                              ? prev.filter((x) => x !== t.name)
                              : [...prev, t.name],
                          )
                        }
                      />
                      <span>
                        {t.name}
                        <small>{t.project}</small>
                      </span>
                      <time>{t.date}</time>
                    </label>
                  ))}
              </div>
              <p className="dashboard-note" role="status">
                {complete.length === 3
                  ? "All demo tasks complete. A clear desk, a clearer mind."
                  : "Sample workspace · Try checking off a task."}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="concept-description">
        <div>
          <p className="eyebrow">
            {concepts[active].category} / STUDIO CONCEPT
          </p>
          <h3>{concepts[active].description}</h3>
          <p>{concepts[active].detail}</p>
        </div>
        <a href="#contact">
          Build something like this <span>↗</span>
        </a>
      </div>
      <p className="concept-disclosure">
        Original demonstrations by Novel TechWorks. Fictional brands and sample
        data, created to explore our capabilities. Demo interactions stay in
        this page and reset on reload.
      </p>
    </div>
  );
}
