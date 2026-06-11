import React from 'react';
import { Link } from 'react-router-dom';
import { FileSignature, Search, FlaskConical, ShieldCheck, FileText, Scale, ArrowRight } from 'lucide-react';

const CEK_IMG = 'https://grafolojisahtecilik.com/wp-content/uploads/2023/03/cek-senet-sahteciligi.jpg';

const Bilirkisilik = () => {
  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <div className="container text-center">
          <div style={styles.badge}>Bilirkişilik & Danışmanlık Hizmetleri</div>
          <h1 style={styles.title}>Uzman Mütalaası & Bilirkişilik</h1>
          <p style={styles.subtitle}>
            Dr. Şahin İplikçi — Grafoloji ve sahtecilik olaylarında objektif biçimde, bilimsel yöntem ve teknik cihazlar kullanılarak mütalaa (rapor) hazırlanmaktadır. HMK 293 & CMK 67.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={styles.grid}>

            {/* İmza Sahteciliği */}
            <div style={styles.serviceCard}>
              <div style={styles.serviceIconBox}>
                <FileSignature size={32} color="white" />
              </div>
              <h3 style={styles.serviceTitle}>İmza Sahteciliği İncelemesi</h3>
              <p style={styles.serviceDesc}>
                Grafolojik ve grafometrik yöntemle, uluslararası adli yargı ve uzmanlarca kabul edilmiş teknikler uygulanarak sahte veya inkar edilen imzalar bilimsel olarak incelenmektedir.
              </p>
              <ul style={styles.serviceList}>
                <li>İnkar edilen imzaların tespiti</li>
                <li>İmza özelliklerinin karşılaştırmalı analizi</li>
                <li>Zorlama altında atılan imzaların tespiti</li>
                <li>Bilgisayar (CNC Robotik) imzaların tespiti</li>
              </ul>
            </div>

            {/* Belge Tahrifatı */}
            <div style={styles.serviceCard}>
              <div style={{ ...styles.serviceIconBox, backgroundColor: '#8B7536' }}>
                <Search size={32} color="white" />
              </div>
              <h3 style={styles.serviceTitle}>Belge Tahrifatı & Sahtecilik</h3>
              <p style={styles.serviceDesc}>
                VSC, Stereo Mikroskop, UV/IR cihazları ve ESDA sistemi kullanılarak belgede karalama, silme, kazıma, ekleme ve montaj gibi tahrifat türleri tespit edilmektedir.
              </p>
              <ul style={styles.serviceList}>
                <li>Karalama, silme ve kazıma tespiti</li>
                <li>Fotokopi, baskı ve el yazısı farkı tespiti</li>
                <li>Yapıştırma ve kesme işlemleri analizi</li>
                <li>Belge yaşlandırma tespiti</li>
              </ul>
            </div>

            {/* HMK/CMK Mütalaa */}
            <div style={styles.serviceCard}>
              <div style={{ ...styles.serviceIconBox, backgroundColor: '#2D7A4F' }}>
                <Scale size={32} color="white" />
              </div>
              <h3 style={styles.serviceTitle}>HMK 293 / CMK 67 Uzman Mütalaası</h3>
              <p style={styles.serviceDesc}>
                Mahkeme sürecinizde delil niteliğinde, yargı denetimine uygun ve elverişli biçimde hazırlanmış bilimsel raporlar. Hakimin değerlendirmesi yasal bir zorunluluktur.
              </p>
              <ul style={styles.serviceList}>
                <li>Hukuk davaları için HMK 293 mütalaaları</li>
                <li>Ceza davaları için CMK 67/6 mütalaaları</li>
                <li>Bilirkişi raporuna karşı kontr-mütalaa</li>
                <li>Mahkemede sözlü açıklama desteği</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Kapsam bölümü + görsel */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container" style={styles.scopeContainer}>
          <div style={styles.scopeContent}>
            <span style={styles.eyebrow}>Kapsam</span>
            <h2 style={styles.sectionTitle}>Hangi Belge Türlerini İnceliyoruz?</h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Ticari alanda sahte senet, çek ve diğer belgelerin yapılış yöntemleri; kazıma, baskı, fotokopi, el yazısı, ıslak kaşe, klişe baskı gibi birçok yöntemle sahtecilik yapılabilmektedir.
            </p>
            <div style={styles.scopeGrid}>
              {[
                'Çek ve Senet', 'Vekaletname', 'Sözleşme ve Protokol',
                'İbraname', 'Tapu ve Resmi Evraklar', 'Kimlik Belgesi',
                'Diploma ve Sertifika', 'Sigorta Belgeleri', 'Banka Evrakları',
                'E-posta ve Dijital Belge', 'Mektup ve Yazışmalar', 'Tıbbi Belgeler',
              ].map((item, i) => (
                <div key={i} style={styles.scopeItem}>
                  <div style={styles.scopeDot}></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.scopeImageWrapper}>
            <img
              src={CEK_IMG}
              alt="Kriminal çek senet sahteciliği incelemesi"
              style={styles.scopeImage}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div style={styles.scopeImageCaption}>
              Sahte çek ve senet inceleme örneği
            </div>

            <div style={styles.ctaCard}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Ücretsiz Ön Değerlendirme</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Durumunuzu anlayabilmemiz için belgelerinizi gönderin, uzman görüşümüzü ücretsiz paylaşalım.
              </p>
              <Link to="/iletisim" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
                Hemen Başvur <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: { backgroundColor: 'var(--color-surface)' },
  header: {
    padding: '5rem 0',
    backgroundColor: '#fff',
    borderBottom: '1px solid var(--color-border)',
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text-secondary)',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.82rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: 'var(--color-text-secondary)',
    maxWidth: '750px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  serviceCard: {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '12px',
    padding: '2.5rem',
    border: '1px solid var(--color-border)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  serviceIconBox: {
    width: '64px',
    height: '64px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  serviceTitle: {
    fontSize: '1.4rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
  },
  serviceDesc: {
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
    fontSize: '0.97rem',
  },
  serviceList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    paddingTop: '1rem',
    borderTop: '1px solid var(--color-border)',
  },
  scopeContainer: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  scopeContent: { flex: '1 1 400px' },
  scopeImageWrapper: { flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '1.5rem' },
  eyebrow: {
    display: 'inline-block',
    color: 'var(--color-accent)',
    fontWeight: '600',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    borderBottom: '2px solid var(--color-accent)',
    paddingBottom: '2px',
  },
  sectionTitle: {
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    color: 'var(--color-primary)',
    marginBottom: '1.25rem',
  },
  scopeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.75rem',
  },
  scopeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    fontWeight: '500',
  },
  scopeDot: {
    width: '7px', height: '7px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-accent)',
    flexShrink: 0,
  },
  scopeImage: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
    display: 'block',
  },
  scopeImageCaption: {
    textAlign: 'center',
    fontSize: '0.82rem',
    color: 'var(--color-text-secondary)',
    fontStyle: 'italic',
  },
  ctaCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    border: '1px solid var(--color-border)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
  },
};

export default Bilirkisilik;
