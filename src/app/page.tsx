import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesOverview from '@/components/home/ServicesOverview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhySkyFinishers from '@/components/home/WhySkyFinishers';
import Process from '@/components/home/Process';
import ServiceAreas from '@/components/home/ServiceAreas';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesOverview />
      <FeaturedProjects />
      <WhySkyFinishers />
      <Process />
      <ServiceAreas />
      <FinalCTA />
    </>
  );
}
