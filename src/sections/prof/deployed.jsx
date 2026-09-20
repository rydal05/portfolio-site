import InfiniteVideoCarousel from '../../components/InfiniteVideoCarousel';
import SectionHeading from '../../components/SectionHeading';
import Reveal from '../../components/Reveal';
export default function Deployed() {
  return <section id="freelance" className="section freelance-section"><Reveal><SectionHeading number="02" label="Beyond the code" title="A different kind" accent="of motion.">3D animation and stage programming. Creative work that found its way to millions of screens.</SectionHeading></Reveal><Reveal><InfiniteVideoCarousel /></Reveal><div className="freelance-bottom"><p>Contributed animation and programming to work reaching approximately <strong>75 million YouTube views</strong>, <strong>50 million TikTok views</strong>, and <strong>5 million interactions</strong>.</p><a href="mailto:devjcmedia@gmail.com">Project references <span>↗</span></a></div></section>;
}
