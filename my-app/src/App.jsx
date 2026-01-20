import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import '@/styles/App.css';
import '@/styles/global.css';
import Header from '@/components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
