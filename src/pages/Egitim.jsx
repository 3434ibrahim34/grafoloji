import React from 'react';
import { BookOpen, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Egitim = () => {
  return (
    <div style={styles.page}>
      {/* Page Header */}
      <section style={styles.header}>
        <div className="container text-center">
          <div style={styles.badge}>Adli Grafoloji Akademisi</div>
          <h1 style={styles.title}>Eğitim Hizmetleri</h1>
          <p style={styles.subtitle}>
            Avukatlar, noterler ve kurum çalışanları için teorik altyapıyı pratik analiz yöntemleriyle harmanlayan mesleki eğitim programları.
          </p>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="text-center" style={styles.sectionTitle}>Kimler Katılmalı?</h2>
          <div style={styles.audienceGrid}>
            {['Avukatlar & Stajyer Avukatlar', 'Noter ve Katip Çalışanları', 'Banka ve Finans Uzmanları', 'Sigorta Denetçileri ve Müfettişler', 'Akademisyen ve Öğrenciler'].map((item, index) => (
              <div key={index} style={styles.audienceItem}>
                <div style={styles.dot}></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="section-padding">
        <div className="container">
          <div style={styles.courseContainer}>
            {/* Course 1 */}
            <div style={styles.courseCard}>
              <div style={styles.courseIcon}><GraduationCap size={40} color="white" /></div>
              <div style={styles.courseContent}>
                <h3 style={styles.courseTitle}>Adli Grafoloji Sertifika Programı</h3>
                <div style={styles.courseMeta}>
                  <span><strong>Süre:</strong> 2 Gün (16 Saat)</span>
                  <span><strong>Format:</strong> Yüz Yüze / Online Canlı</span>
                </div>
                <p style={styles.courseDesc}>
                  Temel grafoloji prensipleri, imza analizinin temelleri ve sahte belge tespiti konusunda derinlemesine bilgi sağlayan kapsamlı sertifika programı. Eğitim sonunda katılımcılara Adalet Bakanlığı müfredatına uygun katılım belgesi verilir.
                </p>
                <Link to="/iletisim?konu=sertifika" className="btn btn-outline" style={styles.courseBtn}>
                  Detaylı Bilgi ve Kayıt <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div style={styles.courseCard}>
              <div style={styles.courseIcon}><BookOpen size={40} color="white" /></div>
              <div style={styles.courseContent}>
                <h3 style={styles.courseTitle}>Sahte Belge Tespiti — Temel Seminer</h3>
                <div style={styles.courseMeta}>
                  <span><strong>Süre:</strong> 4 Saat</span>
                  <span><strong>Format:</strong> Grup Semineri</span>
                </div>
                <p style={styles.courseDesc}>
                  Günlük mesleki hayatta karşılaşılan evraklarda (çek, senet, vekaletname) ilk bakışta fark edilebilecek tahrifat ve sahtecilik emarelerini tanımaya yönelik hap bilgiler içerir.
                </p>
                <Link to="/iletisim?konu=seminer" className="btn btn-outline" style={styles.courseBtn}>
                  Bilgi Al <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Course 3 */}
            <div style={styles.courseCard}>
              <div style={styles.courseIcon}><Users size={40} color="white" /></div>
              <div style={styles.courseContent}>
                <h3 style={styles.courseTitle}>Kurumsal Talepler (Banka, Sigorta, Kamu)</h3>
                <p style={styles.courseDesc} style={{marginTop: '1rem'}}>
                  Kurumunuzun ihtiyaçlarına ve karşılaştığı spesifik dolandırıcılık vakalarına göre özel olarak tasarlanmış kurum içi eğitim paketleri sunuyoruz. Ön görüşme ile müfredat kurumunuz için optimize edilir.
                </p>
                <Link to="/iletisim?konu=kurumsal" className="btn btn-primary" style={{...styles.courseBtn, marginTop: '1rem'}}>
                  Teklif İste <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: 'var(--color-surface)',
  },
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
    fontSize: '0.85rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '3rem',
    color: 'var(--color-primary)',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--color-text-secondary)',
    maxWidth: '700px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2.5rem',
    color: 'var(--color-primary)',
  },
  audienceGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  audienceItem: {
    backgroundColor: 'var(--color-surface)',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: '500',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-border)',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-accent)',
  },
  courseContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2.5rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'flex-start',
  },
  courseIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  courseContent: {
    flex: 1,
  },
  courseTitle: {
    margin: 0,
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
  courseMeta: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    color: 'var(--color-text-secondary)',
    fontSize: '0.95rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid var(--color-surface-secondary)',
  },
  courseDesc: {
    color: 'var(--color-text)',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  courseBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  }
};

export default Egitim;
