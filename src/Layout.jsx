import { Outlet } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Layout() {
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><div className="site-shell"><Header /><main id="main"><Outlet /></main><Footer /></div></MotionConfig>;
}
