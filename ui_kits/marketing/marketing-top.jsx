/* OrchestrateXR marketing site — top sections (Header, Hero, Features, Customers, BuiltFor).
   Composes the design-system primitives from window.OrchestrateXRDesignSystem_878eaf.
   Real product photography is served cross-origin and could not be bundled — warm
   placeholder blocks (.media) stand in where imagery belongs. */
const OXR = window.OrchestrateXRDesignSystem_878eaf;
const { Button, Logo, Eyebrow, FeatureCard, Badge } = OXR;

const WIDE = 1180;

/* A warm placeholder for real product photography / illustration. */
function Media({ bg = 'var(--oxr-brand-wash)', label = 'Product imagery', radius = 'var(--oxr-radius-image)', style }) {
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 160, background: bg, borderRadius: radius,
      display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
      overflow: 'hidden', ...style,
    }}>
      <span style={{
        fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'rgba(35,27,21,0.35)',
      }}>{label}</span>
    </div>
  );
}

function NavItem({ children, onClick, hasCaret }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4,
        fontFamily: 'var(--oxr-font-sans)', fontSize: '0.95rem', fontWeight: 500,
        color: h ? 'var(--oxr-brand)' : 'var(--oxr-text)', padding: '6px 2px', whiteSpace: 'nowrap',
        transition: 'color var(--oxr-duration) var(--oxr-ease)',
      }}>
      {children}{hasCaret && <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>▼</span>}
    </button>
  );
}

function Header({ onSignIn, onRegister }) {
  const [open, setOpen] = React.useState(false);
  const [resOpen, setResOpen] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--oxr-border)',
    }}>
      <div style={{ maxWidth: WIDE, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Logo size={34} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }} className="oxr-desktop-nav">
          <NavItem>About Us</NavItem>
          <div style={{ position: 'relative' }} onMouseLeave={() => setResOpen(false)}>
            <NavItem hasCaret onClick={() => setResOpen((v) => !v)}>Resources</NavItem>
            {resOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, marginTop: 6, background: 'var(--oxr-surface)',
                borderRadius: 'var(--oxr-radius)', boxShadow: 'var(--oxr-shadow-popover)', border: '1px solid var(--oxr-border)',
                padding: 6, minWidth: 170, display: 'flex', flexDirection: 'column',
              }}>
                {['Downloads', 'Sales', 'Support'].map((x) => (
                  <a key={x} href="#" style={{ padding: '8px 12px', borderRadius: 'var(--oxr-radius-sm)', color: 'var(--oxr-text)', textDecoration: 'none', fontSize: '0.92rem' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--oxr-surface-tint)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>{x}</a>
                ))}
              </div>
            )}
          </div>
          <NavItem>Blog</NavItem>
          <NavItem>Contact Us</NavItem>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="oxr-desktop-nav">
          <Button variant="ghost" size="sm" onClick={onSignIn} uppercase>Sign in</Button>
          <Button variant="primary" size="sm" onClick={onRegister} uppercase>Get started</Button>
        </div>
        <button className="oxr-mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--oxr-text)' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
      {open && (
        <div className="oxr-mobile-menu" style={{ padding: '8px 24px 20px', display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid var(--oxr-border)' }}>
          {['About Us', 'Downloads', 'Support', 'Blog', 'Contact Us'].map((x) => (
            <a key={x} href="#" style={{ padding: '10px 0', color: 'var(--oxr-text)', textDecoration: 'none', fontWeight: 500 }}>{x}</a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <Button variant="secondary" size="sm" onClick={onSignIn} uppercase>Sign in</Button>
            <Button variant="primary" size="sm" onClick={onRegister} uppercase>Get started</Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onRegister }) {
  return (
    <section style={{ background: 'var(--oxr-surface)' }}>
      <div style={{ maxWidth: WIDE, margin: '0 auto', padding: 'clamp(3rem,7vw,5.5rem) 24px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' }} className="oxr-hero-grid">
        <div>
          <h1 style={{ margin: 0, fontWeight: 800, fontSize: 'var(--oxr-text-h1)', lineHeight: 1.2, letterSpacing: '-0.018em', color: 'var(--oxr-text)' }}>
            Simulation training for everyone.
          </h1>
          <p style={{ margin: '1.25rem 0 2rem', fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--oxr-text-muted)', maxWidth: 460 }}>
            We make it easy for you to use XR and AI to create effective, scalable training content that your learners will love.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" uppercase onClick={onRegister}>Get started for free</Button>
            <Button variant="secondary" size="lg" uppercase>See pricing</Button>
          </div>
        </div>
        <Media bg="var(--oxr-grad-heat)" label="Hero — learner in VR" style={{ aspectRatio: '4 / 3', minHeight: 0 }} />
      </div>
    </section>
  );
}

function FeatureGrid() {
  const feats = [
    { eyebrow: 'Practice Conversations', title: 'Learn to talk it out, virtually.', body: 'Authentic conversations with AI that prepare learners for the moments that matter.', bg: 'var(--oxr-grad-heat)' },
    { eyebrow: 'Extend Reality', title: 'Active learning, VR optional.', body: 'Immerse learners in mission-critical experiences, and let practice be their teacher.', bg: 'var(--oxr-grad-blue)' },
    { eyebrow: 'Instant Video Training', title: 'Video training, instantly.', body: 'Upload any video, and let AI draft the training. Edit, publish, train. It’s that easy.', bg: 'var(--oxr-brand-wash)', badge: 'Coming soon' },
    { eyebrow: 'Stream Your Lab', title: 'Sim train everyone.', body: 'Affordable 360° streaming using inexpensive cameras, to VR headsets and the web.', bg: 'var(--oxr-grad-pink)', badge: 'Coming soon' },
  ];
  return (
    <section style={{ background: 'var(--oxr-surface-tint)' }}>
      <div style={{ maxWidth: WIDE, margin: '0 auto', padding: 'clamp(3rem,6vw,4.5rem) 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
          {feats.map((f) => (
            <FeatureCard key={f.eyebrow} eyebrow={f.eyebrow} title={f.title} body={f.body} badge={f.badge} href="#"
              media={<Media bg={f.bg} label="" radius="0" />} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerStrip() {
  const names = ['Sutter Health', 'GW Nursing', 'Arkansas COM', 'UVA Health', 'NYITCOM', 'Temple University'];
  return (
    <section style={{ background: 'var(--oxr-surface)' }}>
      <div style={{ maxWidth: WIDE, margin: '0 auto', padding: 'clamp(2.5rem,5vw,3.5rem) 24px', textAlign: 'center' }}>
        <Eyebrow tone="muted">Empowered by OrchestrateXR</Eyebrow>
        <p style={{ margin: '0.5rem auto 2rem', maxWidth: 520, color: 'var(--oxr-text-muted)' }}>
          Our customers are among the best and brightest companies exploring XR and AI for training.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '18px 40px' }}>
          {names.map((n) => (
            <span key={n} style={{ fontStretch: '87.5%', fontWeight: 700, fontSize: '1.15rem', color: 'var(--oxr-brown-500)', opacity: 0.7 }}>{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuiltFor() {
  const { Button } = OXR;
  return (
    <section style={{ background: 'var(--oxr-surface-wash)' }}>
      <div style={{ maxWidth: WIDE, margin: '0 auto', padding: 'clamp(3rem,7vw,5rem) 24px', display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'center' }} className="oxr-hero-grid">
        <div>
          <Eyebrow>Built for healthcare &amp; education</Eyebrow>
          <h2 style={{ margin: '0.6rem 0 1rem', fontWeight: 800, fontSize: 'var(--oxr-text-h1)', lineHeight: 1.2, letterSpacing: '-0.018em', color: 'var(--oxr-text)' }}>
            Where learners practice before they perform
          </h2>
          <p style={{ margin: '0 0 1.75rem', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--oxr-text-muted)', maxWidth: 520 }}>
            OrchestrateXR gives healthcare programs and training teams a better way to prepare people for high-stakes moments. Simulated conversations, virtual environments, and on-demand video training — all in one platform, deployable anywhere.
          </p>
          <Button variant="secondary">View pricing options</Button>
        </div>
        <Media bg="var(--oxr-grad-heat)" label="Clinical learner" style={{ aspectRatio: '3 / 4' }} />
      </div>
    </section>
  );
}

Object.assign(window, { Media, Header, Hero, FeatureGrid, CustomerStrip, BuiltFor });
