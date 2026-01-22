import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import '@/styles/App.css';
import '@/styles/global.css';
import Header from '@/components/Header';
import { Contact } from 'lucide-react';
import ContactPanel from './components/ContactPanel';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ContactPanel />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
