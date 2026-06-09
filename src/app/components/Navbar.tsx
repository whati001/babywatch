import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoIcon from '../../imports/icon.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (lang: 'en' | 'de') => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <ImageWithFallback
              src={logoIcon}
              alt="Babywatch logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold text-xl">Babywatch</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('preorder')} className="hover:text-primary transition-colors">
              {t('nav.preorder')}
            </button>
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">
              {t('nav.features')}
            </button>
            <button onClick={() => scrollToSection('product')} className="hover:text-primary transition-colors">
              {t('nav.product')}
            </button>
            <button onClick={() => scrollToSection('specs')} className="hover:text-primary transition-colors">
              {t('nav.specs')}
            </button>
            <button onClick={() => scrollToSection('newsletter')} className="hover:text-primary transition-colors">
              {t('nav.newsletter')}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Globe size={18} />
                <span className="uppercase">{language}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${
                      language === 'en' ? 'bg-accent' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('de')}
                    className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors ${
                      language === 'de' ? 'bg-accent' : ''
                    }`}
                  >
                    Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('preorder')} className="text-left hover:text-primary transition-colors">
                {t('nav.preorder')}
              </button>
              <button onClick={() => scrollToSection('features')} className="text-left hover:text-primary transition-colors">
                {t('nav.features')}
              </button>
              <button onClick={() => scrollToSection('product')} className="text-left hover:text-primary transition-colors">
                {t('nav.product')}
              </button>
              <button onClick={() => scrollToSection('specs')} className="text-left hover:text-primary transition-colors">
                {t('nav.specs')}
              </button>
              <button onClick={() => scrollToSection('newsletter')} className="text-left hover:text-primary transition-colors">
                {t('nav.newsletter')}
              </button>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-border">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-accent'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('de')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      language === 'de' ? 'bg-primary text-primary-foreground' : 'bg-accent'
                    }`}
                  >
                    Deutsch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
