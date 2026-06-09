import { useLanguage } from '../context/LanguageContext';
import { Heart } from 'lucide-react';

export function Pitch() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary fill-primary/20" />
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center space-y-8">
              {/* Intro */}
              <div className="relative">
                <div className="absolute -left-4 top-0 text-6xl text-primary/20 font-serif">"</div>
                <p className="text-2xl md:text-3xl leading-relaxed">
                  <strong className="text-primary">{t('pitch.intro')}</strong>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="h-px w-16 bg-border"></div>
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                <div className="h-px w-16 bg-border"></div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                {t('pitch.description')}
              </p>

              {/* Usage */}
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                {t('pitch.usage')}
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="h-px w-16 bg-border"></div>
                <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                <div className="h-px w-16 bg-border"></div>
              </div>

              {/* Tagline */}
              <div className="relative pt-4">
                <p className="text-2xl md:text-3xl leading-relaxed">
                  <strong className="text-primary">{t('pitch.tagline')}</strong>
                </p>
                <div className="absolute -right-4 bottom-0 text-6xl text-primary/20 font-serif">"</div>
              </div>
            </div>
          </div>

          {/* Bottom decorative dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
