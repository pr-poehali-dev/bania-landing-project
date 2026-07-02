import { useState } from 'react';
import Icon from '@/components/ui/icon';

const teasers = [
  'Неправильная пароизоляция → плесень через 2 года',
  'Электрический обогрев пола в хаммаме → риск замыкания при влажности 100%',
  'Использование бюджетных пород дерева → трещины, потемнение, короткий срок службы',
  'Парогенератор слишком далеко от форсунки → пар конденсируется в трубах',
  'Игнорирование вентиляции → угар и разрушение конструкции',
];

const ChecklistBlock = () => {
  const [messenger, setMessenger] = useState<'WhatsApp' | 'Telegram'>('WhatsApp');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="dark bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center rounded-3xl border border-border bg-card p-8 md:p-12">
          {/* Левая часть */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              <Icon name="Gift" size={16} /> Бесплатно
            </span>
            <h2 className="font-semibold text-2xl md:text-4xl text-foreground leading-tight mb-4">
              Чек-лист «14 критических ошибок при строительстве бани и хаммама»
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Которые стоят 300 000–900 000 ₽ переделок — и как их избежать
            </p>

            <ul className="space-y-3">
              {teasers.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Icon name="X" size={18} className="text-error shrink-0 mt-1" />
                  <span className="text-foreground/90 leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Форма */}
          <div className="rounded-2xl bg-secondary/40 border border-border p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8 animate-fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/15 mb-5">
                  <Icon name="Check" size={32} className="text-success" />
                </div>
                <h3 className="font-semibold text-2xl text-foreground mb-3">Готово!</h3>
                <p className="text-muted-foreground">
                  Чек-лист придёт в {messenger} в течение 2 минут.
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
                  Получите чек-лист прямо сейчас
                </h3>

                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  className="rounded-xl border border-border bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />

                <div className="grid grid-cols-2 gap-3">
                  {(['WhatsApp', 'Telegram'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMessenger(m)}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-4 font-medium transition-colors ${
                        messenger === m
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-background text-muted-foreground hover:border-primary'
                      }`}
                    >
                      <Icon name={m === 'WhatsApp' ? 'MessageCircle' : 'Send'} size={18} />
                      {m}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  Получить чек-лист бесплатно
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  PDF придёт в мессенджер в течение 2 минут
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistBlock;
