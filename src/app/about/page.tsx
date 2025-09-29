import AboutHero from '@/components/sections/AboutHero/AboutHero';
import Team from '@/components/sections/Team/Team';
import Values from '@/components/sections/Values/Values';

export const metadata = {
  title: 'About Us - Company Name',
  description: 'Learn more about our company, team, and values',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Team />
    </>
  );
}
