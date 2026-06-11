import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Images from grafolojisahtecilik.com
const IMAGES = {
  portrait: 'https://grafolojisahtecilik.com/wp-content/uploads/2022/06/motorize-kodlu-mikroskop.png',
  siteHero: 'https://grafolojisahtecilik.com/wp-content/uploads/2023/03/grafoloji-sajtecilik-site.png',
  cekSenet: 'https://grafolojisahtecilik.com/wp-content/uploads/2023/03/cek-senet-sahteciligi.jpg',
};

const Hero = () => {
  return (
    <section style={styles.hero}>
      {/* Background grid pattern */}
      <div style={styles.bgPattern} aria-hidden="true"></div>

      <div className="container" style={styles.container}>
        {/* Left: Content */}
        <div style={styles.content}>
          <span style={styles.badge}>Adalet Bakanlığı UYAP Kayıtlı Bilirkişi</span>

          <h1 style={styles.title}>
            İmza ve belgeler
            <br />
            <span style={styles.titleGold}>gerçeği söyler.</span>
          </h1>

          <p style={styles.subtitle}>
            Ben onu mahkemeye taşırım. <strong>Dr. Şahin İplikçi</strong> — Adli Grafoloji & Sahtecilik Uzmanı. 
            HMK 293 ve CMK 67 kapsamında, teknik cihazlarla desteklenmiş bilimsel uzman mütalaası.
          </p>

          <div style={styles.legalBox}>
            <p style={styles.legalText}>
              <strong>HMK Madde 293:</strong> "Taraflar, dava konusu olayla ilgili olarak, uzmanından bilimsel mütalaa alabilirler."
            </p>
          </div>

          <div style={styles.actions}>
            <Link to="/bilirkisilik" className="btn btn-primary" style={styles.ctaPrimary}>
              Bilirkişilik Hizmetleri
            </Link>
            <Link to="/egitim" className="btn btn-outline" style={styles.ctaSecondary}>
              Eğitimleri Gör
            </Link>
          </div>

          <div style={styles.metaRow}>
            <div style={styles.metaItem}><div style={styles.greenDot}></div>Ön Değerlendirme Ücretsiz</div>
            <div style={styles.metaItem}><div style={styles.greenDot}></div>4 Saat İçinde Geri Dönüş</div>
            <div style={styles.metaItem}><div style={styles.greenDot}></div>İstanbul & Türkiye Geneli</div>
          </div>
        </div>

        {/* Right: Images */}
        <div style={styles.imageStack}>
          {/* Main site preview image */}
          <div style={styles.mainImageWrapper}>
            <img
              src={IMAGES.siteHero}
              alt="Dr. Şahin İplikçi - Adli Grafoloji Uzmanı"
              style={styles.mainImage}
              onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Dr+Sahin&background=1E3A5F&color=fff&size=600'; }}
            />
            {/* Floating card: logo/microscopium */}
            <div style={styles.floatingLeft}>
              <img
                src={IMAGES.portrait}
                alt="Adli inceleme mikroskobu"
                style={styles.floatImg}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Stats cards */}
          <div style={styles.statsRow}>
            <div style={styles.statCard}>
              <div style={styles.statNum}>1000+</div>
              <div style={styles.statLabel}>Uzman Mütalaası</div>
            </div>
            <div style={{ ...styles.statCard, backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <div style={{ ...styles.statNum, color: 'var(--color-accent)' }}>15+</div>
              <div style={{ ...styles.statLabel, color: 'rgba(255,255,255,0.8)' }}>Yıl Deneyim</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNum}>UYAP</div>
              <div style={styles.statLabel}>Kayıtlı Bilirkişi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    padding: '5rem 0 4rem',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #F8F7F4 0%, #EEF0F3 60%, #E8EAF0 100%)',
  },
  bgPattern: {
    position: 'absolute',
    top: 0, right: 0,
    width: '50%',
    height: '100%',
    backgroundImage: 'radial-gradient(circle, rgba(184,150,62,0.07) 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    zIndex: 0,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap',
  },
  content: {
    flex: '1 1 460px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.4rem 1rem',
    backgroundColor: 'rgba(184,150,62,0.12)',
    color: 'var(--color-accent)',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.8rem',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    border: '1px solid rgba(184,150,62,0.2)',
    width: 'fit-content',
  },
  title: {
    fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
    lineHeight: 1.1,
    color: 'var(--color-primary)',
    margin: 0,
  },
  titleGold: {
    color: 'var(--color-accent)',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
    maxWidth: '520px',
    margin: 0,
  },
  legalBox: {
    borderLeft: '3px solid var(--color-accent)',
    paddingLeft: '1rem',
    backgroundColor: 'rgba(184,150,62,0.05)',
    padding: '0.75rem 1rem',
    borderRadius: '0 6px 6px 0',
  },
  legalText: {
    fontFamily: 'var(--font-law)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    margin: 0,
    fontStyle: 'italic',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  ctaPrimary: { padding: '0.9rem 2rem', fontSize: '1rem' },
  ctaSecondary: { padding: '0.9rem 2rem', fontSize: '1rem' },
  metaRow: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    fontSize: '0.88rem',
    color: 'var(--color-text-secondary)',
    fontWeight: '500',
  },
  greenDot: {
    width: '8px', height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-success)',
    flexShrink: 0,
  },
  imageStack: {
    flex: '1 1 420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  mainImageWrapper: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'visible',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '16px',
    boxShadow: '0 24px 60px rgba(30,58,95,0.12)',
    display: 'block',
  },
  floatingLeft: {
    position: 'absolute',
    bottom: '-20px',
    left: '-20px',
    width: '100px',
    height: '120px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    overflow: 'hidden',
  },
  floatImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.75rem',
    marginTop: '1rem',
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.25rem',
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
    border: '1px solid var(--color-border)',
  },
  statNum: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.75rem',
    fontWeight: '700',
    color: 'var(--color-primary)',
    lineHeight: 1,
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '0.75rem',
    color: 'var(--color-text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '500',
  },
};

export default Hero;
