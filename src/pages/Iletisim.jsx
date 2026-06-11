import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'bilirkisilik',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normalde burada bir API çağrısı olur.
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <div className="container text-center">
          <div style={styles.badge}>İletişim & Randevu</div>
          <h1 style={styles.title}>Bizimle İletişime Geçin</h1>
          <p style={styles.subtitle}>
            Ön değerlendirme ve randevu talepleriniz için aşağıdaki formu doldurabilir veya doğrudan iletişim numaralarımızdan bize ulaşabilirsiniz. Mesai saatleri içinde en geç 4 saat içerisinde geri dönüş yapıyoruz.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={styles.container}>
          {/* Form Column */}
          <div style={styles.formColumn}>
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>İletişim Formu</h2>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Ad Soyad *</label>
                  <input type="text" name="name" required style={styles.input} value={formData.name} onChange={handleChange}/>
                </div>
                
                <div style={styles.row}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>E-posta *</label>
                    <input type="email" name="email" required style={styles.input} value={formData.email} onChange={handleChange}/>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Telefon / WhatsApp *</label>
                    <input type="tel" name="phone" required style={styles.input} value={formData.phone} onChange={handleChange}/>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Talep Türü</label>
                  <select name="type" style={styles.input} value={formData.type} onChange={handleChange}>
                    <option value="bilirkisilik">Bilirkişilik / Uzman Mütalaası</option>
                    <option value="egitim">Eğitim Bilgisi / Kayıt</option>
                    <option value="kurumsal">Kurumsal Teklif</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Mesajınız (İsteğe Bağlı)</label>
                  <textarea name="message" rows="4" style={{...styles.input, resize: 'vertical'}} value={formData.message} onChange={handleChange}></textarea>
                </div>

                <div style={styles.formGroupCheckbox}>
                  <input type="checkbox" required id="kvkk" />
                  <label htmlFor="kvkk" style={styles.checkboxLabel}>KVKK Aydınlatma Metnini okudum ve onaylıyorum.</label>
                </div>

                <button type="submit" className="btn btn-primary" style={styles.submitBtn}>Mesajı Gönder</button>
              </form>
            </div>
          </div>

          {/* Info & Calendly Column */}
          <div style={styles.infoColumn}>
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Online Randevu Alın</h2>
              <p style={{marginBottom: '1.5rem', color: 'var(--color-text-secondary)'}}>
                Aşağıdaki takvim üzerinden size uygun zaman dilimini seçerek hemen bir online veya yüz yüze görüşme ayarlayabilirsiniz.
              </p>
              
              {/* Calendly Inline Widget Yeri */}
              <div style={styles.calendlyPlaceholder}>
                <div style={styles.calendlyText}>
                  <strong>Calendly Randevu Sistemi</strong><br/>
                  <span style={{fontSize: '0.9rem', color: 'var(--color-text-secondary)'}}>
                    (Gerçek entegrasyonda buraya Calendly script'i veya iFrame'i gelecektir. Örn: <code>&lt;div className="calendly-inline-widget" data-url="https://calendly.com/user/meeting"&gt;&lt;/div&gt;</code>)
                  </span>
                </div>
                <a href="#" className="btn btn-outline" style={{marginTop: '1rem'}}>Demo Randevu Al</a>
              </div>
            </div>

            <div style={{...styles.card, marginTop: '2rem'}}>
              <h2 style={styles.cardTitle}>İletişim Bilgileri</h2>
              <div style={styles.contactList}>
                <div style={styles.contactItem}>
                  <div style={styles.iconBox}><Phone size={20} color="var(--color-accent)"/></div>
                  <div>
                    <strong>Telefon & WhatsApp</strong><br/>
                    0530 924 11 25<br/>
                    0532 324 67 00
                  </div>
                </div>
                <div style={styles.contactItem}>
                  <div style={styles.iconBox}><Mail size={20} color="var(--color-accent)"/></div>
                  <div>
                    <strong>E-posta</strong><br/>
                    info@grafolojisahtecilik.com
                  </div>
                </div>
                <div style={styles.contactItem}>
                  <div style={styles.iconBox}><MapPin size={20} color="var(--color-accent)"/></div>
                  <div>
                    <strong>Ofis</strong><br/>
                    Beşiktaş Yıldız Mah. Serencebey Yokuşu Sk. No:12 D.2 Beşiktaş/İstanbul
                  </div>
                </div>
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
  container: {
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  formColumn: {
    flex: '1 1 500px',
  },
  infoColumn: {
    flex: '1 1 350px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2.5rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
    border: '1px solid var(--color-border)',
  },
  cardTitle: {
    fontSize: '1.75rem',
    color: 'var(--color-primary)',
    marginBottom: '2rem',
    borderBottom: '2px solid var(--color-surface-secondary)',
    paddingBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: 1,
  },
  label: {
    fontWeight: '500',
    fontSize: '0.95rem',
    color: 'var(--color-primary)',
  },
  input: {
    padding: '0.8rem 1rem',
    border: '1px solid var(--color-border)',
    borderRadius: '6px',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    outline: 'none',
  },
  formGroupCheckbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  checkboxLabel: {
    fontSize: '0.9rem',
    color: 'var(--color-text-secondary)',
  },
  submitBtn: {
    marginTop: '1rem',
    padding: '1rem',
    fontSize: '1.1rem',
  },
  calendlyPlaceholder: {
    backgroundColor: 'var(--color-surface)',
    border: '2px dashed var(--color-border)',
    borderRadius: '8px',
    padding: '3rem 2rem',
    textAlign: 'center',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  contactItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
    lineHeight: 1.6,
  },
  iconBox: {
    width: '40px',
    height: '40px',
    backgroundColor: 'var(--color-surface)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }
};

export default Iletisim;
