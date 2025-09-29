import ContactHero from '@/components/sections/ContactHero/ContactHero';
import Contact from '@/components/sections/Contact/Contact';

export const metadata = {
  title: 'Contact Us - Company Name',
  description: 'Get in touch with us for professional solutions and services',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
    </>
  );
}
