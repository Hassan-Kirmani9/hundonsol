import { Footer, Navbar , Testimonials} from '../components';
import Testimonial from '../components';
import FlowingBackground from '../components/FlowingBackground';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
      <GetStarted />
    </div>
    {/* <World /> */}
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
      <Testimonials />

    </div>
    <Footer />
  </div>
);

export default Home;
