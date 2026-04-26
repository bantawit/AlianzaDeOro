import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <div className={`${styles.logoWrapper} ${variant === 'light' ? styles.light : ''}`}>
      <Image 
        src="/AlianzaDeOro/logoMarisa.png" 
        alt="Alianza de Oro" 
        width={200} 
        height={70} 
        className={styles.logoImage}
        priority
      />
    </div>
  );
}
