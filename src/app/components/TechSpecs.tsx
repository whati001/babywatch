import { useLanguage } from '../context/LanguageContext';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Bluetooth, Radio, Battery, Smartphone, Disc, Activity, WifiOff } from 'lucide-react';

export function TechSpecs() {
  const { t } = useLanguage();

  const specs = [
    {
      labelKey: 'specs.connection',
      valueKey: 'specs.connection.value',
      explanationKey: 'specs.connection.explanation',
      icon: <Bluetooth size={20} />
    },
    {
      labelKey: 'specs.range',
      valueKey: 'specs.range.value',
      explanationKey: 'specs.range.explanation',
      icon: <Radio size={20} />
    },
    {
      labelKey: 'specs.power',
      valueKey: 'specs.power.value',
      explanationKey: 'specs.power.explanation',
      icon: <Battery size={20} />
    },
    {
      labelKey: 'specs.compatibility',
      valueKey: 'specs.compatibility.value',
      explanationKey: 'specs.compatibility.explanation',
      icon: <Smartphone size={20} />
    },
    {
      labelKey: 'specs.mounting',
      valueKey: 'specs.mounting.value',
      explanationKey: 'specs.mounting.explanation',
      icon: <Disc size={20} />
    },
    {
      labelKey: 'specs.detection',
      valueKey: 'specs.detection.value',
      explanationKey: 'specs.detection.explanation',
      icon: <Activity size={20} />
    },
    {
      labelKey: 'specs.internet',
      valueKey: 'specs.internet.value',
      explanationKey: 'specs.internet.explanation',
      icon: <WifiOff size={20} />
    }
  ];

  return (
    <section id="specs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            {t('specs.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="multiple" className="bg-card border border-border rounded-xl overflow-hidden">
            {specs.map((spec, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className={index !== specs.length - 1 ? 'border-b border-border' : ''}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex justify-between items-center p-6 hover:bg-accent/50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{spec.icon}</div>
                      <span className="text-muted-foreground">{t(spec.labelKey)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-right">{t(spec.valueKey)}</span>
                      <ChevronDown
                        size={20}
                        className="text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
                      />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-6 pb-6 pt-2 text-muted-foreground text-sm leading-relaxed">
                    {t(spec.explanationKey)}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
