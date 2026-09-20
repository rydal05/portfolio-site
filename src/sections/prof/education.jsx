import SectionHeading from '../../components/SectionHeading';
import Reveal from '../../components/Reveal';
const education = [
  { years: '2019 — 2023', title: 'Palm Beach Central', degree: 'High School Diploma', text: 'An AICE diploma, a Florida Bright Futures scholarship, and the start of a lifelong curiosity for computers.' },
  { years: '2023 — 2025', title: 'Valencia College', degree: 'A.S. · Articulated Computer Science', text: 'Earned my associate degree while working full-time. Moved from West Palm Beach to Orlando, then transferred through DirectConnect.' },
  { years: 'THE CURRENT CHAPTER', title: 'University of Central Florida', degree: 'B.S. · Computer Science, in progress', text: 'Building a deeper foundation in computer science. Active in KnightHacks, with an interest in math, engineering, and the communities around them.', current: true },
  { years: '2028 & BEYOND', title: 'Still curious.', degree: 'More questions. More possibilities.', text: 'A master’s, maybe a doctorate. There’s a lot left to learn, and I’m excited to see where that takes me.', future: true },
];
export default function Education() {
  return <section id="education" className="section education-section"><Reveal><SectionHeading number="03" label="The journey" title="Always a student." accent="In every sense.">Each chapter brings a new perspective. Here’s how I got here, and a little of where I’m headed.</SectionHeading></Reveal><div className="timeline">{education.map((item, index) => <Reveal key={item.title} delay={index * 0.07}><article className={`timeline-item ${item.current ? 'is-current' : ''} ${item.future ? 'is-future' : ''}`}><span className="timeline-dot" /><p className="eyebrow">{item.years}</p><h3>{item.title}</h3><p className="degree">{item.degree}</p><p>{item.text}</p>{item.current && <span className="current-label"><span className="status-dot" /> Learning & building</span>}</article></Reveal>)}</div></section>;
}
