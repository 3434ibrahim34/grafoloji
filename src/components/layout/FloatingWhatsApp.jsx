import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/905309241125" 
      target="_blank" 
      rel="noopener noreferrer"
      style={styles.button}
      aria-label="WhatsApp İletişim"
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
    zIndex: 1000,
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  }
};

export default FloatingWhatsApp;
