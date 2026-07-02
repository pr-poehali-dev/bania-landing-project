import { useState } from 'react';
import Icon from '@/components/ui/icon';

const ILLUSTRATION =
  'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/cf5bfe95-6e65-443e-bb53-74f49f05aad8.jpg';

const inside = [
  { emoji: '📊', text: 'Сравнительная таблица: температура, влажность, стоимость, обслуживание' },
  { emoji: '🌰', text: 'Сравнение материалов: абаш vs ольха vs термоольха vs кедр vs кело' },
  { emoji: '🏠', text: 'Какой тип подходит для какого размера участка' },
  { emoji: '💰', text: 'Реальные бюджеты по типам с разбивкой по статьям' },
];

const GuideBlock = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-background grain">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Иллюстрация */}
          <div className="order-1 lg:order-none">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={ILLUSTRATION}
                alt="Три типа парных: сауна, баня, хаммам"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Контент */}
          <div>
            <h2 className="font-semibold text-3xl md:text-4xl leading-tight mb-4">
              Не знаете, что выбрать — сауну, баню или хаммам?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Бесплатный гайд «Как выбрать тип парной и материал под свой участок, бюджет и образ
              жизни»
            </p>

            <ul className="space-y-3 mb-8">
              {inside.map((i) => (
                <li key={i.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{i.emoji}</span>
                  <span className="text-foreground/90 leading-snug">{i.text}</span>
                </li>
              ))}
            </ul>

            {submitted ? (
              <div className="rounded-2xl bg-success/10 border border-success/30 p-6 flex items-center gap-4 animate-fade-up">
                <Icon name="Check" size={28} className="text-success shrink-0" />
                <p className="text-foreground font-medium">
                  Гайд отправлен! Проверьте почту и мессенджер.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  className="rounded-xl border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-xl bg-primary px-6 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  Получить гайд
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideBlock;
