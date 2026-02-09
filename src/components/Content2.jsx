import React from 'react';
import '@/styles/global.css';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Scene from '@/components/Scene.jsx';
import { BoltStrike } from '@/components/ui/bolt-strike';
import { motion } from 'framer-motion';
import { BeamsUpstream } from '@/components/ui/beams-upstream';
const Item = styled('div')(({ theme }) => ({
  textAlign: 'center',
  borderRadius: 4,
}));

export default function Content2() {
  return (
    <div className='hero-card relative'>
      <BeamsUpstream
        color='#7c3aed'
        intensity={0.5}
        className='absolute inset-0 w-full h-full z-0'
      />

      <div className='welcome-block relative z-10'>
        <Grid
          container
          spacing={2}
          columns={16}
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          {/* Первый блок с текстом */}
          <Grid item xs={16} md={8}>
            <Item>
              <div className='first-block'>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <h1>
                    <span className='title'>ART STICK</span> профессиональная
                    поклейка окон
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h2 style={{ margin: '7% 0' }}>
                    Создаём{' '}
                    <span style={{ color: '#9373ea' }}>уникальные макеты</span>{' '}
                    и <span style={{ color: '#9373ea' }}>дизайн</span> для любых
                    окон <br />
                    Обклейка и оформление под ваши нужды
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h3>
                    Более <span style={{ color: '#9373ea' }}>20 лет</span> опыта
                    работы с окнами, витринами и интерьером, г. Санкт-Петербург
                  </h3>
                  <p className='sr-only'>
                    Заказать поклейку окон и оформление витрин в городе
                    Санкт-Петербурге
                  </p>
                  <p className='sr-only'>
                    Разрабатываем макеты, которые продают: от визиток и наклеек
                    до баннеров и вывесок. Учитываем фирменный стиль, задачи
                    рекламы и особенности вашего бизнеса. в городе
                    Санкт-Петербурге
                  </p>
                </motion.div>
              </div>
            </Item>
          </Grid>

          {/* Второй блок с 3D сценой */}
          <Grid item xs={16} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <Item>
                <div className='i'>
                  <div className='main-image-box'>
                    <img
                      src='/CLPQDGnnLOWt3KJFdBdAOytH5HvsbfJ5eq9ot3Ch7577QM878r8g9Ctwm0OMg22bVLRl29dftotBRf3wlpGDSaWU.jpg'
                      alt='Профессиональная поклейка окон и оформление витрин ART STICK в Санкт-Петербурге'
                    />
                  </div>
                </div>
              </Item>
            </motion.div>
          </Grid>
        </Grid>
      </div>
      <div className='button-fon mt-6  '>
        <a href='tel:+79633071303' className='color-w group'>
          <button
            className='button-glass color-w  bg-transparent font-semibold border-2 w-40 rounded-full border-white py-3
         transition relative flex items-center justify-center group'
          >
            <span className='text-white'>Позвонить</span>
            <span className=' ml-2 flex items-center justify-center w-6 h-6 border border-white rounded-full transition-transform duratiom-300 group-hover:translate-x-1'>
              <svg
                className='w-5 h-5 text-white'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path strokeLinejoin='round' d='M5 12h14m0 0l-6-6m6 6l-6 6' />
              </svg>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
