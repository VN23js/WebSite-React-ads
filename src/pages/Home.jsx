// src/pages/Home.jsx
import React from 'react';
import MyBlock from '../components/MyBlock'; // пример блока
import Content2 from '@/components/Content2';
import Content3 from '@/components/Content3';
import Content4 from '@/components/Content4';

export default function Home() {
  return (
    <div className='container'>
      <Content2></Content2>
      <Content3></Content3>
      <Content4></Content4>
    </div>
  );
}
