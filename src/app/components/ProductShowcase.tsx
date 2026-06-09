import { ImageWithFallback } from './figma/ImageWithFallback';
import productImage from '../../imports/ChatGPT_Image_Jun_1__2026__08_46_35_AM.png';
import { useLanguage } from '../context/LanguageContext';

export function ProductShowcase() {
  const { t } = useLanguage();

  return (
    <section id="product" className="py-20 bg-gradient-to-br from-[#ebe6df] to-[#e8dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            {t('product.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('product.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={productImage}
              alt={t('product.alt')}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#faf8f5] rounded-xl shadow-sm border border-border">
              <h4 className="mb-2">{t('product.inner')}</h4>
              <p className="text-sm text-muted-foreground">{t('product.inner.description')}</p>
            </div>
            <div className="text-center p-6 bg-[#faf8f5] rounded-xl shadow-sm border border-border">
              <h4 className="mb-2">{t('product.outer')}</h4>
              <p className="text-sm text-muted-foreground">{t('product.outer.description')}</p>
            </div>
            <div className="text-center p-6 bg-[#faf8f5] rounded-xl shadow-sm border border-border">
              <h4 className="mb-2">{t('product.magnets')}</h4>
              <p className="text-sm text-muted-foreground">{t('product.magnets.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
