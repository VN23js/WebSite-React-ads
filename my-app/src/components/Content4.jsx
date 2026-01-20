import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import FullWidthGrid from './Contacts';

export default function Content4() {
  const imgLink = [
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/3937212/2a000001871e3840518a4d409d8fbfd6f0e7/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/3937212/2a000001871e38598b7afef532591b6c093b/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/3925651/2a000001871e387bfe51b8db7c08c90648f4/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/6058772/2a000001871e388fff6900f062104eb53a9d/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/4079136/2a000001871e38b3d29aa0124bdca0c27cd8/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/12406519/2a0000018edd3148a2c08dbc0a70f639e612/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/4079136/2a000001871e38e975fc48f1537bc3198a11/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/4421910/2a0000018edd3ae2d4ac210fd1343c0e92df/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/11374192/2a0000018edd3afde58db638825d5b9158f2/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/11374192/2a0000018edd3b4faf534a4b1bf22723f1a0/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/15074467/2a00000197d55f22d375bfc5054f387dbd24/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/14411439/2a00000197d55f6b42e5c189bacd3d360be9/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/10236117/2a00000197d55fdc775a8928e22a46b47930/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/15074467/2a00000197d560c8c86c5be39712b801fb1e/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/3614230/2a00000197d5612bd62f002e59fde29daede/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/15074467/2a00000197d5621abf2d85e14c6f834aeb27/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/12829871/2a00000197d5630525426274905d24832ecb/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/14411439/2a00000197d56344f7edaf9829d296fc66a9/diploma',
    },
    {
      link: 'https://avatars.mds.yandex.net/get-ydo/14411439/2a00000197d5648e8a22743fb8a99434115e/diploma',
    },
  ];
  return (
    <div className='our-works-fon'>
      <div className='our-works flex items-start flex-col'>
        <button
          id='ourWork'
          style={{ background: '#2d2d2d' }}
          className=' text-white z-1 h-11 rounded-2xl '
        >
          Работы
        </button>
        <div className='text-services'>
          <div className='welcome-block'>
            <h1
              style={{
                color: '#ffff',
                marginTop: '20px',
                marginBottom: '10px',
              }}
            >
              Наши <span style={{ color: '#9373ea' }}>Работы</span>
            </h1>
          </div>
        </div>
      </div>

      <div className='slider'>
        <Carousel>
          <CarouselContent className='-ml-2 md:-ml-4 '>
            {imgLink.map((item, index) => (
              <CarouselItem
                key={index}
                className='basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/3  pl-2 md:pl-4 '
              >
                <div className=' item-slider'>
                  <img
                    className='w-full rounded-xl aspect-[5/5] object-cover'
                    src={item.link}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className='left-1 top-1/2 bg-black/60 text-white w-10 h-10 translate-y-1/2' />
          <CarouselNext className='right-1 top-1/2 bg-black/60 text-white w-10 h-10 translate-y-1/2' />
        </Carousel>
      </div>
      <div className='text-services'>
        <button
          id='ourContacts'
          style={{ background: '#2d2d2d' }}
          className=' text-white z-1 h-11 rounded-2xl '
        >
          Контакты
        </button>
        <div className='welcome-block'>
          <h1
            style={{
              color: '#ffff',
              marginTop: '20px',
              marginBottom: '10px',
            }}
          >
            Наши контакты <span style={{ color: '#9373ea' }}>и соцсети</span>
          </h1>
        </div>
      </div>
      <div className=' flex items-center justify-center w-full'>
        <FullWidthGrid></FullWidthGrid>
      </div>
    </div>
  );
}
