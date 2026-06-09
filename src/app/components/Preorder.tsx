import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Preorder() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="preorder" className="py-20 bg-gradient-to-br from-[#8b7355] to-[#a89480] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl mb-4">
          {t('preorder.title')}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {t('preorder.subtitle')}
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl mb-2">30%</div>
              <div className="text-sm opacity-90">{t('preorder.discount')}</div>
            </div>
            <div>
              <div className="text-3xl mb-2">Q3 2026</div>
              <div className="text-sm opacity-90">{t('preorder.delivery')}</div>
            </div>
            <div>
              <div className="text-3xl mb-2">€40</div>
              <div className="text-sm opacity-90">{t('preorder.price')}</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('preorder.email.placeholder')}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {t('preorder.button')}
              </button>
            </div>
            {submitted && (
              <p className="mt-3 text-sm">{t('preorder.success')}</p>
            )}
          </form>
        </div>

        <p className="text-sm opacity-75">
          {t('preorder.disclaimer')}
        </p>
      </div>
    </section>
  );
}
