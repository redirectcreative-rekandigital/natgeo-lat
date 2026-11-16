import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Welcome from './pages/Welcome.jsx';
import Home from './pages/Home.jsx';
import Group from './pages/Group.jsx';
import Quiz from './pages/Quiz.jsx';
import Result from './pages/Result.jsx';
import Review from './pages/Review.jsx';
import History from './pages/History.jsx';
import { getName } from './lib/storage.js';
import ScrollTop from './components/ScrollTop.jsx';

export default function App() {
  const [name, setName] = useState(getName());
  if (!name) return <Welcome onDone={setName} />;
  return (
    <HashRouter>
      <ScrollTop />
      <Header name={name} onName={setName} />
      <Routes>
        <Route path="/" element={<Home name={name} />} />
        <Route path="/group/:gid" element={<Group />} />
        <Route path="/quiz/:setId" element={<Quiz name={name} />} />
        <Route path="/result/:aid" element={<Result />} />
        <Route path="/review/:aid" element={<Review />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="footer">© {new Date().getFullYear()} SD Muhammadiyah Wonorejo · Latihan mandiri CEFR Pre-A1 – B1. Soal orisinal untuk latihan, bukan soal resmi National Geographic Learning.</footer>
    </HashRouter>
  );
}
