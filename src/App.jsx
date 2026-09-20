import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './Layout';
export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="*" element={<div className="not-found"><p className="eyebrow">404 / A little off course</p><h1>Nothing here. <em>Yet.</em></h1><a className="button button-primary" href="/">Back to the portfolio ↗</a></div>} /></Route></Routes></BrowserRouter>;
}
