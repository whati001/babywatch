import { Battery, WifiOff, Smartphone, Activity, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Battery className="w-8 h-8" />,
      titleKey: 'features.battery.title',
      descriptionKey: 'features.battery.description'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      titleKey: 'features.movement.title',
      descriptionKey: 'features.movement.description'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      titleKey: 'features.monitor.title',
      descriptionKey: 'features.monitor.description'
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      titleKey: 'features.wifi.title',
      descriptionKey: 'features.wifi.description'
    },
    {
      icon: <Radio className="w-8 h-8" />,
      titleKey: 'features.range.title',
      descriptionKey: 'features.range.description'
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card"
            >
              <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
