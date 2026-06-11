import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'Mahkeme bilirkişisi ile uzman mütalaası (HMK 293) arasındaki fark nedir?',
    a: 'Mahkeme bilirkişisi, hakim tarafından atanır ve her iki tarafa hizmet eder. Uzman mütalaası ise HMK 293 kapsamında taraflardan birinin kendi seçtiği uzmandan aldığı bağımsız bilimsel rapordur. Bu rapor mahkemece mutlaka değerlendirilmek zorundadır ve karşı tarafın lehine olan bir bilirkişi raporuna itiraz için güçlü bir araçtır.',
  },
  {
    q: 'Sanık veya mağdur olarak ceza davasında özel rapor alabilir miyim?',
    a: 'Evet. CMK 67/6 uyarınca şüpheli, sanık, katılan veya müdafi; yargılama sürecinde bağımsız uzman görüşü talep etme hakkına sahiptir. Yargıtay\'ın yerleşik içtihadına göre bu raporlar mahkemece dikkate alınmak zorundadır.',
  },
  {
    q: 'İnceleme süreci ne kadar sürer?',
    a: 'Dava aciliyetine bağlı olmakla birlikte, standart bir imza veya belge incelemesi ortalama 3–5 iş günü sürmektedir. Acil durumlarda 24–48 saat içinde rapor teslimi mümkündür. Ön değerlendirme ücretsiz ve aynı gün yapılır.',
  },
  {
    q: 'Hangi belge türlerini inceleyebilirsiniz?',
    a: 'Çek, senet, sözleşme, protokol, ibraname, vekaletname, tapu evrakları, kimlik belgesi, pasaport, diploma, resmi yazışmalar ve benzeri tüm özel ve resmi belge türlerini inceliyoruz.',
  },
  {
    q: 'İstanbul dışından başvuru yapabilir miyim?',
    a: 'Evet. Türkiye\'nin her ilinden, hatta yurt dışından da başvuru alıyoruz. Belgeler kargo veya güvenli dijital kanal üzerinden iletilerek inceleme başlatılabilir. Mahkeme desteği için yurt geneli seyahat imkânımız mevcuttur.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.headerCol}>
          <span style={styles.eyebrow}>Sık Sorulan Sorular</span>
          <h2 style={styles.title}>Merak edilenler</h2>
          <p style={styles.subtitle}>
            Hukuki süreçte en çok sorulan soruların yanıtları burada. Bulamadığınız bir soru için bizimle iletişime geçin.
          </p>
          <Link to="/iletisim" className="btn btn-outline" style={styles.contactBtn}>Soru Sormak İstiyorum</Link>
        </div>

        <div style={styles.faqCol}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <button
                style={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    ...styles.chevron,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openIndex === index && (
                <div style={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    gap: '5rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  headerCol: {
    flex: '1 1 300px',
    position: 'sticky',
    top: '100px',
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
    color: 'var(--color-primary)',
    marginBottom: '1.25rem',
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
    marginBottom: '2rem',
    fontSize: '1.05rem',
  },
  contactBtn: {
    display: 'inline-block',
  },
  faqCol: {
    flex: '2 1 480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  faqItem: {
    borderBottom: '1px solid var(--color-border)',
  },
  faqQuestion: {
    width: '100%',
    background: 'none',
    border: 'none',
    padding: '1.5rem 0',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    textAlign: 'left',
    fontFamily: 'var(--font-body)',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    transition: 'color 0.2s ease',
  },
  chevron: {
    color: 'var(--color-accent)',
    flexShrink: 0,
    transition: 'transform 0.3s ease',
  },
  faqAnswer: {
    paddingBottom: '1.5rem',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.7,
    fontSize: '1rem',
    animation: 'fadeInUp 0.2s ease',
  },
};

export default FAQ;
