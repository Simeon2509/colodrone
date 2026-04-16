'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group"><label>First Name</label><input type="text" placeholder="Alex" required /></div>
        <div className="form-group"><label>Last Name</label><input type="text" placeholder="Rivera" required /></div>
      </div>
      <div className="form-group"><label>Email</label><input type="email" placeholder="alex@email.com" required /></div>
      <div className="form-group"><label>Phone</label><input type="tel" placeholder="(303) 555-0000" /></div>
      <div className="form-group">
        <label>Service Needed</label>
        <select>
          <option value="">Select a service...</option>
          <option>Real Estate Photography</option>
          <option>Wedding / Event</option>
          <option>Construction Progress</option>
          <option>Roof / Property Inspection</option>
          <option>Airbnb / Short-Term Rental</option>
          <option>Venue / Hotel / Resort</option>
          <option>Golf Course</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Location in Colorado</label>
        <input type="text" placeholder="Denver, Boulder, Vail..." />
      </div>
      <div className="form-group">
        <label>Project Details</label>
        <textarea placeholder="Tell us about your project, date, and what you&apos;re looking for..."></textarea>
      </div>
      <button
        type="submit"
        className="form-submit"
        disabled={submitted}
        style={submitted ? { background: '#16a34a' } : {}}
      >
        {submitted ? 'Message Sent! We will be in touch within 24 hours.' : 'Send Request — hello@colodrone.com'}
      </button>
    </form>
  )
}
