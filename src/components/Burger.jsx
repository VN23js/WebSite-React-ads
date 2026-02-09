import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import Menu from '@mui/icons-material/Menu';
import { Phone } from 'lucide-react';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* КНОПКА БУРГЕРА */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: '#7c3aed',
          borderRadius: '20px',
          width: 45,
          height: 45,
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgb(127, 95, 214)',
          },
        }}
      >
        <Menu
          sx={{
            width: 30,
            height: 30,
          }}
        />
      </IconButton>

      {/* DRAWER */}
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        {/* CLOSE */}
        <Box sx={{ display: 'flex', ml: 'auto', mt: 1, mr: 2 }}>
          <ModalClose sx={{ position: 'initial' }} />
        </Box>

        {/* MENU */}
        <List size='lg' sx={{ px: 3, pt: 2 }}>
          <ListItemButton>
            <a
              onClick={() => setOpen(false)}
              className='hover:text-black w-full'
              href='#services'
            >
              Услуги
            </a>
          </ListItemButton>

          <ListItemButton>
            <a
              onClick={() => setOpen(false)}
              className='hover:text-black w-full'
              href='#ourWork'
            >
              Наши работы
            </a>
          </ListItemButton>
          <ListItemButton>
            <a
              onClick={() => setOpen(false)}
              className='hover:text-black w-full'
              href='#ourContacts'
            >
              Контакты
            </a>
          </ListItemButton>
          <ListItemButton>
            <a
              onClick={() => setOpen(false)}
              className='hover:text-black w-full'
              href='https://m.avito.ru/user/d408dd0bec883d10d60bcd80fec8b2ec/profile/all/predlozheniya_uslug?id=2815277141&src=item&sellerId=d408dd0bec883d10d60bcd80fec8b2ec#open-reviews-list'
            >
              Отзывы
            </a>
          </ListItemButton>
          <Box sx={{ px: 3, pt: 2 }}>
            <Typography level='body-sm' sx={{ color: '#000000ff' }}>
              Консультация онлайн и выезд по Санкт-Петербургу
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* ТЕЛЕФОН */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href='tel:+79633071303'
              className='
                flex items-center gap-3
                px-5 py-3
                rounded-full
                border border-black/30
                text-black
                hover:bg-black hover:text-white
                transition
              '
            >
              <Phone className='w-5 h-5' />
              <span className='font-medium'> +7 (963) 307-13-03</span>
            </a>
          </Box>

          {/* СОЦСЕТИ */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 3,
            }}
          >
            <a
              href='https://t.me/Kot12290'
              target='_blank'
              className='w-18 h-18 flex items-center justify-center rounded-full  border-black/30 transition'
            >
              <img src='/telegram.svg' className='w-13 h-13' />
            </a>

            <a
              href='https://www.avito.ru/sankt-peterburg/predlozheniya_uslug/vyveski_svetovye_2815277141?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller' // при желании можно заменить на профиль
              target='_blank'
              rel='noopener noreferrer'
              className='w-18 h-18 flex items-center justify-center rounded-full  border-black/30  transition'
            >
              <img src='/avito.png' alt='Avito' className='w-13 h-13' />
            </a>

            <a
              href=' https://max.ru/u/f9LHodD0cOK9R9T971VS1ANcJ8TZCsQjKuGhrY3bI4UyncOL6nOsE6XtSt8'
              target='_blank'
              rel='noopener noreferrer'
              className='w-18 h-18 flex items-center justify-center rounded-full  transition'
            >
              <img src='/max.svg' alt='Max' className='w-13 h-13' />
            </a>
            <a
              href='https://vk.ru/reclame'
              target='_blank'
              rel='noopener noreferrer'
              className='w-18 h-18 flex items-center justify-center rounded-full  transition'
            >
              <img src='/vk-v2.svg' alt='Max' className='w-13 h-13' />
            </a>
          </Box>
        </List>
      </Drawer>
    </>
  );
}
