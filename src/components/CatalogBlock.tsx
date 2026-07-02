import { useState } from 'react';
import Icon from '@/components/ui/icon';

const inside = [
  { emoji: '📐', text: 'Чертежи и планировки' },
  { emoji: '📸', text: 'Фотографии до/после' },
  { emoji: '💰', text: 'Реальные бюджеты проектов' },
  { emoji: '📋', text: 'Использованные материалы (абаш, ольха, термоольха, кедр, кело)' },
  { emoji: '⏱️', text: 'Сроки строительства' },
];

const CatalogBlock = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="dark bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Левая часть */}
          <div>
            <h2 className="font-semibold text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Каталог реализованных проектов{' '}
              <span className="text-primary">2024–2025</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              19 реальных бань, саун и хаммамов — с планировками, фото и ценами
            </p>

            <p className="text-sm font-medium text-foreground/70 uppercase tracking-wide mb-4">
              Что внутри каталога
            </p>
            <ul className="space-y-3">
              {inside.map((i) => (
                <li key={i.text} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{i.emoji}</span>
                  <span className="text-foreground/90 leading-snug">{i.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Форма */}
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8 animate-fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/15 mb-5">
                  <Icon name="Check" size={32} className="text-success" />
                </div>
                <h3 className="font-semibold text-2xl text-foreground mb-3">Спасибо!</h3>
                <p className="text-muted-foreground">
                  Ссылка на каталог придёт вам в течение пары минут.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-4"
              >
                <h3 className="font-semibold text-xl text-foreground">
                  Скачайте каталог проектов
                </h3>

                <input
                  required
                  placeholder="Ваше имя"
                  className="rounded-xl border border-border bg-secondary/40 px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  className="rounded-xl border border-border bg-secondary/40 px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  <Icon name="Download" size={20} /> Скачать каталог
                </button>

                <p className="flex flex-wrap items-center justify-center gap-x-2 text-center text-xs text-muted-foreground">
                  <span>Каталог обновлён в октябре 2025</span>
                  <span className="text-faint">·</span>
                  <span>28 МБ</span>
                  <span className="text-faint">·</span>
                  <span>PDF</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogBlock;
