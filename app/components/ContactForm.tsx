'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const res = await fetch('https://formspree.io/f/xdavgprq', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    setStatus(res.ok ? 'success' : 'error')
    if (res.ok) form.reset()
  }

  if (status === 'success') {
    return (
      <div className="successMsg">
        <h3>Request Received</h3>
        <p>We will send the Offering Memorandum to your inbox shortly. Edit Benyi will follow up personally within 24 hours.</p>
      </div>
    )
  }

  return (
    <form className="leadForm" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Details Request — 446 S Bonnie Brae Street" />
      <div className="formRow">
        <div className="field">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <div className="formRow">
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="field">
          <label htmlFor="role">Are you a developer or investor?</label>
          <select id="role" name="developer_or_investor">
            <option value="">Select…</option>
            <option>Yes — Active Developer</option>
            <option>Yes — Real Estate Investor</option>
            <option>Yes — Both</option>
            <option>No — Just Exploring</option>
          </select>
        </div>
      </div>
      <div className="field fieldFull">
        <label htmlFor="size">Typical project size</label>
        <select id="size" name="project_size">
          <option value="">Select…</option>
          <option>Under $5M</option>
          <option>$5M–$15M</option>
          <option>$15M–$50M</option>
          <option>$50M+</option>
        </select>
      </div>
      <div className="field fieldFull">
        <label htmlFor="comments">Questions or comments</label>
        <textarea id="comments" name="comments" />
      </div>
      {status === 'error' && (
        <p style={{ color: '#c0392b', fontSize: '0.85rem', marginBottom: '12px' }}>
          Something went wrong — please try again.
        </p>
      )}
      <button type="submit" className="submitBtn" disabled={status === 'sending'}>
        {status === 'sending' ? 'SENDING…' : 'SEND MY REQUEST →'}
      </button>
    </form>
  )
}
