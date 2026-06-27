/* OrchestrateXR marketing site — bottom sections (FeatureList, Stats, Testimonial, Blog, FinalCTA, Footer). */
const OXR2 = window.OrchestrateXRDesignSystem_878eaf;
const WIDE2 = 1180;

function FeatureList() {
  const { Eyebrow } = OXR2;
  const items = [
    ['Anytime, Anywhere', 'Deliver training on VR devices, desktop, tablet, and mobile — one build, every screen.'],
    ['Unlimited File Storage', 'Upload all of your assets to your private cloud, and use them to create training.'],
    ['Browser-Based Builders', 'Create XR and AI content right in your favorite web browser: Chrome, Safari, or Edge.'],
    ['Guides & Support', 'Searchable support guides anytime, email and chat-based support during business hours.'],
    ['Analytics & Reports', 'Measure learning experiences, study outcomes, and make informed changes to training.'],
    ['Manage Learning', 'Export your XR and AI content as SCORM packages and drop them into your existing LMS.'],
    ['Automate Debriefing', 'Use AI to facilitate personalized debriefing after all types of training.'],
    ['Marketplace', 'Create training that works, and monetize it by selling it in our marketplace.'],
  ];
  return (
    <section style={{ background: 'var(--oxr-surface)' }}>
      <div style={{ maxWidth: WIDE2, margin: '0 auto', padding: 'clamp(3rem,7vw,5rem) 24px' }}>
        <h2 style={{ margin: '0 0 2.5rem', maxWidth: 620, fontWeight: 800, fontSize: 'var(--oxr-text-h1)', lineHeight: 1.2, letterSpacing: '-0.018em' }}>
          Everything you need to scale immersive learning
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px 40px' }}>
          {items.map(([t, b]) => (
            <div key={t}>
              <div style={{ width: 36, height: 4, background: 'var(--oxr-brand)', borderRadius: 2, marginBottom: 14 }} />
              <h3 style={{ margin: '0 0 6px', fontWeight: 600, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>{t}</h3>
              <p style={{ margin: 0, color: 'var(--oxr-text-muted)', lineHeight: 1.55 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { Stat } = OXR2;
  const stats = [
    ['2x', 'Knowledge acquisition', 'Students using a well-designed AI tutor achieved more than double the learning gains, in less time.'],
    ['4x', 'Training speed', 'VR learners completed training four times faster than classroom learners.'],
    ['275%', 'Confidence to apply', 'VR-trained employees were 275% more confident to act on what they learned post-training.'],
    ['3.75x', 'Emotional connection', 'VR learners felt 3.75× more emotionally connected to content than classroom peers.'],
    ['40%', 'Error reduction', 'VR clinical-skills learners committed 40% fewer errors during a simulated practical.'],
    ['219%', 'Return on investment', 'Enterprises using VR training achieved 219% ROI with payback in under six months.'],
  ];
  return (
    <section style={{ background: 'var(--oxr-surface-dark)' }}>
      <div style={{ maxWidth: WIDE2, margin: '0 auto', padding: 'clamp(3rem,7vw,5rem) 24px' }}>
        <h2 style={{ margin: '0 0 2.5rem', fontWeight: 800, fontSize: 'var(--oxr-text-h1)', lineHeight: 1.2, letterSpacing: '-0.018em', color: 'var(--oxr-white)' }}>
          By the numbers
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px 48px' }}>
          {stats.map(([v, l, b]) => (
            <div key={l} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{l}</span>
              <span style={{ fontWeight: 800, fontSize: 'var(--oxr-text-display)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--oxr-brand)' }}>{v}</span>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const { Avatar } = OXR2;
  return (
    <section style={{ background: 'var(--oxr-surface)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: 'clamp(3rem,7vw,5rem) 24px', textAlign: 'center' }}>
        <blockquote style={{ margin: 0, fontWeight: 600, fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--oxr-text)' }}>
          “What took our immersive training team six months and over fifty thousand dollars to create in another system was accomplished in one morning with half the staff using OrchestrateXR.”
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 28 }}>
          <Avatar name="David Moody" size={48} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600 }}>David Moody</div>
            <div style={{ color: 'var(--oxr-text-muted)', fontSize: '0.92rem' }}>IT Director, UVA Health Sciences Library</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogStrip() {
  const { Eyebrow } = OXR2;
  const posts = [
    ['Conversations', 'Introducing: Emotions', 'Replicas with emotions are here — both the perception and expression of emotions.', 'March 13, 2026 · Rob Moore', 'var(--oxr-grad-heat)'],
    ['Press Releases', 'AccessVR is now OrchestrateXR', 'For years we helped simulation leaders bring immersion into training. VR was only the beginning.', 'December 1, 2025 · Aaron Collegeman', 'var(--oxr-grad-blue)'],
  ];
  return (
    <section style={{ background: 'var(--oxr-surface-tint)' }}>
      <div style={{ maxWidth: WIDE2, margin: '0 auto', padding: 'clamp(3rem,6vw,4.5rem) 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2 style={{ margin: '0 0 4px', fontWeight: 800, fontSize: 'var(--oxr-text-h2)', lineHeight: 1.2, letterSpacing: '-0.018em' }}>From our blog</h2>
            <p style={{ margin: 0, color: 'var(--oxr-text-muted)' }}>Product updates, training strategies, and more.</p>
          </div>
          <OXR2.Button variant="link">View all posts →</OXR2.Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          {posts.map(([cat, t, b, meta, bg]) => (
            <article key={t} style={{ display: 'flex', flexDirection: 'column', background: 'var(--oxr-surface)', borderRadius: 'var(--oxr-radius)', overflow: 'hidden', boxShadow: 'var(--oxr-shadow-card)' }}>
              <div style={{ height: 150, background: bg }} />
              <div style={{ padding: '20px 22px' }}>
                <Eyebrow>{cat}</Eyebrow>
                <h3 style={{ margin: '8px 0 8px', fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.01em' }}>{t}</h3>
                <p style={{ margin: '0 0 14px', color: 'var(--oxr-text-muted)', lineHeight: 1.55 }}>{b}</p>
                <div style={{ fontSize: '0.85rem', color: 'var(--oxr-text-muted)' }}>{meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onRegister }) {
  const { Button } = OXR2;
  return (
    <section style={{ background: 'var(--oxr-surface-wash)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: 'clamp(3.5rem,8vw,6rem) 24px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 1rem', fontWeight: 800, fontSize: 'var(--oxr-text-h1)', lineHeight: 1.2, letterSpacing: '-0.018em' }}>
          One platform for XR and AI, play on all devices.
        </h2>
        <p style={{ margin: '0 auto 2rem', maxWidth: 560, fontSize: '1.15rem', lineHeight: 1.55, color: 'var(--oxr-text-muted)' }}>
          Create immersive training, AI conversations, and 360° experiences, then deliver them to any headset, browser, or phone from a single platform.
        </p>
        <Button variant="primary" size="lg" uppercase onClick={onRegister}>Get started today for free</Button>
      </div>
    </section>
  );
}

function Footer() {
  const { Logo } = OXR2;
  const cols = [
    ['Training', ['AI Conversations', 'XR Experiences', 'Video Guides', 'Streaming 360']],
    ['Resources', ['Blog', 'Contact', 'Support Docs', 'Get Help']],
    ['Product', ['Live Demo', 'Free Trials', 'Pricing']],
  ];
  return (
    <footer style={{ background: 'var(--oxr-surface-dark)', color: 'rgba(255,255,255,0.8)' }}>
      <div style={{ maxWidth: WIDE2, margin: '0 auto', padding: 'clamp(3rem,6vw,4rem) 24px 2rem', display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 32 }} className="oxr-footer-grid">
        <div>
          <Logo size={24} onDark />
          <p style={{ margin: '16px 0', maxWidth: 240, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Simulation training for everyone. Change the way the world learns.</p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['LinkedIn', 'Facebook'].map((s) => (<a key={s} href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>{s}</a>))}
          </div>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 }}>{h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map((l) => (<a key={l} href="#" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.95rem' }}>{l}</a>))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ maxWidth: WIDE2, margin: '0 auto', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
          <span>© 2026 AccessVR LLC. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 18 }}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a></span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FeatureList, Stats, Testimonial, BlogStrip, FinalCTA, Footer });
