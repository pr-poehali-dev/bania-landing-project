import { useState } from 'react';
import Icon from '@/components/ui/icon';

const steps = [
  {
    question: 'Что хотите построить?',
    options: [
      '🌲 Финская сауна',
      '🔥 Русская баня',
      '💧 Турецкий хаммам',
      '🏠 Комплекс (несколько зон)',
    ],
  },
  {
    question: 'Площадь парной:',
    options: ['До 10 м²', '10–20 м²', '20–40 м²', 'Больше 40 м² / не знаю'],
  },
  {
    question: 'Какая древесина вам нравится больше?',
    options: [
      '🟤 Абаш',
      '🌰 Ольха / термоольха',
      '🌲 Канадский кедр',
      '✨ Доска кело',
      '🤷 Пусть посоветуют специалисты',
    ],
  },
  {
    question: 'Где строим:',
    options: [
      'Отдельное здание на участке',
      'Пристройка к дому',
      'Внутри дома / квартиры (хаммам)',
      'Коммерческий объект',
    ],
  },
  {
    question: 'Ваш бюджет:',
    options: ['До 1,5 млн ₽', '1,5–3 млн ₽', '3–6 млн ₽', 'Свыше 6 млн ₽'],
  },
];

const QuizBlock = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [messenger, setMessenger] = useState<'WhatsApp' | 'Telegram'>('WhatsApp');
  const [submitted, setSubmitted] = useState(false);

  const total = steps.length;
  const progress = done ? 100 : Math.round((step / total) * 100);

  const pick = (opt: string) => {
    const next = [...answers];
    next[step] = opt;
    setAnswers(next);
    if (step < total - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const back = () => {
    if (done) {
      setDone(false);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  return (
    <section id="calc" className="dark bg-background py-20 md:py-28">
      <div className="container max-w-3xl">
        <h2 className="font-semibold text-3xl md:text-4xl text-center text-foreground mb-10">
          За сколько можно построить баню или хаммам?{' '}
          <span className="text-primary">Узнайте за 1 минуту</span>
        </h2>

        <div className="rounded-2xl bg-card border border-border p-6 md:p-10">
          {/* Прогресс */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
              <span>{done ? 'Готово' : `Шаг ${step + 1} из ${total}`}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!done ? (
            <div key={step} className="animate-fade-up">
              <h3 className="font-semibold text-xl md:text-2xl text-foreground mb-6">
                {steps[step].question}
              </h3>
              <div className="grid gap-3">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => pick(opt)}
                    className={`text-left rounded-xl border px-5 py-4 font-medium transition-colors ${
                      answers[step] === opt
                        ? 'border-primary bg-primary/10 text-foreground'
                        : 'border-border bg-secondary/40 text-foreground hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : submitted ? (
            <div className="animate-fade-up text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/15 mb-5">
                <Icon name="Check" size={32} className="text-success" />
              </div>
              <h3 className="font-semibold text-2xl text-foreground mb-3">Заявка отправлена!</h3>
              <p className="text-muted-foreground">
                Скоро пришлём подборку проектов и примерную смету в {messenger}.
              </p>
            </div>
          ) : (
            <div className="animate-fade-up">
              <h3 className="font-semibold text-xl md:text-2xl text-foreground mb-3">Отлично!</h3>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                Под ваши параметры у нас есть 3 реализованных проекта. Оставьте контакт — пришлём
                подборку + примерную смету.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-4"
              >
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

                <div className="grid grid-cols-2 gap-3">
                  {(['WhatsApp', 'Telegram'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMessenger(m)}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-4 font-medium transition-colors ${
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

                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
                >
                  Получить подборку
                </button>
              </form>
            </div>
          )}

          {/* Назад */}
          {!submitted && (step > 0 || done) && (
            <button
              onClick={back}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" size={16} /> Назад
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizBlock;
