import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Scale, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
    fontWeight: isActive ? '600' : '500',
    fontSize: '0.95rem',
    textDecoration: 'none',
    padding: '0.25rem 0',
    borderBottom: isActive ? '2px solid var(--color-accent)' : '2px solid transparent',
    transition: 'all 0.2s ease',
  });

  return (
    <header style={{
      ...styles.header,
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 1px 0 var(--color-border)',
    }}>
      <div className="container" style={styles.inner}>
        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logoIcon}>
            <Scale size={22} color="white" />
          </div>
          <div>
            <div style={styles.logoTitle}>Adli Grafoloji</div>
            <div style={styles.logoSub}>& Sahtecilik Uzmanı</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={styles.desktopNav}>
          <NavLink to="/" end style={navLinkStyle}>Ana Sayfa</NavLink>
          <NavLink to="/bilirkisilik" style={navLinkStyle}>Bilirkişilik</NavLink>
          <NavLink to="/egitim" style={navLinkStyle}>Eğitimler</NavLink>
          <NavLink to="/hakkimda" style={navLinkStyle}>Hakkımda</NavLink>
        </nav>

        <div style={styles.desktopActions}>
          <a href="tel:+905309241125" style={styles.phoneLink}>0530 924 11 25</a>
          <Link to="/iletisim" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}>
            Randevu Al
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button style={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menüyü aç/kapat">
          {isMenuOpen ? <X size={24} color="var(--color-primary)" /> : <Menu size={24} color="var(--color-primary)" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div style={styles.mobileNav}>
          {[
            { to: '/', label: 'Ana Sayfa', end: true },
            { to: '/bilirkisilik', label: 'Bilirkişilik Hizmetleri' },
            { to: '/egitim', label: 'Eğitim Hizmetleri' },
            { to: '/hakkimda', label: 'Hakkımda & Yasal Dayanak' },
            { to: '/iletisim', label: 'İletişim & Randevu' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setIsMenuOpen(false)}
              style={({ isActive }) => ({
                ...styles.mobileNavLink,
                backgroundColor: isActive ? 'rgba(184,150,62,0.08)' : 'transparent',
                color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                fontWeight: isActive ? '600' : '400',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <div style={styles.mobileCTA}>
            <Link to="/iletisim" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={() => setIsMenuOpen(false)}>
              Randevu Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'box-shadow 0.3s ease',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '76px',
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '42px',
    height: '42px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--color-primary)',
    lineHeight: 1.1,
  },
  logoSub: {
    fontSize: '0.78rem',
    color: 'var(--color-text-secondary)',
    letterSpacing: '0.5px',
    lineHeight: 1.2,
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  desktopActions: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  phoneLink: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.9rem',
    fontWeight: '500',
    textDecoration: 'none',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    '@media (max-width: 768px)': {
      display: 'flex',
    }
  },
  mobileNav: {
    borderTop: '1px solid var(--color-border)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  mobileNavLink: {
    padding: '1rem 1.5rem',
    textDecoration: 'none',
    fontSize: '1rem',
    borderBottom: '1px solid var(--color-surface-secondary)',
    transition: 'background-color 0.2s ease',
  },
  mobileCTA: {
    padding: '1.25rem 1.5rem',
  }
};

/* Inject responsive CSS for mobile nav */
const style = document.createElement('style');
style.textContent = `
  @media (min-width: 769px) {
    .mobile-toggle { display: none !important; }
  }
  @media (max-width: 900px) {
    .header-desktop-nav { display: none !important; }
    .header-desktop-actions { display: none !important; }
    .header-mobile-toggle { display: flex !important; }
  }
`;
document.head.appendChild(style);

export default Header;
