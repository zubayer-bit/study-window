import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurServices from "../components/home/OurServices";
import StudyOptions from "../components/home/StudyOptions";
import StudentJourney from "../components/home/StudentJourney";
import CallToAction from "../components/home/CallToAction";

// Home page - All content sourced from README.md
// Future: Connect to database for dynamic content (universities, courses, testimonials)
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <StudyOptions />
      <StudentJourney />
      <CallToAction />
    </>
  );
}
