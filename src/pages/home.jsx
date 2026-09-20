import About from '../sections/prof/about';
import Portfolio from '../sections/prof/portfolio';
import Deployed from '../sections/prof/deployed';
import Education from '../sections/prof/education';
import Skills from '../sections/prof/skills';
import Contact from '../sections/prof/contact';
import Reveal from '../components/Reveal';
export default function Home() {
  return <><About /><div className="discipline-strip" aria-label="Game development, full-stack applications, data and automation, creative exploration"><span>Game development</span><i>✳</i><span>Full-stack applications</span><i>✳</i><span>Data & automation</span><i>✳</i><span>Creative exploration</span></div><Portfolio /><Reveal><blockquote className="interlude"><span aria-hidden="true">“</span><p>What everyone wants is but a helping hand.<br /><em>Just enough to save them from the abyss.</em></p><span className="interlude-mark" aria-hidden="true">✳</span></blockquote></Reveal><Deployed /><Education /><Skills /><Contact /><div className="closing-values">Respect · Honesty · Courage · Rectitude · Loyalty · Honour · Benevolence</div></>;
}
