/* OrchestrateXR web-app HOME — a faithful recreation of app.orchestratexr.com/dashboards/main,
   built on the brand system. The live app's structure and palette are preserved — including the
   purple welcome banner (purple is a valid OrchestrateXR accent alongside the primary orange).
   Real video-thumbnail photography is served cross-origin and can't be bundled, so the Pins
   tiles use warm placeholders; drop real stills into assets/imagery/ to finish them. */
const APP = window.OrchestrateXRDesignSystem_878eaf;

/* ---- App-local dark surface palette (warm near-black, on-brand) ---- */
const D = {
  rail: '#0B0907',
  bg: '#161210',
  card: '#211B17',
  cardHover: '#2A231E',
  tile: '#322A24',
  line: 'rgba(255,255,255,0.08)',
  text: '#F6F1EC',
  muted: '#A99C90',
  accent: '#FF6600',
};

function Icon({ d, size = 22, fill = 'none' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />;
}
const I = {
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/>',
  chat: '<path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-3.5-.8L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  sparkles: '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 3v4"/><path d="M21 5h-4"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  goggles: '<rect x="2" y="7" width="20" height="10" rx="3"/><path d="M12 17v-2"/><path d="M7 12h.01"/><path d="M17 12h.01"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
  userCircle: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18.5a6 6 0 0 1 11 0"/>',
  userPlus: '<path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
  pin: '<path d="M12 17v5"/><path d="M9 10.76 7 14h10l-2-3.24V4h-4z"/><line x1="5" y1="4" x2="19" y2="4"/>',
};

function RailBtn({ d, active, onClick, badge }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      position: 'relative', width: 56, height: 56, borderRadius: 14, border: 'none', cursor: 'pointer',
      background: active ? 'rgba(255,102,0,0.16)' : (h ? 'rgba(255,255,255,0.07)' : 'transparent'),
      color: active ? D.accent : (h ? D.text : D.muted), display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'all 140ms ease',
    }}>
      <Icon d={d} size={23} />
      {badge && <span style={{ position: 'absolute', top: 12, right: 13, width: 8, height: 8, borderRadius: 99, background: D.accent, border: '2px solid ' + D.rail }} />}
    </button>
  );
}

function Rail({ active, setActive, onCreate }) {
  return (
    <aside style={{ width: 92, flexShrink: 0, background: D.rail, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 6, height: '100%' }}>
      <button onClick={onCreate} aria-label="Create" style={{ width: 60, height: 60, borderRadius: 18, border: 'none', cursor: 'pointer', background: D.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, boxShadow: '0 6px 18px rgba(255,102,0,0.35)' }}>
        <Icon d={I.plus} size={28} />
      </button>
      <RailBtn d={I.home} active={active === 'home'} onClick={() => setActive('home')} />
      <RailBtn d={I.box} active={active === 'library'} onClick={() => setActive('library')} />
      <RailBtn d={I.chat} active={active === 'chat'} onClick={() => setActive('chat')} />
      <RailBtn d={I.users} active={active === 'people'} onClick={() => setActive('people')} />
      <RailBtn d={I.cart} active={active === 'store'} onClick={() => setActive('store')} />
      <RailBtn d={I.settings} active={active === 'settings'} onClick={() => setActive('settings')} />
      <div style={{ flex: 1 }} />
      <RailBtn d={I.bell} badge onClick={() => {}} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6 }}>
        {[0, 1].map((i) => (
          <span key={i} style={{ width: 38, height: 38, borderRadius: 99, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <APP.LogoMark size={22} onDark />
          </span>
        ))}
      </div>
    </aside>
  );
}

function TopBar({ onAskAI }) {
  const { Logo } = APP;
  const pill = (children, onClick) => (
    <button onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 12, border: '1px solid ' + D.line, background: D.card, color: D.text, cursor: 'pointer', fontFamily: 'var(--oxr-font-sans)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.04em' }}>{children}</button>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 28px' }}>
      <div style={{ width: 200, flexShrink: 0 }}><Logo size={26} onDark /></div>
      <div style={{ flex: 1, position: 'relative', maxWidth: 720 }}>
        <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: D.muted }}><Icon d={I.search} size={19} /></span>
        <input placeholder="Search Everything..." style={{ width: '100%', boxSizing: 'border-box', padding: '13px 16px 13px 46px', borderRadius: 14, border: '1px solid ' + D.line, background: D.card, color: D.text, fontFamily: 'var(--oxr-font-sans)', fontSize: '0.98rem', outline: 'none' }} />
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: D.muted, fontSize: '0.78rem', border: '1px solid ' + D.line, borderRadius: 6, padding: '2px 7px', fontFamily: 'var(--oxr-font-mono)' }}>⌘K</span>
      </div>
      {pill(<React.Fragment><span style={{ color: D.accent }}><Icon d={I.sparkles} size={17} /></span> ASK AI</React.Fragment>, onAskAI)}
      {pill(<React.Fragment><span style={{ color: D.accent }}><Icon d={I.book} size={17} /></span> GUIDES</React.Fragment>)}
    </div>
  );
}

function Welcome() {
  const { Logo } = APP;
  return (
    <div style={{ borderRadius: 18, overflow: 'hidden', padding: '38px 40px', minHeight: 150,
      background: 'linear-gradient(90deg, #160f14 0%, #160f14 22%, #5B0B9E 60%, #9A1EEE 100%)' }}>
      <h1 style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.02em', color: '#fff' }}>Welcome, Super Admin!</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8, fontSize: '1.25rem', fontWeight: 500, color: '#fff' }}>
        Let’s <Logo size={22} onDark />
      </div>
    </div>
  );
}

function ActionCard({ icon, title, sub, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'flex', alignItems: 'center', gap: 18, textAlign: 'left', padding: 18, borderRadius: 14,
      border: '1px solid ' + D.line, background: h ? D.cardHover : D.card, cursor: 'pointer', fontFamily: 'var(--oxr-font-sans)',
      transition: 'background 140ms ease',
    }}>
      <span style={{ width: 60, height: 60, flexShrink: 0, borderRadius: 14, background: D.tile, color: D.text, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon d={icon} size={26} /></span>
      <span>
        <span style={{ display: 'block', fontWeight: 700, fontSize: '1.12rem', color: D.text }}>{title}</span>
        {sub && <span style={{ display: 'block', color: D.muted, fontSize: '0.9rem', marginTop: 2 }}>{sub}</span>}
      </span>
    </button>
  );
}

function QuickActions({ onCreate }) {
  const acts = [
    [I.grid, 'Have a code?', 'Start an Experience'],
    [I.goggles, 'My Devices', null],
    [I.video, 'Create an Asset', null],
    [I.globe, 'Create an Experience', null],
    [I.userCircle, 'Create a Character', null],
    [I.userPlus, 'Invite a User', null],
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
      {acts.map(([ic, t, s]) => <ActionCard key={t} icon={ic} title={t} sub={s} onClick={onCreate} />)}
    </div>
  );
}

const PINS = [
  ['Focused Health Assessment / History Taking', '2 months ago', 'linear-gradient(135deg,#caa46a,#7d6b54)'],
  ['Therapeutic Communication / De-escalation', 'a month ago', 'linear-gradient(135deg,#9fb3c8,#5b7088)'],
  ['Liz Thompson — HR Hiring Manager at the Hospital (P4)', '2 months ago', 'linear-gradient(135deg,#b08968,#5e4634)'],
];

function PinCard({ title, time, bg }) {
  const { LogoMark } = APP;
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ cursor: 'pointer' }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', borderRadius: 12, background: bg, overflow: 'hidden', boxShadow: h ? '0 10px 30px rgba(0,0,0,0.4)' : 'none', transition: 'box-shadow 140ms ease' }}>
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Conversation still</span>
        <div style={{ position: 'absolute', right: 12, bottom: 12, display: 'flex' }}>
          {[0, 1].map((i) => <span key={i} style={{ width: 30, height: 30, borderRadius: 99, background: D.tile, border: '2px solid rgba(0,0,0,0.4)', marginLeft: i ? -8 : 0 }} />)}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        <span style={{ flexShrink: 0, marginTop: 2 }}><LogoMark size={28} onDark /></span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', color: D.accent, fontWeight: 600, fontSize: '1.02rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>{title}</span>
          <span style={{ display: 'block', color: D.muted, fontSize: '0.9rem', marginTop: 3 }}>OrchestrateXR</span>
          <span style={{ display: 'block', color: D.muted, fontSize: '0.82rem' }}>{time}</span>
        </span>
      </div>
    </div>
  );
}

function Home({ onCreate }) {
  return (
    <div style={{ padding: '4px 28px 40px', overflow: 'auto', height: '100%' }}>
      <Welcome />
      <div style={{ height: 24 }} />
      <QuickActions onCreate={onCreate} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: D.text, fontWeight: 700, fontSize: '1.05rem', margin: '30px 0 16px' }}>
        <Icon d={I.pin} size={18} /> Pins
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {PINS.map((p) => <PinCard key={p[0]} title={p[0]} time={p[1]} bg={p[2]} />)}
      </div>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div style={{ padding: '24px 28px', height: '100%' }}>
      <h1 style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 'var(--oxr-text-h2)', letterSpacing: '-0.02em', color: D.text }}>{title}</h1>
      <p style={{ color: D.muted }}>Captured from the home screen only — this surface is left intentionally blank. Home shows the documented patterns.</p>
    </div>
  );
}

Object.assign(window, { AppDark: D, AppIcon: Icon, APP_I: I, AppRail: Rail, AppTopBar: TopBar, AppHome: Home, AppPlaceholder: Placeholder });
