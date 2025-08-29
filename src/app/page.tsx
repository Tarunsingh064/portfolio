import HeroSection from '@/components/herosection'
import Skills from '@/components/skils';
import Experience from '@/components/experiences';
import Education from '@/components/education';
import Projects from '@/components/project';
import HackathonsAndAchievements from '@/components/hackathons';
import Contact from '@/components/Contact';
export default function Home() {
  return(
<>
<HeroSection/>
<Skills/>
<Experience/>
<Projects/>
<HackathonsAndAchievements/>
<Education/>
<Contact/>
</>
  );
}