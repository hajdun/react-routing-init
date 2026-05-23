// src/pages/NotFound.jsx
import { Link } from "react-router-dom"

export default function NotFound() {


    return (
        <main style={{
            maxWidth: '600px', margin: '0 auto',
            padding: 'var(--space-20) var(--space-6)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', textAlign: 'center',
        }}>

            {/* ── Big 404 ── */}
            <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(6rem, 20vw, 10rem)',
                fontWeight: 800, lineHeight: 1,
                color: 'var(--color-primary-highlight)',
                marginBottom: 'var(--space-4)',
                userSelect: 'none',
            }}>
                404
            </div>

            {/* ── Yorkie emoji ── */}
            <div style={{ fontSize: '3.5rem', marginBottom: 'var(--space-6)', lineHeight: 1 }}>
                🐕
            </div>

            <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)',
                fontWeight: 800, marginBottom: 'var(--space-4)',
            }}>
                The dog ate this page
            </h1>

            <p style={{
                fontSize: 'var(--text-base)', color: 'var(--color-text-muted)',
                lineHeight: 1.75, maxWidth: '38ch',
                marginBottom: 'var(--space-3)',
            }}>
                We looked everywhere. Under the sofa, behind the food bowl,
                inside Gremlin's secret hiding spot. This page simply does not exist.
            </p>

            <p style={{
                fontSize: 'var(--text-sm)', color: 'var(--color-text-faint)',
                marginBottom: 'var(--space-10)',
            }}>
                URL not found: good luck figuring out what you typed.
            </p>

            {/* ── Actions ── */}
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-6)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-primary)', color: '#fff',
                    fontWeight: 600, fontSize: 'var(--text-sm)', textDecoration: 'none',
                }}>
                    ← Go home
                </Link>

                <Link to="/puppies" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-6)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    background: 'none', color: 'var(--color-text-muted)',
                    fontWeight: 600, fontSize: 'var(--text-sm)', textDecoration: 'none',
                }}>
                    Look at puppies instead 🐾
                </Link>
            </div>

            {/* ── Divider ── */}
            <div style={{
                width: '100%', height: '1px',
                background: 'var(--color-divider)',
                margin: 'var(--space-12) 0 var(--space-8)',
            }} />

            {/* ── Quick links ── */}
            <p style={{
                fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)',
                fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
                marginBottom: 'var(--space-4)',
            }}>
                Pages that actually exist
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                    { to: '/', label: 'Home' },
                    { to: '/our-dogs', label: 'Our Dogs' },
                    { to: '/puppies', label: 'Shop' },
                    { to: '/contact', label: 'Contact' },
                ].map(link => (
                    <Link key={link.to} to={link.to} style={{
                        padding: 'var(--space-2) var(--space-4)',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--color-surface)',
                        border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                        fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
                        textDecoration: 'none', fontWeight: 500,
                        boxShadow: 'var(--shadow-sm)',
                    }}>
                        {link.label}
                    </Link>
                ))}
            </div>

        </main>
    )
}