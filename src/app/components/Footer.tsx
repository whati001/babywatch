import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoIcon from '../../imports/icon.png';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ImageWithFallback
                src={logoIcon}
                alt="Babywatch logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-xl">Babywatch</span>
            </div>
            <p className="text-sm opacity-90">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="mb-4">{t('footer.company')}</h4>
            <div className="text-sm opacity-90 space-y-2">
              <p>Rehka Solution GmbH</p>
              <p>Wuenschendorf 99</p>
              <p>8200 Gleisdorf</p>
              <p>Austria</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4">{t('footer.contact')}</h4>
            <div className="text-sm opacity-90 space-y-2">
              <p>info@babwatch.com</p>
              <p>support@babwatch.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
