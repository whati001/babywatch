import { useLanguage } from '../context/LanguageContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './figma/ImageWithFallback';
import image1 from '../../imports/ChatGPT_Image_Jun_1__2026__11_01_38_AM__1_.png';
import image2 from '../../imports/ChatGPT_Image_Jun_1__2026__11_01_38_AM__2_.png';
import image3 from '../../imports/ChatGPT_Image_Jun_1__2026__11_01_39_AM__3_.png';
import image4 from '../../imports/ChatGPT_Image_Jun_1__2026__11_01_39_AM__4_.png';
import image5 from '../../imports/ChatGPT_Image_Jun_1__2026__11_01_40_AM__5_.png';

export function Hero() {
  const { t } = useLanguage();

  const scrollToPreorder = () => {
    const element = document.getElementById('preorder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productImages = [
    {
      src: image1,
      alt: 'Babywatch - Battery driven baby monitor with up to 8 hours of battery life',
    },
    {
      src: image2,
      alt: 'Babywatch - No Wi-Fi needed, direct BLE connection for privacy',
    },
    {
      src: image3,
      alt: 'Babywatch - Intelligent movement detection with real-time alerts',
    },
    {
      src: image4,
      alt: 'Babywatch - Direct link up to 250 meters range',
    },
    {
      src: image5,
      alt: 'Babywatch - No dedicated monitor needed, works with any smartphone',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center bg-gradient-to-br from-[#f5f1eb] to-[#e8dfd5] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4c4b0] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#c8bfb3] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-4 py-2 bg-primary text-primary-foreground rounded-full">
            {t('hero.badge')}
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <button
            onClick={scrollToPreorder}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            {t('hero.cta')}
          </button>

          <p className="mt-4 text-sm text-muted-foreground">
            {t('hero.development')}
          </p>
        </div>

        {/* Image Slider */}
        <div className="max-w-5xl mx-auto mt-16 pb-12">
          <Slider {...sliderSettings}>
            {productImages.map((image, index) => (
              <div key={index} className="px-1 sm:px-2">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-video">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
