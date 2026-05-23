// src/pages/Contact.jsx
import { useState } from 'react'

const faqs = [
    {
        q: 'Are your Yorkies KC registered?',
        a: 'Yes, all our puppies come with full Kennel Club registration and a full health check from our vet before they go to their new homes.',
    },
    {
        q: 'How long is the waiting list?',
        a: 'Typically 3–6 months depending on the litter. We recommend getting in touch early — our pups go fast!',
    },
    {
        q: 'Do you offer support after adoption?',
        a: 'Absolutely. We stay in touch with every family and are always available for advice on feeding, grooming, and general Yorkie chaos management.',
    },
    {
        q: 'Can we visit the puppies before adopting?',
        a: 'We encourage it! Visits are by appointment only so the pups aren\'t overwhelmed. Drop us a message and we\'ll arrange a time.',
    },
]

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>

            {/* ── Header ── */}
            <section style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{
                    fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.07em',
                    textTransform: 'uppercase', color: 'var(--color-primary)',
                    marginBottom: 'var(--space-3)',
                }}>
                    📬 Contact
                </p>
                <h1 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)',
                    fontWeight: 800, lineHeight: 1.05, marginBottom: 'var(--space-4)',
                }}>
                    Do you have{' '}
                    <span style={{ color: 'var(--color-primary)' }}>questions?</span>
                </h1>
                <p style={{
                    fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)',
                    maxWidth: '52ch', lineHeight: 1.7,
                }}>
                    Talk to us! We're a small family breeder and we actually read every message.
                    No bots, no auto-replies — just us and the dogs.
                </p>
            </section>

            {/* ── Two-column layout ── */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
                gap: 'var(--space-8)',
                marginBottom: 'var(--space-16)',
            }}>

                {/* ── Contact Form ── */}
                <div style={{
                    background: 'var(--color-surface)',
                    border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-8)',
                    boxShadow: 'var(--shadow-sm)',
                }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: 'var(--space-10) 0' }}>
                            <p style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>🐾</p>
                            <h2 style={{
                                fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                                fontWeight: 700, marginBottom: 'var(--space-3)',
                            }}>
                                Message received!
                            </h2>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', maxWidth: '32ch', margin: '0 auto var(--space-6)' }}>
                                We'll get back to you within 24 hours. The dogs are reviewing your application now.
                            </p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                                style={{
                                    padding: 'var(--space-2) var(--space-5)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-border)',
                                    background: 'none', color: 'var(--color-text-muted)',
                                    fontSize: 'var(--text-sm)', fontWeight: 600, cursor: 'pointer',
                                }}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <h2 style={{
                                fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                                fontWeight: 700, marginBottom: 'var(--space-6)',
                            }}>
                                Send us a message
                            </h2>

                            {/* Name */}
                            <div style={{ marginBottom: 'var(--space-5)' }}>
                                <label htmlFor="name" style={{
                                    display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600,
                                    marginBottom: 'var(--space-2)', color: 'var(--color-text)',
                                }}>
                                    Your name
                                </label>
                                <input
                                    id="name" name="name" type="text"
                                    placeholder="e.g. Jane Smith"
                                    value={form.name} onChange={handleChange} required
                                    style={{
                                        width: '100%', padding: 'var(--space-3) var(--space-4)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-border)',
                                        background: 'var(--color-bg)',
                                        fontSize: 'var(--text-sm)', color: 'var(--color-text)',
                                        outline: 'none',
                                        transition: 'border-color 180ms ease, box-shadow 180ms ease',
                                    }}
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--color-primary)'
                                        e.target.style.boxShadow = '0 0 0 3px var(--color-primary-highlight)'
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = 'var(--color-border)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: 'var(--space-5)' }}>
                                <label htmlFor="email" style={{
                                    display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600,
                                    marginBottom: 'var(--space-2)', color: 'var(--color-text)',
                                }}>
                                    Email address
                                </label>
                                <input
                                    id="email" name="email" type="email"
                                    placeholder="jane@example.com"
                                    value={form.email} onChange={handleChange} required
                                    style={{
                                        width: '100%', padding: 'var(--space-3) var(--space-4)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-border)',
                                        background: 'var(--color-bg)',
                                        fontSize: 'var(--text-sm)', color: 'var(--color-text)',
                                        outline: 'none',
                                        transition: 'border-color 180ms ease, box-shadow 180ms ease',
                                    }}
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--color-primary)'
                                        e.target.style.boxShadow = '0 0 0 3px var(--color-primary-highlight)'
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = 'var(--color-border)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: 'var(--space-6)' }}>
                                <label htmlFor="message" style={{
                                    display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600,
                                    marginBottom: 'var(--space-2)', color: 'var(--color-text)',
                                }}>
                                    Message
                                </label>
                                <textarea
                                    id="message" name="message" rows={5}
                                    placeholder="Tell us what you'd like to know..."
                                    value={form.message} onChange={handleChange} required
                                    style={{
                                        width: '100%', padding: 'var(--space-3) var(--space-4)',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-border)',
                                        background: 'var(--color-bg)',
                                        fontSize: 'var(--text-sm)', color: 'var(--color-text)',
                                        resize: 'vertical', outline: 'none',
                                        transition: 'border-color 180ms ease, box-shadow 180ms ease',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                    onFocus={e => {
                                        e.target.style.borderColor = 'var(--color-primary)'
                                        e.target.style.boxShadow = '0 0 0 3px var(--color-primary-highlight)'
                                    }}
                                    onBlur={e => {
                                        e.target.style.borderColor = 'var(--color-border)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>

                            <button type="submit" style={{
                                width: '100%', padding: 'var(--space-3) var(--space-6)',
                                borderRadius: 'var(--radius-md)',
                                background: 'var(--color-primary)', color: '#fff',
                                fontWeight: 600, fontSize: 'var(--text-sm)',
                                border: 'none', cursor: 'pointer',
                            }}>
                                Send message →
                            </button>
                        </form>
                    )}
                </div>

                {/* ── Info Panel ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

                    {/* Contact details */}
                    {[
                        { icon: '📧', label: 'Email', value: 'hello@yorkiewolfpack.com' },
                        { icon: '📱', label: 'Phone', value: '+44 7700 900 123' },
                        { icon: '📍', label: 'Location', value: 'Yorkshire, United Kingdom' },
                        { icon: '🕐', label: 'Response time', value: 'Usually within 24 hours' },
                    ].map(item => (
                        <div key={item.label} style={{
                            display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                            background: 'var(--color-surface)',
                            border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--space-4) var(--space-5)',
                            boxShadow: 'var(--shadow-sm)',
                        }}>
                            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                            <div>
                                <div style={{
                                    fontSize: 'var(--text-xs)', fontWeight: 600,
                                    color: 'var(--color-text-faint)', textTransform: 'uppercase',
                                    letterSpacing: '0.05em', marginBottom: 'var(--space-1)',
                                }}>
                                    {item.label}
                                </div>
                                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Social note */}
                    <div style={{
                        background: 'var(--color-primary-highlight)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--space-5)',
                        marginTop: 'var(--space-2)',
                    }}>
                        <p style={{
                            fontSize: 'var(--text-sm)', color: 'var(--color-primary)',
                            fontWeight: 500, lineHeight: 1.6,
                        }}>
                            🐶 <strong>Follow us on Instagram</strong> @yorkiewolfpack for daily chaos,
                            puppy updates, and Gremlin doing things she absolutely should not be doing.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── FAQ ── */}
            <section>
                <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                    fontWeight: 700, marginBottom: 'var(--space-6)',
                }}>
                    Frequently asked questions
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{
                            background: 'var(--color-surface)',
                            border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)',
                        }}>
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                aria-expanded={openFaq === i}
                                style={{
                                    width: '100%', display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'center', gap: 'var(--space-4)',
                                    padding: 'var(--space-4) var(--space-5)',
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{faq.q}</span>
                                <span style={{
                                    flexShrink: 0, fontSize: '1rem', color: 'var(--color-primary)',
                                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                                    transition: 'transform 180ms ease',
                                    display: 'inline-block',
                                }}>
                                    ＋
                                </span>
                            </button>

                            {openFaq === i && (
                                <div style={{
                                    padding: 'var(--space-1) var(--space-5) var(--space-5)',
                                    fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
                                    lineHeight: 1.7,
                                    borderTop: '1px solid var(--color-divider)',
                                    paddingTop: 'var(--space-4)',
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

        </main>
    )
}