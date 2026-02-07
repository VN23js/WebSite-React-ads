import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#efeff1',

  textAlign: 'center',
  borderRadius: 10,
}));

export default function FullWidthGrid() {
  return (
    <Grid justifyContent={'center'} container spacing={2}>
      <Grid items xs={12} sm={6} md={6} lg={4.0}>
        <Item
          sx={{
            background: '#151518',
            borderRadius: '20px',
            border: '1px solid rgba(147,115,234,0.15)',
            transition: '0.3s',
            '&:hover': {
              border: '1px solid rgba(147,115,234,0.4)',
            },
          }}
        >
          <div className='p-5 flex flex-col items-start gap-2'>
            <div
              className='p-3 rounded-xl'
              style={{ background: 'rgba(37,211,102,0.1)' }}
            >
              <img src='/whatsapp-whats-app.svg' className='w-10 h-10' />
            </div>

            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              WhatsApp
            </Typography>
            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              +7 (123) 456-78-90
            </Typography>
            <Typography
              level='body-sm'
              sx={{ textAlign: 'left', color: '#888' }}
            >
              Консультация онлайн и выезд по Санкт-Петербургу
            </Typography>
            <a
              href='https://wa.me/71234567890'
              target='_blank'
              className='mt-2 px-6 py-2
  bg-[#1e1e22]
  text-white
  rounded-xl
  hover:bg-[#25252a]'
            >
              Написать
            </a>
          </div>
        </Item>
      </Grid>
      <Grid items xs={12} sm={6} md={6} lg={4.0}>
        <Item
          sx={{
            background: '#151518',
            borderRadius: '20px',
            border: '1px solid rgba(147,115,234,0.15)',
            transition: '0.3s',
            '&:hover': {
              border: '1px solid rgba(147,115,234,0.4)',
            },
          }}
        >
          <div className='p-5 flex flex-col items-start gap-2'>
            <div
              className='p-3 rounded-xl'
              style={{
                background: 'rgba(0,136,204,0.18)',
              }}
            >
              <img src='/telegram.svg' className='w-10 h-10' />
            </div>

            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              Telegram
            </Typography>
            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              +7 (123) 456-78-90
            </Typography>
            <Typography
              level='body-sm'
              sx={{ textAlign: 'left', color: '#888' }}
            >
              Консультация онлайн и выезд по Санкт-Петербургу
            </Typography>

            <a
              href='https://wa.me/71234567890'
              target='_blank'
              className='mt-2 px-6 py-2
  bg-[#1e1e22]
  text-white
  rounded-xl
  hover:bg-[#25252a]'
            >
              Написать
            </a>
          </div>
        </Item>
      </Grid>
      <Grid items xs={12} sm={6} md={6} lg={4.0}>
        <Item
          sx={{
            background: '#151518',
            borderRadius: '20px',
            border: '1px solid rgba(147,115,234,0.15)',
            transition: '0.3s',
            '&:hover': {
              border: '1px solid rgba(147,115,234,0.4)',
            },
          }}
        >
          <div className='p-5 flex flex-col items-start gap-2'>
            <div
              className='p-3 rounded-xl'
              style={{ background: 'rgba(0,136,204,0.18)' }}
            >
              <img src='/avito.png' className='w-10 h-10' />
            </div>

            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              Avito
            </Typography>
            <Typography
              sx={{ textAlign: 'left', color: '#ffffffff' }}
              level='h3'
            >
              Принимаем заказы через Avito
            </Typography>

            <Typography
              level='body-sm'
              sx={{ textAlign: 'left', color: '#888' }}
            >
              Консультация онлайн и выезд по Санкт-Петербургу
            </Typography>
            <a
              href='https://wa.me/71234567890'
              target='_blank'
              className='mt-2 px-6 py-2
  bg-[#1e1e22]
  text-white
  rounded-xl
  hover:bg-[#25252a]'
            >
              Написать
            </a>
          </div>
        </Item>
      </Grid>
      <Grid items xs={12} sm={6} md={6} lg={4.0}>
        <Item
          sx={{
            background: '#151518',
            borderRadius: '20px',
            border: '1px solid rgba(147,115,234,0.15)',
            transition: '0.3s',
            '&:hover': {
              border: '1px solid rgba(147,115,234,0.4)',
            },
          }}
        >
          <div className='p-5 flex flex-col items-start gap-2'>
            <div
              className='p-3 rounded-xl'
              style={{ background: 'rgba(0,136,204,0.18)' }}
            >
              <img src='/max.svg' className='w-10 h-10' />
            </div>

            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              Max
            </Typography>
            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              +7 (123) 456-78-90
            </Typography>
            <Typography
              level='body-sm'
              sx={{ textAlign: 'left', color: '#888' }}
            >
              Консультация онлайн и выезд по Санкт-Петербургу
            </Typography>

            <a
              href='https://wa.me/71234567890'
              target='_blank'
              className='mt-2 px-6 py-2
  bg-[#1e1e22]
  text-white
  rounded-xl
  hover:bg-[#25252a]'
            >
              Написать
            </a>
          </div>
        </Item>
      </Grid>
      <Grid items xs={12} sm={6} md={6} lg={4.0}>
        <Item
          sx={{
            background: '#151518',
            borderRadius: '20px',
            border: '1px solid rgba(147,115,234,0.15)',
            transition: '0.3s',
            '&:hover': {
              border: '1px solid rgba(147,115,234,0.4)',
            },
          }}
        >
          <div className='p-5 flex flex-col items-start gap-2'>
            <div
              className='p-3 rounded-xl'
              style={{ background: 'rgba(0,136,204,0.18)' }}
            >
              <img src='/vk-v2.svg' className='w-10 h-10' />
            </div>

            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              VK
            </Typography>
            <Typography sx={{ fontWeight: 500, color: '#fff' }} level='h3'>
              +7 (123) 456-78-90
            </Typography>
            <Typography
              level='body-sm'
              sx={{ textAlign: 'left', color: '#888' }}
            >
              Консультация онлайн и выезд по Санкт-Петербургу
            </Typography>

            <a
              href='https://wa.me/71234567890'
              target='_blank'
              className='mt-2 px-6 py-2
  bg-[#1e1e22]
  text-white
  rounded-xl
  hover:bg-[#25252a]'
            >
              Написать
            </a>
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}
