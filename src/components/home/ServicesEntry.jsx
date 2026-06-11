import React from 'react';
import { Link } from 'react-router-dom';
import { FileSignature, Search, ShieldCheck, ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';

const ServicesEntry = () => {
  return (
    <section className="section-padding" style={styles.section}>
      <div className="container">
        <div style={styles.sectionHeader}>
          <span style={styles.eyebrow}>Uzmanlık Alanlarımız</span>
          <h2 style={styles.title}>
            Her ziyaretçi için<br />
            <span style={styles.titleGold}>doğru hizmet</span>
          </h2>
          <p style={styles.subtitle}>
            İster hukuki bir dava için bilirkişi raporu arıyor, ister alanınızda kendinizi geliştirmek istiyor olun — doğru yerdesiniz.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Bilirkişilik Kartı */}
          <div style={styles.card}>
            <div style={{ ...styles.cardHeader, background: 'linear-gradient(135deg, var(--color-primary) 0%, #2A4F82 100%)' }}>
              <FileSignature size={36} color="rgba(255,255,255,0.9)" />
              <h3 style={styles.cardTitle}>Bilirkişilik Hizmetleri</h3>
              <p style={styles.cardIntro}>Avukatlar, savcılar ve mahkemeler için</p>
            </div>
            <div style={styles.cardBody}>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> İmza Sahteciliği İncelemesi</li>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> Belge Tahrifatı & Montaj Tespiti</li>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> HMK 293 / CMK 67 Uzman Mütalaası</li>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> Çek, Senet, Sözleşme İncelemesi</li>
              </ul>
              <div style={styles.cardFooter}>
                <div style={styles.cardNote}>Ön Değerlendirme Ücretsiz</div>
                <Link to="/bilirkisilik" className="btn btn-primary" style={styles.cardBtn}>
                  Hizmeti İncele <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Eğitim Kartı */}
          <div style={styles.card}>
            <div style={{ ...styles.cardHeader, background: 'linear-gradient(135deg, #8B7536 0%, var(--color-accent) 100%)' }}>
              <GraduationCap size={36} color="rgba(255,255,255,0.9)" />
              <h3 style={styles.cardTitle}>Eğitim Hizmetleri</h3>
              <p style={styles.cardIntro}>Avukat, noter ve kurum çalışanları için</p>
            </div>
            <div style={styles.cardBody}>
              <ul style={styles.featureList}>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> Adli Grafoloji Sertifika Programı</li>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> Sahte Belge Tespiti Seminerleri</li>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> Avukat & Stajyer Grubu Kursları</li>
                <li style={styles.featureItem}><span style={styles.bullet}>—</span> Kurumsal Eğitim (Banka, Sigorta)</li>
              </ul>
              <div style={styles.cardFooter}>
                <div style={styles.cardNote}>Sertifika Programları Mevcut</div>
                <Link to="/egitim" className="btn btn-accent" style={styles.cardBtn}>
                  Eğitimleri Gör <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#fff',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  eyebrow: {
    display: 'inline-block',
    padding: '0.3rem 1rem',
    color: 'var(--color-accent)',
    fontWeight: '600',
    fontSize: '0.82rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    borderBottom: '2px solid var(--color-accent)',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
    lineHeight: 1.15,
    marginBottom: '1rem',
    color: 'var(--color-primary)',
  },
  titleGold: {
    color: 'var(--color-accent)',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-text-secondary)',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHeader: {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  cardTitle: {
    color: 'white',
    margin: 0,
    fontSize: '1.6rem',
  },
  cardIntro: {
    color: 'rgba(255,255,255,0.75)',
    margin: 0,
    fontSize: '0.95rem',
  },
  cardBody: {
    backgroundColor: 'white',
    padding: '2rem 2.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    gap: '0.75rem',
    color: 'var(--color-text)',
    fontSize: '0.97rem',
  },
  bullet: {
    color: 'var(--color-accent)',
    fontWeight: '700',
    flexShrink: 0,
  },
  cardFooter: {
    paddingTop: '1.5rem',
    borderTop: '1px solid var(--color-surface-secondary)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  cardNote: {
    fontSize: '0.85rem',
    color: 'var(--color-success)',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  cardBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0.6rem 1.25rem',
    fontSize: '0.9rem',
  }
};

export default ServicesEntry;
