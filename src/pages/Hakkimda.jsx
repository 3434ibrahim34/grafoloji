import React from 'react';
import { Link } from 'react-router-dom';
import { Award, FileText, Scale, CheckCircle } from 'lucide-react';

// Images from grafolojisahtecilik.com
const PORTRAIT_IMG = 'https://grafolojisahtecilik.com/wp-content/uploads/2022/06/motorize-kodlu-mikroskop.png';
const CEK_SENET_IMG = 'https://grafolojisahtecilik.com/wp-content/uploads/2023/03/cek-senet-sahteciligi.jpg';

const Hakkimda = () => {
  return (
    <div style={styles.page}>
      {/* Hero */}
      <section className="section-padding" style={styles.hero}>
        <div className="container" style={styles.container}>
          <div style={styles.imageColumn}>
            <img
              src={PORTRAIT_IMG}
              alt="Dr. Şahin İplikçi - Adli Grafoloji Uzmanı"
              style={styles.portrait}
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Dr+Sahin+Iplikci&background=1E3A5F&color=fff&size=500&bold=true';
              }}
            />
            <div style={styles.statsBox}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>1000+</span>
                <span style={styles.statLabel}>Uzman Mütalaası</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>15+</span>
                <span style={styles.statLabel}>Yıl Deneyim</span>
              </div>
            </div>
          </div>

          <div style={styles.contentColumn}>
            <div style={styles.badge}>Hakkımızda</div>
            <h1 style={styles.title}>Dr. Şahin İplikçi</h1>
            <p style={styles.titleSub}>Adli Bilirkişi, Danışman & Eğitici</p>

            <p style={styles.bio}>
              Adli Bilimler içerisinde önemli bir yeri olan Grafoloji ve Sahtecilik konusu gün geçtikçe önem ve özelliği artırmaktadır. Dr. Şahin İplikçi, sahtecilik olayları — özellikle çek, senet, özel protokol, sözleşmeler ve vekaletname — üzerinde uzun yıllardır bilimsel incelemeler yapmakta ve mahkemelere raporlar (mütalaalar) sunmaktadır.
            </p>
            <p style={styles.bio}>
              Grafoloji ve sahtecilik olaylarında <strong>objektif biçimde bilimsel olarak</strong>, teknik cihazlar kullanılarak mütalaa (raporlar) yargı denetimine uygun ve elverişli biçimde hazırlanmaktadır. Uluslararası adli yargı ve uzmanlarca kabul edilmiş grafolojik ve grafometrik yöntemler uygulanmaktadır.
            </p>

            <div style={styles.credentials}>
              <h3 style={styles.subTitle}><Award size={20} color="var(--color-accent)" /> Uzmanlık & Sicil</h3>
              <ul style={styles.list}>
                {[
                  'Adalet Bakanlığı UYAP Bilirkişi Sicili (Aktif)',
                  'ADLİ BİLİRKİŞİ, TEKNOLOJİK DANIŞMANLIK VE EĞİTİM MERKEZİ',
                  'Grafolojik ve Grafometrik İnceleme Sertifikası',
                  'Adli Stilometri Eğitimi',
                  'CNC Robotik İmza Tespiti Uzmanlığı',
                ].map((item, i) => (
                  <li key={i} style={styles.listItem}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cihazlar bölümü */}
      <section className="section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container" style={styles.devicesContainer}>
          <div style={styles.devicesLeft}>
            <span style={styles.eyebrow}>Laboratuvar Ekipmanları</span>
            <h2 style={styles.devicesTitle}>Kriminal İncelemede Kullanılan Cihazlar</h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              İnceleme konusu belgeler, uluslararası adli yargı ve uzmanlarca kabul edilmiş olan grafolojik ve grafometrik yöntemle aşağıdaki cihazlarla incelenmektedir:
            </p>
            <ul style={styles.deviceList}>
              {[
                '7X – 5X – 3X büyüteç (optik) ve farklı şiddette ışık ışınları',
                'ASIMETO SZM4 Stereo Mikroskop',
                'S 520 DOCUMENT DEDECTOR — IR-UV 365 nm / UV 254 nm / 980 Laser',
                'VSC (Video Spectral Comparator)',
                'ESDA2 (Electro Static Detection Apparatus)',
                'Forensic XP-4010 (Tübitak onaylı)',
              ].map((item, i) => (
                <li key={i} style={styles.deviceItem}>
                  <div style={styles.deviceBullet}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.devicesRight}>
            <img
              src={CEK_SENET_IMG}
              alt="Kriminal çek senet sahteciliği incelemesi"
              style={styles.devicesImg}
              onError={(e) => { e.target.style.opacity = '0.3'; }}
            />
            <div style={styles.imgCaption}>
              Kriminal inceleme laboratuvarı — Çek & Senet Sahteciliği
            </div>
          </div>
        </div>
      </section>

      {/* Yasal Dayanak */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container" style={styles.lawContainer}>
          <div style={styles.lawHeader}>
            <Scale size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
            <h2 style={styles.title}>Yasal Dayanak & Uzman Mütalaası</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Mahkeme dışından alınan özel raporların hukuki geçerliliği yasalarla teminat altına alınmıştır.
            </p>
          </div>

          <div style={styles.lawCards}>
            <div style={styles.lawCard}>
              <div style={styles.lawCardHeader}>
                <h3>HMK Madde 293</h3>
                <span style={styles.lawTag}>Hukuk Davaları</span>
              </div>
              <blockquote style={styles.lawQuote}>
                "Taraflar, dava konusu olayla ilgili olarak, uzmanından bilimsel mütalaa alabilirler."
              </blockquote>
              <p style={styles.lawDesc}>
                6100 sayılı HMK'nın 293. maddesi kapsamında, özellikle Asliye Hukuk, Ticaret ve İcra Hukuk mahkemelerindeki imza inkarı davalarında, kendi lehinize delil sunmak veya aleyhinize olan bir bilirkişi raporunu çürütmek için bizden bilimsel mütalaa alabilirsiniz.
              </p>
            </div>

            <div style={styles.lawCard}>
              <div style={styles.lawCardHeader}>
                <h3>CMK Madde 67/6</h3>
                <span style={styles.lawTag}>Ceza Davaları</span>
              </div>
              <blockquote style={styles.lawQuote}>
                "Cumhuriyet savcısı, katılan, vekili, şüpheli veya sanık, müdafi veya kanuni temsilci, yargılama konusu olayla ilgili olarak... uzmanından bilimsel mütalaa alabilirler."
              </blockquote>
              <p style={styles.lawDesc}>
                5271 sayılı CMK'nın 67/6. maddesi kapsamında resmi veya özel belgede sahtecilik suçlamalarında, savunmanızı bilimsel temellere oturtmak için bağımsız uzman görüşü sunma hakkınız vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: { backgroundColor: 'var(--color-surface)' },
  hero: { backgroundColor: 'var(--color-surface)' },
  container: {
    display: 'flex',
    gap: '5rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  imageColumn: {
    flex: '1 1 350px',
    position: 'relative',
    maxWidth: '400px',
  },
  portrait: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '16px',
    backgroundColor: 'white',
    padding: '1rem',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
  },
  statsBox: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '1.5rem',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    border: '1px solid var(--color-border)',
  },
  statItem: { display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'center' },
  statNumber: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--color-primary)',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.8rem',
    color: 'var(--color-text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '4px',
    fontWeight: '500',
  },
  contentColumn: { flex: '1 1 450px' },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    backgroundColor: 'rgba(184,150,62,0.1)',
    color: 'var(--color-accent)',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.82rem',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: 'var(--color-primary)',
    marginBottom: '0.5rem',
  },
  titleSub: {
    fontSize: '1.1rem',
    color: 'var(--color-accent)',
    fontWeight: '500',
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-heading)',
    fontStyle: 'italic',
  },
  bio: {
    fontSize: '1.05rem',
    color: 'var(--color-text)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  },
  credentials: { marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' },
  subTitle: {
    fontSize: '1.4rem',
    color: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1rem',
    color: 'var(--color-text)',
  },
  devicesContainer: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  devicesLeft: { flex: '1 1 400px' },
  devicesRight: { flex: '1 1 350px' },
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
  devicesTitle: {
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    color: 'var(--color-primary)',
    marginBottom: '1.5rem',
  },
  deviceList: { listStyle: 'none', padding: 0, margin: '1.5rem 0 0', display: 'flex', flexDirection: 'column', gap: '0.9rem' },
  deviceItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '1rem',
    color: 'var(--color-text)',
    lineHeight: 1.5,
  },
  deviceBullet: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-primary)',
    marginTop: '7px',
    flexShrink: 0,
  },
  devicesImg: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
    display: 'block',
  },
  imgCaption: {
    textAlign: 'center',
    fontSize: '0.85rem',
    color: 'var(--color-text-secondary)',
    marginTop: '0.75rem',
    fontStyle: 'italic',
  },
  lawContainer: { maxWidth: '900px', margin: '0 auto' },
  lawHeader: { textAlign: 'center', marginBottom: '3.5rem' },
  lawCards: { display: 'flex', flexDirection: 'column', gap: '2rem' },
  lawCard: {
    backgroundColor: '#fff',
    border: '1px solid var(--color-border)',
    borderRadius: '12px',
    padding: '2.5rem',
  },
  lawCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  lawTag: {
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '4px',
    fontSize: '0.82rem',
    fontWeight: '500',
  },
  lawQuote: {
    fontFamily: 'var(--font-law)',
    fontSize: '1.15rem',
    color: 'var(--color-text)',
    borderLeft: '4px solid var(--color-accent)',
    paddingLeft: '1.5rem',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
    margin: '0 0 1.5rem',
  },
  lawDesc: {
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
    fontSize: '1rem',
  },
};

export default Hakkimda;
