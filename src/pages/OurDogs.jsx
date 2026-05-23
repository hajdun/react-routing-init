// src/pages/OurDogs.jsx
import { Link } from 'react-router-dom'

import coverDog from '../assets/cover_dog.png'
import { dogs } from "../dogData/adults"

const stats = [
    { num: '12+', label: 'Years breeding' },
    { num: '200+', label: 'Happy families' },
    { num: '4', label: 'Resident terrors' },
    { num: '0', label: 'Bears defeated (so far)' },
]

const OurDogs = () => {
    return (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>

            {/* ── Hero ── */}
            <section style={{ marginBottom: 'var(--space-16)' }}>
                <p style={{
                    fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.07em',
                    textTransform: 'uppercase', color: 'var(--color-primary)',
                    marginBottom: 'var(--space-3)',
                }}>
                    🐕 Our dogs
                </p>

                <h1 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)',
                    fontWeight: 800, lineHeight: 1.05, marginBottom: 'var(--space-5)',
                }}>
                    Meet the{' '}
                    <span style={{ color: 'var(--color-primary)' }}>Wolfpack</span>
                </h1>

                <p style={{
                    fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)',
                    maxWidth: '58ch', lineHeight: 1.7, marginBottom: 'var(--space-8)',
                }}>
                    We hope you enjoy the story of this wolfpack of bloodthirsty Yorkshire Terriers.
                    Small in size. Enormous in personality. Absolutely feral about walkies.
                </p>

                {/* Hero image */}
                <div style={{
                    borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    aspectRatio: '21/8',
                    background: 'var(--color-surface-offset)',
                }}>
                    <img
                        src={coverDog}
                        alt="Yorkshire Terrier looking proud outdoors"
                        width="1200" height="457"
                        loading="eager"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </section>

            {/* ── Stats ── */}
            <section style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-16)',
            }}>
                {stats.map(s => (
                    <div key={s.label} style={{
                        background: 'var(--color-surface)',
                        border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--space-5)',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-sm)',
                    }}>
                        <div style={{
                            fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)',
                            fontWeight: 800, color: 'var(--color-primary)',
                        }}>
                            {s.num}
                        </div>
                        <div style={{
                            fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)',
                            fontWeight: 500, marginTop: 'var(--space-1)',
                        }}>
                            {s.label}
                        </div>
                    </div>
                ))}
            </section>

            {/* ── Dog Cards ── */}
            <section style={{ marginBottom: 'var(--space-16)' }}>
                <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                    fontWeight: 700, marginBottom: 'var(--space-8)',
                }}>
                    The residents
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                    gap: 'var(--space-6)',
                }}>
                    {dogs.map(dog => (
                        <article key={dog.name} style={{
                            background: 'var(--color-surface)',
                            border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)',
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
                            {/* Card image */}
                            <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-surface-offset)' }}>
                                <img
                                    src={dog.img}
                                    alt={`${dog.name} the Yorkshire Terrier`}
                                    width="600" height="450"
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Card body */}
                            <div style={{ padding: 'var(--space-5)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)',
                                        fontWeight: 800,
                                    }}>
                                        {dog.name}
                                    </h3>
                                    <span style={{
                                        fontSize: 'var(--text-xs)', fontWeight: 600,
                                        padding: 'var(--space-1) var(--space-3)',
                                        borderRadius: 'var(--radius-full)',
                                        background: 'var(--color-primary-highlight)',
                                        color: 'var(--color-primary)',
                                    }}>
                                        {dog.age}
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: 'var(--text-xs)', fontWeight: 600,
                                    color: 'var(--color-text-faint)', textTransform: 'uppercase',
                                    letterSpacing: '0.06em', marginBottom: 'var(--space-3)',
                                }}>
                                    {dog.role}
                                </p>

                                <p style={{
                                    fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
                                    lineHeight: 1.65,
                                }}>
                                    {dog.desc}
                                </p>

                                <div style={{
                                    marginTop: 'var(--space-4)',
                                    paddingTop: 'var(--space-4)',
                                    borderTop: '1px solid var(--color-divider)',
                                    fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)',
                                }}>
                                    Personality: <strong style={{ color: 'var(--color-text-muted)' }}>{dog.personality}</strong>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{
                background: 'var(--color-surface)',
                border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-10)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
            }}>
                <p style={{ fontSize: '2.5rem', marginBottom: 'var(--space-4)' }}>🐾</p>
                <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)',
                    fontWeight: 800, marginBottom: 'var(--space-3)',
                }}>
                    Want to adopt one?
                </h2>
                <p style={{
                    fontSize: 'var(--text-base)', color: 'var(--color-text-muted)',
                    maxWidth: '44ch', margin: '0 auto var(--space-6)',
                }}>
                    We occasionally have puppies available to loving homes.
                    Get in touch and we'll add you to the waiting list — it's worth it, we promise.
                </p>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-6)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-primary)', color: '#fff',
                    fontWeight: 600, fontSize: 'var(--text-sm)', textDecoration: 'none',
                }}>
                    Get in touch →
                </div>
            </section>

        </main>
    )
}

export default OurDogs