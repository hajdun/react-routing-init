
import { Link } from "react-router-dom"

const pageLinks = [
    {
        icon: '🐕',
        title: 'Check out our family!',
        desc: 'We hope you enjoy the story of this wolfpack or bloodthirsty yorkshire terriers.',
        badge: 'Our dogs',
        path: "our-dogs"
    },
    {
        icon: '🛒',
        title: 'Shop',
        desc: 'Look at the cubs!',
        badge: 'buy',
        path: "puppies"
    },
    {
        icon: '?',
        title: 'Do you have questions?',
        desc: 'Talk to us!',
        badge: 'contact',
        path: "contact"
    }
]

export default function Home() {
    return (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>

            {/* ── Hero ── */}
            <section style={{
                paddingBlock: 'var(--space-16)',
                borderBottom: '1px solid var(--color-divider)',
                marginBottom: 'var(--space-12)',
            }}>

                <h1 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)',
                    fontWeight: 800, lineHeight: 1.05, marginBottom: 'var(--space-5)',
                }}>
                    <span style={{ color: 'var(--color-primary)' }}>Home</span>
                    <br />
                </h1>

            </section>

            {/* ── Grid ── */}


            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
                gap: 'var(--space-5)',
            }}>
                {pageLinks.map(c => (
                    <div key={c.title} style={{
                        background: 'var(--color-surface)',
                        border: '1px solid oklch(from var(--color-text) l c h / 0.07)',
                        borderRadius: 'var(--radius-xl)',
                        padding: 'var(--space-6)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
                    }}>
                        <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{c.icon}</span>

                        <span style={{
                            display: 'inline-flex', alignItems: 'center',
                            padding: 'var(--space-1) var(--space-3)',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--color-primary-highlight)',
                            color: 'var(--color-primary)',
                            fontSize: 'var(--text-xs)', fontWeight: 600,
                            width: 'fit-content',
                        }}>
                            {c.badge}
                        </span>
                        <Link key={c.title} to={c.path} >
                            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700 }}>{c.title} ❯ </h3>
                        </Link>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                            {c.desc}
                        </p>


                    </div>
                ))}
            </div>

        </main>
    )
}