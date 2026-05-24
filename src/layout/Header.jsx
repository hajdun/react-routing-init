// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom'

function Logo() {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="24" height="24" rx="6" fill="currentColor" opacity="0.12" />
            <text x="14" y="19" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="800">🐕</text>
        </svg>
    )
}

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/our-dogs', label: 'Our Dogs' },
    { to: '/puppies', label: 'Shop' },
    { to: '/contact', label: 'Contact' },
]

const linkStyle = (isActive) => ({
    textDecoration: 'none',
    fontSize: 'var(--text-sm)',
    fontWeight: 600,
    padding: 'var(--space-2) var(--space-3)',
    borderRadius: 'var(--radius-md)',
    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
    background: isActive ? 'var(--color-primary-highlight)' : 'none',
})

export default function Header() {
    return (
        <header style={{
            position: 'sticky', top: 0, zIndex: 100,
            background: 'color-mix(in oklch, var(--color-surface) 85%, transparent)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid oklch(from var(--color-text) l c h / 0.08)',
            boxShadow: 'var(--shadow-sm)',
        }}>
            <div style={{
                maxWidth: '1100px', margin: '0 auto',
                padding: 'var(--space-3) var(--space-6)',
                display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
            }}>

                {/* Logo */}
                <Link to="/" aria-label="Go to homepage" style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
                    textDecoration: 'none', color: 'var(--color-text)',
                    fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 'var(--text-lg)',
                }}>
                    <Logo />
                    Yorkie Pack
                </Link>

                {/* Nav links */}
                <nav aria-label="Main navigation" style={{ display: 'flex', gap: 'var(--space-1)' }}>
                    {links.map(({ to, label, end }) => (
                        <NavLink key={to} to={to} end={end}
                            style={({ isActive }) => linkStyle(isActive)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

            </div>
        </header>
    )
}