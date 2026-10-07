import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personal } from "../../data";
import { Reveal, SectionHeader } from "../UI";

const contactItems = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mohamed-ashfak", href: personal.linkedin },
  { icon: MapPin, label: "Location", value: personal.location },
];

function Field({ label, name, value, onChange, type = "text", textarea = false, required = false, autoComplete }) {
  const id = `contact-${name}`;
  const Element = textarea ? "textarea" : "input";
  return (
    <label className={`form-field ${textarea ? "form-field--wide" : ""}`} htmlFor={id}>
      <span>{label}</span>
      <Element id={id} name={name} value={value} onChange={onChange} type={textarea ? undefined : type} rows={textarea ? 6 : undefined} required={required} autoComplete={autoComplete} />
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, `Mobile: ${form.mobile}`, "", form.message].join("\n");
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <SectionHeader
          label="// get_in_touch"
          title="Contact Me"
          sub="Open to backend and Gen AI opportunities focused on production-ready systems"
        />

        <div className="contact-layout">
          <Reveal className="contact-copy">
            <h3>Let&apos;s Connect</h3>
            <p>I&apos;m open to discussing backend engineering challenges, Gen AI projects, and new career opportunities. Send a message and I&apos;ll respond promptly.</p>
            <div className="contact-list">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div className="contact-item" key={label}>
                  <Icon size={19} />
                  <div>
                    <span>{label}</span>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{value}</a> : <p>{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={0.08}>
            <form className="contact-form" onSubmit={submit}>
              <Field label="Full Name" name="name" value={form.name} onChange={update} required autoComplete="name" />
              <Field label="Email" name="email" value={form.email} onChange={update} required type="email" autoComplete="email" />
              <Field label="Mobile" name="mobile" value={form.mobile} onChange={update} type="tel" autoComplete="tel" />
              <Field label="Subject" name="subject" value={form.subject} onChange={update} required />
              <Field label="Your Message" name="message" value={form.message} onChange={update} required textarea />
              <button className="button button--primary form-submit" type="submit">Send Message <ArrowUpRight size={17} /></button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
