import { useState } from 'react';
import Icon from '@/components/ui/icon';

const types = ['Сауна', 'Баня', 'Хаммам', 'Комплекс'] as const;

const FinalCta = () => {
  const [type, setType] = useState<(typeof types)[number]>('Сауна');
  const [messenger, setMessenger] = useState<'WhatsApp' | 'Telegram'>('WhatsApp');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="dark bg-background py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-semibold text-3xl md:text-5xl text-foreground leading-tight mb-5">
            Готовы построить баню, сауну или хаммам{' '}
            <span className="text-primary">мечты?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку — перезвоним в течение 15 минут, ответим на все вопросы и предложим
            варианты под ваш бюджет. Бесплатно, без обязательств.
          </p>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6 md:p-10">
          {submitted ? (
            <div className="text-center py-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/15 mb-5">
                <Icon name="Check" size={32} className="text-success" />
              </div>
              <h3 className="font-semibold text-2xl text-foreground mb-3">Спасибо за заявку!</h3>
              <p className="text-muted-foreground">
                Перезвоним в течение 15 минут и напишем в {messenger}.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-5"
            >
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>

              {/* Что интересует */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Что интересует?</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {types.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className={`rounded-xl border px-4 py-3 font-medium transition-colors ${
                        type === t
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-secondary/40 text-muted-foreground hover:border-primary'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Мессенджер */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Удобный мессенджер</p>
                <div className="grid grid-cols-2 gap-3">
                  {(['WhatsApp', 'Telegram'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMessenger(m)}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-medium transition-colors ${
                        messenger === m
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border bg-secondary/40 text-muted-foreground hover:border-primary'
                      }`}
                    >
                      <Icon name={m === 'WhatsApp' ? 'MessageCircle' : 'Send'} size={18} />
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="rounded-xl bg-primary px-6 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                🔥 Получить консультацию бесплатно
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Не передаём данные
                третьим лицам.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
