import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            src="/images/okavango-logo-transparent.png"
            alt="Okavango Signature"
            width={96}
            height={96}
            className={styles.logoImage}
          />
          <div>
            <h2>Okavango Signature</h2>
            <p>Where heritage meets modern elegance.</p>
          </div>
        </div>

        <div className={styles.links}>
          <Link href="/collection">Collection</Link>
          <Link href="/story">Story</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.contact}>
          <a href="mailto:ofannase@gmail.com">ofannase@gmail.com</a>
          <a href="tel:+26778600041">+267 7860 0041</a>
          <span>Gaborone, Botswana</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Okavango Signature.</span>
        <span>Luxury with origin, craft, and purpose.</span>
      </div>
    </footer>
  );
};

export default Footer;
