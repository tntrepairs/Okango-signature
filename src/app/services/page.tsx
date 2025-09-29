import ServicesHero from '@/components/sections/ServicesHero/ServicesHero';
import ServiceList from '@/components/sections/ServiceList/ServiceList';
import Process from '@/components/sections/Process/Process';

export const metadata = {
  title: 'Services - Company Name',
  description: 'Explore our comprehensive range of professional services',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceList />
      <Process />
    </>
  );
}
