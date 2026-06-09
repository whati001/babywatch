import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="newsletter" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-4xl mb-4">
          {t('newsletter.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('newsletter.subtitle')}
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.email.placeholder')}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('newsletter.button')}
            </button>
          </div>
          {subscribed && (
            <p className="mt-3 text-sm text-muted-foreground">
              {t('newsletter.success')}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
