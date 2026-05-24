// src/layout/Footer.jsx
import { Link } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/our-dogs', label: 'Our Dogs' },
    { to: '/puppies', label: 'Shop' },
    { to: '/contact', label: 'Contact' },
]

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid oklch(from var(--color-text) l c h / 0.08)',
            background: 'var(--color-surface)',
            marginTop: 'auto',
        }}>
            <div style={{
                maxWidth: '1100px', margin: '0 auto',
                padding: 'var(--space-8) var(--space-6)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap',
                gap: 'var(--space-4)',
            }}>

                {/* Brand */}
                <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'var(--text-base)', color: 'var(--color-text)',
                }}>
                    🐕 Yorkie Pack
                </span>

                {/* Links */}
                <nav aria-label="Footer navigation" style={{
                    display: 'flex', gap: 'var(--space-1)', flexWrap: 'wrap',
                }}>
                    {links.map(({ to, label }) => (
                        <Link key={to} to={to} style={{
                            textDecoration: 'none', fontSize: 'var(--text-sm)',
                            fontWeight: 500, color: 'var(--color-text-muted)',
                            padding: 'var(--space-1) var(--space-3)',
                            borderRadius: 'var(--radius-md)',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Copyright */}
                <p style={{
                    fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)',
                }}>
                    © {new Date().getFullYear()} Yorkie Pack. All rights reserved.
                </p>

            </div>
        </footer>
    )
}