import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.topSection}>
        {/* Brand column */}
        <div style={styles.brandCol}>
          <Link to="/" style={styles.logoLink}>
            <div style={styles.logoIcon}><Scale size={20} color="white" /></div>
            <span style={styles.logoTitle}>Adli Grafoloji</span>
          </Link>
          <p style={styles.tagline}>
            İmza ve belgeler gerçeği söyler — ben onu mahkemeye taşırım.
          </p>
          <div style={styles.trustBadge}>
            <span>Adalet Bakanlığı UYAP Bilirkişisi</span>
          </div>
        </div>

        {/* Links column */}
        <div style={styles.linksCol}>
          <h4 style={styles.colTitle}>Hizmetler</h4>
          <nav style={styles.linkList}>
            <Link to="/bilirkisilik" style={styles.link}>İmza Sahteciliği İncelemesi</Link>
            <Link to="/bilirkisilik" style={styles.link}>Belge Tahrifatı Tespiti</Link>
            <Link to="/bilirkisilik" style={styles.link}>HMK 293 Uzman Mütalaası</Link>
            <Link to="/egitim" style={styles.link}>Adli Grafoloji Eğitimi</Link>
            <Link to="/egitim" style={styles.link}>Kurumsal Eğitim Paketleri</Link>
          </nav>
        </div>

        {/* Contact column */}
        <div style={styles.contactCol}>
          <h4 style={styles.colTitle}>İletişim</h4>
          <div style={styles.contactList}>
            <a href="tel:+905309241125" style={styles.contactItem}>
              <Phone size={16} style={styles.contactIcon} />0530 924 11 25
            </a>
            <a href="tel:+905323246700" style={styles.contactItem}>
              <Phone size={16} style={styles.contactIcon} />0532 324 67 00
            </a>
            <a href="mailto:info@grafolojisahtecilik.com" style={styles.contactItem}>
              <Mail size={16} style={styles.contactIcon} />info@grafolojisahtecilik.com
            </a>
            <div style={{ ...styles.contactItem, cursor: 'default' }}>
              <MapPin size={16} style={{ ...styles.contactIcon, marginTop: '2px', flexShrink: 0 }} />
              <span>Beşiktaş Yıldız Mah. Serencebey Yokuşu Sk. No:12 D.2, Beşiktaş/İstanbul</span>
            </div>
          </div>
          <a href="https://wa.me/905309241125" target="_blank" rel="noopener noreferrer" style={styles.waBtn}>
            <MessageCircle size={18} />WhatsApp ile Sor
          </a>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div className="container" style={styles.bottomInner}>
          <span>© {new Date().getFullYear()} Adli Grafoloji & Sahtecilik Uzmanlık Merkezi. Tüm hakları saklıdır.</span>
          <div style={styles.legalRow}>
            <Link to="/kvkk" style={styles.legalLink}>KVKK Aydınlatma Metni</Link>
            <span style={styles.sep}>|</span>
            <Link to="/hakkimda" style={styles.legalLink}>Yasal Dayanak</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0D1D30',
    color: 'rgba(255,255,255,0.75)',
  },
  topSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    padding: '4rem 1.5rem',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  logoLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '36px',
    height: '36px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.2rem',
    color: 'white',
    fontWeight: '700',
  },
  tagline: {
    fontStyle: 'italic',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: 'rgba(255,255,255,0.55)',
    margin: 0,
    fontFamily: 'var(--font-heading)',
    fontSize: '1.05rem',
  },
  trustBadge: {
    display: 'inline-flex',
    padding: '0.4rem 0.75rem',
    backgroundColor: 'rgba(184,150,62,0.15)',
    borderLeft: '3px solid var(--color-accent)',
    borderRadius: '4px',
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'var(--color-accent)',
    letterSpacing: '0.3px',
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  colTitle: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: 0,
    fontFamily: 'var(--font-body)',
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  contactItem: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '0.92rem',
    transition: 'color 0.2s',
    lineHeight: 1.5,
  },
  contactIcon: {
    color: 'var(--color-accent)',
    flexShrink: 0,
  },
  waBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '0.65rem 1.25rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.92rem',
    width: 'fit-content',
    transition: 'opacity 0.2s',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    padding: '1.25rem 0',
  },
  bottomInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.35)',
  },
  legalRow: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
  },
  legalLink: {
    color: 'rgba(255,255,255,0.35)',
    textDecoration: 'none',
    fontSize: '0.82rem',
  },
  sep: {
    color: 'rgba(255,255,255,0.2)',
  }
};

export default Footer;
