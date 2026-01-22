import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import '@/styles/global.css';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import { styled } from '@mui/joy/styles';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { CursorHighlight } from '@/components/ui/cursor-highlight';
export default function AnimateCard({ card, index }) {
  const indexBuffatoria = [1, 2, 3, 4];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Item = styled('div')(({ theme }) => ({
    borderRadius: 4,
  }));
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: (index % 4) * 0.12 }}
      style={{ height: '100%' }} // чтобы занимал всю высоту Grid item
    >
      <Item
        sx={{
          p: 0,
          height: '100%',
        }}
      >
        <Card
          sx={{
            borderRadius: '1rem',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',

            p: 0,
            gap: 0,
          }}
          invertedColors={false}
          size='sm'
          variant='soft'
        >
          <CardOverflow>
            <div className='image-wrapper'>
              <img
                src={card.img}
                alt='Service'
                loading='lazy'
                style={{
                  width: '100%',

                  objectFit: 'cover',
                  aspectRatio: '7 / 8',
                  display: 'block',
                }}
              />
            </div>
          </CardOverflow>

          <div className='fon-text-info p-2'>
            <Typography sx={{ padding: '5px' }} level='h4'>
              {card.title}
            </Typography>
            <Typography sx={{ flex: 1, padding: '5px' }} level='body-md'>
              {' '}
              {card.description}
            </Typography>
            <div className='py-1'></div>
            <a href={card.link}>
              <button className='button-3  mt-auto'>Заказать</button>
            </a>
          </div>
        </Card>
      </Item>
    </motion.div>
  );
}
