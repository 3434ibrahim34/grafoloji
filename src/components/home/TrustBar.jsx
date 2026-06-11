import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle, Star } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <ShieldCheck size={20} />, text: 'Adalet Bakanlığı Onaylı' },
    { icon: <CheckCircle size={20} />, text: 'UYAP Kayıtlı Bilirkişi' },
    { icon: <Award size={20} />, text: '15+ Yıl Deneyim' },
    { icon: <FileText size={20} />, text: '1000+ Uzman Mütalaası' },
    { icon: <Star size={20} />, text: 'Sertifikalı Eğitici' },
  ];

  return (
    <div style={styles.wrapper}>
      <div className="container" style={styles.container}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div style={styles.item}>
              <div style={styles.iconBox}>{item.icon}</div>
              <span style={styles.text}>{item.text}</span>
            </div>
            {index < items.length - 1 && <div style={styles.divider}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: 'var(--color-primary)',
    padding: '1.25rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  iconBox: {
    color: 'var(--color-accent)',
    display: 'flex',
    flexShrink: 0,
  },
  text: {
    fontWeight: '500',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '0.9rem',
    letterSpacing: '0.2px',
    whiteSpace: 'nowrap',
  },
  divider: {
    width: '1px',
    height: '24px',
    backgroundColor: 'rgba(255,255,255,0.15)',
  }
};

export default TrustBar;
