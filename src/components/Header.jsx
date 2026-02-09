// src/components/Header.jsx
import React from 'react';
import '@/styles/global.css';
import DrawerMobileNavigation from '@/components/Burger.jsx';
export default function Header() {
  return (
    <div className='container '>
      <header>
        <div className='fon'>
          <div className='main-container'>
            <div className='header-div'>
              <div class='logo'>
                <div class='logo-mark'></div>
                <div class='logo-text'>ART STICK</div>
              </div>
              <div className='header-text'>
                <div className='hover-text'>
                  <a className='hover:text-black' href='#services'>
                    Услуги
                  </a>
                </div>
                <div className='hover-text'>
                  <a className='hover:text-black' href='#ourWork'>
                    Наши работы
                  </a>
                </div>

                <div className='hover-text'>
                  <a
                    className='hover:text-black'
                    href='   https://m.avito.ru/user/d408dd0bec883d10d60bcd80fec8b2ec/profile/all/predlozheniya_uslug?id=2815277141&src=item&sellerId=d408dd0bec883d10d60bcd80fec8b2ec#open-reviews-list'
                  >
                    Отзывы
                  </a>
                </div>
                <div className='hover-text'>
                  <a className='hover:text-black' href='#ourContacts'>
                    Контакты
                  </a>
                </div>
              </div>
              <div className='header-button'>
                {/* <div className='tg-button'>
                  <a
                    href='https://wa.me/71234567890'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/whatsapp.svg'
                      alt='WhatsApp'
                      className='tg-icon w-8 h-8'
                    />
                  </a>

                  <a
                    href='https://t.me/vn1337'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src='/telegram-desktop.svg'
                      alt='Telegram'
                      className='tg-icon w-8 h-8'
                    />
                  </a>
                </div> */}

                <a
                  href='https://www.avito.ru/sankt-peterburg/predlozheniya_uslug/vyveski_svetovye_2815277141?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller'
                  className='button-2'
                  style={{ '--clr': '#7808d0' }}
                >
                  Связаться с нами
                  <span className='button__icon-wrapper'>
                    <svg
                      viewBox='0 0 14 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='button__icon-svg'
                      width='10'
                    >
                      <path
                        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
                        fill='currentColor'
                      />
                    </svg>

                    <svg
                      viewBox='0 0 14 15'
                      fill='none'
                      width='10'
                      xmlns='http://www.w3.org/2000/svg'
                      className='button__icon-svg button__icon-svg--copy'
                    >
                      <path
                        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </a>
                <div className='burger'>
                  <DrawerMobileNavigation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
