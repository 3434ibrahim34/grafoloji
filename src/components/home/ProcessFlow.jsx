import React from 'react';
import { Mail, Search, FlaskConical, FileCheck, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: <Mail size={22} />,
    title: 'Başvuru',
    desc: 'Telefon, WhatsApp veya form üzerinden talebinizi iletin.',
    sub: '1–2 gün',
  },
  {
    number: '02',
    icon: <Search size={22} />,
    title: 'Ön İnceleme',
    desc: 'Belgelerinizin durumu değerlendirilir, yol haritası belirlenir.',
    sub: 'Ücretsiz',
  },
  {
    number: '03',
    icon: <FlaskConical size={22} />,
    title: 'Laboratuvar Analizi',
    desc: 'VSC, Stereo Mikroskop ve UV/IR sistemlerle teknik inceleme.',
    sub: '2–4 gün',
  },
  {
    number: '04',
    icon: <FileCheck size={22} />,
    title: 'Rapor Teslimi',
    desc: 'HMK 293 / CMK 67 kapsamında geçerli bilimsel mütalaa.',
    sub: 'PDF + Islak İmza',
  },
  {
    number: '05',
    icon: <Scale size={22} />,
    title: 'Mahkeme Desteği',
    desc: 'İstenirse mahkemede sözlü açıklama ve hakim sorularına yanıt.',
    sub: 'İsteğe Bağlı',
  },
];

const ProcessFlow = () => {
  return (
    <section className="section-padding" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <span style={styles.eyebrow}>Şeffaf Süreç</span>
          <h2 style={styles.title}>Başvurudan Rapora 5 Adım</h2>
          <p style={styles.subtitle}>
            Her aşamayı önceden bilmek, hukuki sürecinizdeki belirsizliği ortadan kaldırır.
          </p>
        </div>

        <div style={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} style={styles.stepCard}>
              <div style={styles.stepTop}>
                <div style={styles.stepNumber}>{step.number}</div>
                <div style={styles.stepIcon}>{step.icon}</div>
              </div>
              <h4 style={styles.stepTitle}>{step.title}</h4>
              <p style={styles.stepDesc}>{step.desc}</p>
              <div style={styles.stepSub}>{step.sub}</div>
            </div>
          ))}
        </div>

        <div style={styles.ctaRow}>
          <Link to="/iletisim" className="btn btn-primary" style={styles.cta}>
            Ücretsiz Ön Değerlendirme İste <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(135deg, var(--color-primary) 0%, #1a3356 60%, #122339 100%)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    color: 'white',
  },
  eyebrow: {
    display: 'inline-block',
    color: 'var(--color-accent)',
    fontWeight: '600',
    fontSize: '0.82rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    borderBottom: '2px solid var(--color-accent)',
    paddingBottom: '2px',
  },
  title: {
    color: 'white',
    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
    marginBottom: '1rem',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '1.1rem',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3.5rem',
  },
  stepCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '14px',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    transition: 'background-color 0.2s ease',
  },
  stepTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  stepNumber: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.12)',
    lineHeight: 1,
    letterSpacing: '-1px',
  },
  stepIcon: {
    color: 'var(--color-accent)',
    display: 'flex',
  },
  stepTitle: {
    color: 'white',
    margin: 0,
    fontSize: '1.15rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: '600',
  },
  stepDesc: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    margin: 0,
    flex: 1,
  },
  stepSub: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--color-accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: 'auto',
  },
  ctaRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'white',
    color: 'var(--color-primary)',
    borderColor: 'white',
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
  },
};

export default ProcessFlow;
