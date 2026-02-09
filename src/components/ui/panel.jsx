import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

export default function Panel() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Кнопка всегда сверху */}
      <button
        onClick={() => setOpen(true)}
        className='btnmess fixed bottom-5 right-5 z-[100]
          flex items-center justify-center
          w-16 h-16 rounded-full
          bg-[#7c3aed] text-white shadow-lg'
      >
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-9 w-9'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 10h.01M12 10h.01M16 10h.01
               M21 12c0 4.418-4.03 8-9 8
               -1.374 0-2.657-.3-3.81-.843
               L3 20l1.843-5.19
               A7.964 7.964 0 013 12
               c0-4.418 4.03-8 9-8
               s9 3.582 9 8z'
            />
          </svg>
        </div>
      </button>

      {/* Drawer открывается по клику */}
      <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)}>
        <div className='p-2'>
          <List size='lg' sx={{ px: 1, pt: 2 }}>
            {/* Telegram */}
            <a href='https://t.me/Kot12290' target='_blank'>
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '2px solid #d1d5db', // Tailwind gray-300
                  borderRadius: '1rem',
                  padding: '0.7rem',
                  mb: 1, // отступ снизу
                  '&:hover': {
                    backgroundColor: '#f3f4f6', // gray-100
                  },
                }}
              >
                <img src='/telegram.svg' className='w-10 h-10' alt='Telegram' />
                <a
                  className='text-lg font-semibold hover:text-black'
                  href='https://t.me/Kot12290'
                >
                  Telegram
                </a>
              </ListItemButton>
            </a>
            <a href='https://www.avito.ru/sankt-peterburg/predlozheniya_uslug/vyveski_svetovye_2815277141?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller'>
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '2px solid #d1d5db', // Tailwind gray-300
                  borderRadius: '1rem',
                  padding: '0.7rem',
                  mb: 1, // отступ снизу
                  '&:hover': {
                    backgroundColor: '#f3f4f6', // gray-100
                  },
                }}
              >
                <img src='/avito.png' className='w-10 h-10' alt='Avito' />
                <a
                  className='text-lg font-semibold hover:text-black'
                  href='https://www.avito.ru/sankt-peterburg/predlozheniya_uslug/vyveski_svetovye_2815277141?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller'
                >
                  Avito
                </a>
              </ListItemButton>
            </a>

            {/*vk */}
            <a href='https://vk.ru/reclame' target='_blank'>
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '2px solid #d1d5db', // Tailwind gray-300
                  borderRadius: '1rem',
                  padding: '0.7rem',
                  mb: 1, // отступ снизу
                  '&:hover': {
                    backgroundColor: '#f3f4f6', // gray-100
                  },
                }}
              >
                <img src='/vk-v2.svg' className='w-10 h-10' alt='WhatsApp' />

                <a
                  className='text-lg font-semibold hover:text-black'
                  href='https://vk.ru/reclame'
                >
                  VK
                </a>
              </ListItemButton>
            </a>
            <a
              href=' https://max.ru/u/f9LHodD0cOK9R9T971VS1ANcJ8TZCsQjKuGhrY3bI4UyncOL6nOsE6XtSt8'
              target='_blank'
            >
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '2px solid #d1d5db', // Tailwind gray-300
                  borderRadius: '1rem',
                  padding: '0.7rem',
                  mb: 1, // отступ снизу
                  '&:hover': {
                    backgroundColor: '#f3f4f6', // gray-100
                  },
                }}
              >
                <img src='/max.svg' className='w-10 h-10' />
                <a
                  className='text-lg font-semibold hover:text-black'
                  href=' https://max.ru/u/f9LHodD0cOK9R9T971VS1ANcJ8TZCsQjKuGhrY3bI4UyncOL6nOsE6XtSt8'
                >
                  Max
                </a>
              </ListItemButton>
            </a>

            <a href='tel:+79633071303'>
              {/* Телефон */}
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  border: '2px solid #d1d5db', // Tailwind gray-300
                  borderRadius: '1rem',
                  padding: '0.7rem',
                  mb: 1, // отступ снизу
                  '&:hover': {
                    backgroundColor: '#f3f4f6', // gray-100
                  },
                }}
              >
                <img src='/phone.svg' className='w-10 h-10' alt='Phone' />
                <a
                  className='text-lg font-semibold hover:text-black'
                  href='tel:+71234567890'
                >
                  +7 (963) 307-13-03
                </a>
              </ListItemButton>
            </a>
          </List>
          <ListItemButton>
            {' '}
            <button
              className='bg-black  text-white w-full'
              onClick={() => setOpen(false)}
            >
              Закрыть
            </button>
          </ListItemButton>
        </div>
      </Drawer>
    </>
  );
}
