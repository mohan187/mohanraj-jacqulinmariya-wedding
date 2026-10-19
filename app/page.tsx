'use client'

import { useRef, useState } from 'react'
import { CalendarDays, Check, Clock3, Heart, MapPin, Music2, X, Volume2, VolumeX } from 'lucide-react'

const details = [
  { icon: CalendarDays, label: 'Sunday, 22 November 2026', value: 'The auspicious day' },
  { icon: Clock3, label: '9:00 – 10:30 AM', value: 'The wedding ceremony' },
  { icon: MapPin, label: 'Sri Shanmugar Mahal', value: 'Thiruchendur, Tamil Nadu' },
]

function VinayagarMark({ className = '' }: { className?: string }) {
  return <img className={className} src="/vinayagar-gold.png" alt="Golden Lord Vinayagar emblem" />
}
function VelMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 100 260" role="img" aria-label="Antique gold Vel, the sacred spear of Lord Murugan" fill="none">
    <path d="M50 8 C44 30 25 44 25 67 C25 83 36 94 50 102 C64 94 75 83 75 67 C75 44 56 30 50 8Z" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M50 18 L50 239 M39 111 Q50 124 61 111 M42 133 Q50 140 58 133 M44 154 Q50 160 56 154 M46 175 Q50 180 54 175" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M50 239 L43 226 M50 239 L57 226 M50 239 L50 215" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M34 63 Q50 76 66 63 M40 48 Q50 56 60 48" stroke="currentColor" strokeWidth="1.5" opacity=".7"/>
  </svg>
}

export default function Page() {
  const [intro, setIntro] = useState<'welcome'>('welcome')
  const [showIntro, setShowIntro] = useState(true)
  const [showRsvp, setShowRsvp] = useState(false)
  const [showWishes, setShowWishes] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null)
  const [guestName, setGuestName] = useState('')
  const [guestCount, setGuestCount] = useState('1')
  const [wish, setWish] = useState('')
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [musicUnavailable, setMusicUnavailable] = useState(false)

  function enterInvitation() {
    // Start the music from the guest's click, then go directly to the invitation.
    void startMusic()
    setShowIntro(false)
  }
  function getAudioPlayer() {
    let player = audioRef.current
    if (!player) {
      player = new Audio('/anbil-avan-bgm.m4a')
      player.loop = true
      player.volume = 0.32
      player.preload = 'auto'
      player.onerror = () => { setMusicPlaying(false); setMusicUnavailable(true); audioRef.current = null }
      audioRef.current = player
    }
    return player
  }

  async function startMusic() {
    const player = getAudioPlayer()
    try {
      await player.play()
      setMusicPlaying(true)
      setMusicUnavailable(false)
    } catch {
      setMusicPlaying(false)
      setMusicUnavailable(true)
    }
  }

  async function toggleMusic() {
    const player = getAudioPlayer()
    if (!player.paused) {
      player.pause()
      setMusicPlaying(false)
      return
    }
    await startMusic()
  }
  function submitRsvp(event: React.FormEvent) {
    event.preventDefault()
    if (!attending || !guestName.trim()) return
    setSubmitted(true)
  }

  return <main className="wedding-shell">
    {showIntro && <div className="intro-screen intro-welcome" aria-label="Wedding invitation welcome screen">
      <div className="intro-stars" aria-hidden="true" />
      <div className="welcome-ornament" aria-hidden="true"><span>✦</span><i /></div>
      <div className="welcome-content">
        <div className="welcome-monogram">M<span>✦</span>J</div>
        <p className="welcome-kicker">A celebration of love &amp; blessings</p>
        <h1>Mohanraj <em>&amp;</em><br/>Jacqulin Mariya</h1>
        <div className="welcome-divider"><span />✧<span /></div>
        <p className="welcome-date">22 · 11 · 2026 <b>•</b> Thiruchendur</p>
        <button type="button" className="gold-button enter-invitation-button" onClick={enterInvitation} aria-label="Enter the wedding invitation">Enter invitation <span aria-hidden="true">↗</span></button>
      </div>
      <div className="welcome-bottom-rule" aria-hidden="true" />
    </div>}

    <div className="paper-grain" aria-hidden="true" />
    <header className="site-header">
      <a href="#home" className="brand-lockup"><span className="brand-seal"><VelMark /></span><span>MJ’s <small>Wedding Invitation</small></span></a>
      <div className="header-devotion"><VinayagarMark className="header-vinayagar" /></div>
      <button onClick={toggleMusic} className="music-toggle" title={musicUnavailable ? 'Background track: public/anbil-avan-bgm.m4a' : 'Background music control'} aria-label={musicPlaying ? 'Pause background music' : 'Play background music'} aria-pressed={musicPlaying}>{musicPlaying ? <Volume2 size={17}/> : <VolumeX size={17}/>}<span>{musicPlaying ? 'Music on' : musicUnavailable ? 'Add music' : 'Music off'}</span></button>
    </header>

    <section id="home" className="hero-section">
      <div className="hero-copy">
        <div className="devotional-mantra devotional-blessing"><span className="blessing-rule" aria-hidden="true"/><p>May Lord Murugan’s grace guide our union</p><span className="blessing-rule" aria-hidden="true"/></div>
        <h1 className="couple-names"><span>Mohanraj</span><em>&amp;</em><span className="bride-name">Jacqulin <b>Mariya</b></span></h1>
        <p className="hero-message">With hearts full of gratitude, we invite you to share in the joy of our wedding and bless the beginning of our life together.</p>
        <div className="hero-actions"><button className={`scratch-trigger ${revealed ? 'scratched' : ''}`} onClick={() => setRevealed(!revealed)} aria-expanded={revealed}><span className="scratch-label">{revealed ? 'Our special day' : 'Reveal date'}</span><span className="scratch-arrow">✦</span></button></div>
        <div className={`date-reveal scratch-date ${revealed ? 'date-visible' : ''}`} aria-hidden={!revealed}><div className="date-number"><span>Sunday</span><strong>22</strong><small>November 2026</small></div><div className="date-copy"><span>Our special day</span><p>Sunday · 22-11-2026</p></div></div>
      </div>
      <div className="hero-art-wrap">
        <div className="ornate-ring ring-one"/><div className="ornate-ring ring-two"/>
        <div className="hero-art couple-art"><img src="/mj-couple-portrait.png" alt="A rear-facing South Indian wedding couple in ivory and blush traditional attire, with the full saree trail visible"/><div className="art-vignette"/><div className="art-caption"><span className="tiny-ornament">✦</span><p>A sacred<br/><i>new beginning</i></p><small>WITH DIVINE GRACE</small></div></div>
        <div className="floating-vel"><VelMark /></div><span className="art-sparkle sparkle-one">✧</span><span className="art-sparkle sparkle-two">✦</span>
      </div>
      <div className="hero-bottom-note"><span /> A union blessed with faith, family &amp; love <span /></div>
    </section>

    <section className="event-strip" aria-label="Wedding details">{details.map(({ icon: Icon, label, value }) => label === 'Sri Shanmugar Mahal' ? <a key={label} className="event-item event-item-location" href="https://maps.app.goo.gl/LWAwPDiBuJRTTaAM9" target="_blank" rel="noreferrer" aria-label="Open directions to Sri Shanmugar Mahal in Google Maps"><div className="event-icon event-icon-pin"><MapPin size={20} strokeWidth={1.5}/></div><div><p>{label}</p><span>{value}</span><small className="venue-tap-hint">Tap pin for directions ↗</small></div></a> : <article key={label} className="event-item"><div className="event-icon"><Icon size={20} strokeWidth={1.4}/></div><div><p>{label}</p><span>{value}</span></div></article>)}</section>

    <section className="invitation-section">
      <div className="section-ornament"><span/>✦<span/></div><p className="section-kicker">With the love and blessings of our families</p><h2>Two hearts. One sacred beginning.</h2><p className="invitation-text">We would be honoured by your presence as we begin this beautiful journey. Your blessings will make our day complete.</p>
      <div className="invitation-card"><div className="card-inner"><div className="card-monogram">M<span>✦</span>J</div><p className="card-kicker">Together with our families</p><h3>Mohanraj <i>&amp;</i> Jacqulin Mariya</h3><p className="card-invite">request the pleasure of your company<br/>at their wedding ceremony</p><div className="card-divider"><span>✦</span></div><p className="card-date">Sunday, 22-11-2026</p><div className="card-details"><div><span>MUHURTHAM</span><strong>9:00 – 10:30 AM</strong></div><div><span>VENUE</span><strong>Sri Shanmugar Mahal</strong><small>Thiruchendur, Tamil Nadu</small></div></div></div></div>
      <div className="section-actions"><a className="outline-button direction-button" href="https://maps.app.goo.gl/LWAwPDiBuJRTTaAM9" target="_blank" rel="noreferrer"><MapPin size={17}/> Get directions <span aria-hidden="true">↗</span></a><button className="outline-button" onClick={() => setShowWishes(true)}>Send your wishes</button></div>
    </section>

    <footer className="site-footer"><div className="footer-vel"><VelMark /></div><p className="footer-mantra">வேலும் மயிலும் துணை</p><p>With love and gratitude,</p><strong>Mohanraj &amp; Jacqulin Mariya</strong><small>22 · 11 · 2026 <span>✦</span> Thiruchendur</small><button className="primary-button footer-rsvp" onClick={() => setShowRsvp(true)}><Heart size={15}/> Kindly RSVP</button></footer>

    {(showRsvp || showWishes) && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) { setShowRsvp(false); setShowWishes(false); setSubmitted(false) } }}><div className="modal-card" role="dialog" aria-modal="true" aria-label={showRsvp ? 'Wedding RSVP' : 'Send your wishes'}><button onClick={() => { setShowRsvp(false); setShowWishes(false); setSubmitted(false) }} className="modal-close" aria-label="Close"><X size={18}/></button>{showRsvp ? submitted ? <div className="success-state"><div className="success-icon"><Check size={26}/></div><h2>Thank you, {guestName}</h2><p>Your response has been noted in this invitation preview. We look forward to celebrating together.</p><button className="primary-button" onClick={() => { setShowRsvp(false); setSubmitted(false) }}>Close invitation</button><small>Note: this demo does not send RSVP data to a server.</small></div> : <form onSubmit={submitRsvp}><p className="modal-kicker">Your presence means everything</p><h2>Will you join us?</h2><div className="attendance-options"><button type="button" onClick={() => setAttending('yes')} className={attending === 'yes' ? 'selected' : ''}><Check size={17}/><strong>Joyfully accept</strong><span>I will be there</span></button><button type="button" onClick={() => setAttending('no')} className={attending === 'no' ? 'selected' : ''}><Heart size={17}/><strong>Regretfully decline</strong><span>With love and blessings</span></button></div><label>Your name<input required value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Enter your name"/></label>{attending === 'yes' && <label>Number of guests<select value={guestCount} onChange={(e) => setGuestCount(e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option></select></label>}<label>A blessing for the couple<textarea value={wish} onChange={(e) => setWish(e.target.value)} rows={3} placeholder="Share a loving note…"/></label><button type="submit" className="primary-button full-button" disabled={!attending}>Send my response</button></form> : <div><p className="modal-kicker">A little note from you</p><h2>Send your wishes</h2><p className="modal-intro">Your words will become a part of our sweetest memories.</p><textarea className="wish-field" value={wish} onChange={(e) => setWish(e.target.value)} rows={5} placeholder="Write your wishes here…"/><button onClick={() => setShowWishes(false)} className="primary-button full-button">Done</button><p className="demo-note">Wishes are preview-only and are not saved to a server.</p></div>}</div></div>}
  </main>
}
