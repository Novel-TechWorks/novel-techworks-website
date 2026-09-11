"use client";
import { useState, type FormEvent } from "react";
export default function ProjectBrief() {
  const [draft, setDraft] = useState("");
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Hi Novel TechWorks,\n\nMy name is ${data.get("name")}.\nI’m interested in: ${data.get("service")}\nTimeline: ${data.get("timeline")}\n\n${data.get("message")}\n\nReply to: ${data.get("email")}`;
    setDraft(
      `mailto:info@noveltechworks.ca?subject=${encodeURIComponent(`Project enquiry — ${data.get("service")}`)}&body=${encodeURIComponent(body)}`,
    );
  }
  return (
    <form
      className="brief-form"
      onSubmit={prepare}
      onChange={() => setDraft("")}
    >
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder="Alex Taylor"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={160}
            placeholder="alex@company.com"
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          What are you thinking?
          <select name="service">
            <option>A new website</option>
            <option>A web application</option>
            <option>A Shopify store</option>
            <option>SEO improvements</option>
            <option>Let’s figure it out</option>
          </select>
        </label>
        <label>
          Your timeline
          <select name="timeline">
            <option>Flexible / exploring</option>
            <option>Within 1–3 months</option>
            <option>Within 3–6 months</option>
          </select>
        </label>
      </div>
      <label>
        A little about your idea
        <textarea
          name="message"
          required
          rows={4}
          maxLength={1500}
          placeholder="What would you like to build or improve?"
        />
      </label>
      <button className="button primary" type="submit">
        Prepare project enquiry <span>↗</span>
      </button>
      <p className="form-note">
        We’ll prepare an email for you to review and send in your email app.
        This form doesn’t submit or store your details.
      </p>
      {draft && (
        <div className="draft-ready" role="status">
          <p>Your brief is ready.</p>
          <a href={draft}>Open email draft ↗</a>
          <small>
            If your email app doesn’t open, email info@noveltechworks.ca
            directly.
          </small>
        </div>
      )}
    </form>
  );
}
