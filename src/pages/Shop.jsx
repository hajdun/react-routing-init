// src/pages/Shop.jsx
import { Link } from 'react-router-dom'
import { dogs } from "../dogData/puppies"
import yorkieImg from '../assets/puppy.png'


export default function Shop() {
    return (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>

            {/* ── Header ── */}
            <section style={{ marginBottom: 'var(--space-12)' }}>
                <p style={{
                    fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.07em',
                    textTransform: 'uppercase', color: 'var(--color-primary)',
                    marginBottom: 'var(--space-3)',
                }}>
                    🛒 Shop
                </p>
                <h1 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)',
                    fontWeight: 800, lineHeight: 1.05, marginBottom: 'var(--space-4)',
                }}>
                    Look at the{' '}
                    <span style={{ color: 'var(--color-primary)' }}>cubs!</span>
                </h1>
                <p style={{
                    fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)',
                    maxWidth: '54ch', lineHeight: 1.7,
                }}>
                    Our current litter is ready to terrorise a home near you.
                    Each pup comes fully vaccinated, microchipped, and pre-loaded with chaos.
                </p>
            </section>

            {/* ── Stats bar ── */}
            <div style={{
                display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap',
                marginBottom: 'var(--space-10)',
            }}>
                {[
                    { num: '6', label: 'Cubs available' },
                    { num: '8–11', label: 'Weeks old' },
                    { num: '100%', label: 'Pure Yorkshire terror' },
                ].map(s => (
                    <div key={s.label} style={{
                        background: 'var(--color-surface)',
                        border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--space-3) var(--space-5)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                    }}>
                        <span style={{
                            fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                            fontWeight: 800, color: 'var(--color-primary)',
                        }}>{s.num}</span>
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontWeight: 500 }}>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* ── Dog Grid ── */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                gap: 'var(--space-6)',
            }}>
                {dogs.map(dog => (
                    <article key={dog.name} style={{
                        background: 'var(--color-surface)',
                        border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex', flexDirection: 'column',
                        transition: 'box-shadow 180ms ease, transform 180ms ease',
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                            e.currentTarget.style.transform = 'translateY(-3px)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                            e.currentTarget.style.transform = 'translateY(0)'
                        }}
                    >
                        {/* Image */}
                        <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-surface-offset)' }}>
                            <img
                                src={yorkieImg}
                                alt={`${dog.name} the Yorkshire Terrier puppy`}
                                width="600" height="450"
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            {/* Tag badge overlay */}
                            <span style={{
                                position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)',
                                padding: 'var(--space-1) var(--space-3)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)', fontWeight: 700,
                                background: dog.tag === 'Reserved'
                                    ? 'oklch(0.85 0.05 50 / 0.95)'
                                    : 'oklch(0.92 0.08 160 / 0.95)',
                                color: dog.tag === 'Reserved' ? '#7a4a00' : 'var(--color-success)',
                            }}>
                                {dog.tag === 'Reserved' ? '🔒 Reserved' : '✅ Available'}
                            </span>
                        </div>

                        {/* Body */}
                        <div style={{
                            padding: 'var(--space-5)', display: 'flex',
                            flexDirection: 'column', gap: 'var(--space-3)', flex: 1,
                        }}>
                            {/* Name + price */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                <h2 style={{
                                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)',
                                    fontWeight: 800, lineHeight: 1.2,
                                }}>
                                    {dog.name}
                                </h2>
                                <span style={{
                                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                                    fontWeight: 800, color: 'var(--color-primary)', flexShrink: 0,
                                }}>
                                    {dog.price}
                                </span>
                            </div>

                            {/* Meta pills */}
                            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                                {[dog.age, dog.gender].map(val => (
                                    <span key={val} style={{
                                        padding: 'var(--space-1) var(--space-3)',
                                        borderRadius: 'var(--radius-full)',
                                        background: 'var(--color-surface-offset)',
                                        fontSize: 'var(--text-xs)', fontWeight: 600,
                                        color: 'var(--color-text-muted)',
                                    }}>
                                        {val}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
                                lineHeight: 1.65, flex: 1,
                            }}>
                                {dog.desc}
                            </p>

                            {/* CTA */}
                            <Link

                                to={"/puppies/" + dog.id}
                                disabled={dog.tag === 'Reserved'}

                                style={{
                                    marginTop: 'var(--space-2)',
                                    width: '100%',
                                    padding: 'var(--space-3) var(--space-4)',
                                    borderRadius: 'var(--radius-md)',
                                    border: 'none', cursor: dog.tag === 'Reserved' ? 'not-allowed' : 'pointer',
                                    background: dog.tag === 'Reserved'
                                        ? 'var(--color-surface-offset)'
                                        : 'var(--color-primary)',
                                    color: dog.tag === 'Reserved' ? 'var(--color-text-faint)' : '#fff',
                                    fontWeight: 600, fontSize: 'var(--text-sm)',
                                    transition: 'background 180ms ease, box-shadow 180ms ease',
                                }}
                                onMouseEnter={e => {
                                    if (dog.tag !== 'Reserved') e.currentTarget.style.background = 'var(--color-primary-hover)'
                                }}
                                onMouseLeave={e => {
                                    if (dog.tag !== 'Reserved') e.currentTarget.style.background = 'var(--color-primary)'
                                }}
                            >
                                {dog.tag === 'Reserved' ? 'Already claimed 😢' : 'I need this dog 🐾'}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* ── Footer note ── */}
            <div style={{
                marginTop: 'var(--space-12)',
                background: 'var(--color-surface)',
                border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
            }}>
                <p style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>🐶</p>
                <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                    fontWeight: 700, marginBottom: 'var(--space-3)',
                }}>
                    Not sure which one to pick?
                </h3>
                <p style={{
                    fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
                    maxWidth: '40ch', margin: '0 auto var(--space-6)',
                }}>
                    They're all equally unhinged. Come visit us and let the dogs choose you instead.
                </p>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-6)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-primary)', color: '#fff',
                    fontWeight: 600, fontSize: 'var(--text-sm)', textDecoration: 'none',
                }}>
                    Book a visit →
                </div>
            </div>

        </main>
    )
}