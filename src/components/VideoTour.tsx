import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PREVIEW =
  'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/4607e0f5-ab12-40ce-ad8c-c429248e9a18.jpg';

const VideoTour = () => {
  const [playing, setPlaying] = useState(false);
  const [messenger, setMessenger] = useState<'WhatsApp' | 'Telegram'>('WhatsApp');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="dark bg-background py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
            Посмотрите изнутри: <span className="text-primary">хаммам 15 м² в Находке</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Полная экскурсия: отделка, оборудование, водяной обогрев — как это выглядит в реальности
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Видео-превью */}
          <button
            onClick={() => setPlaying(true)}
            className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-border"
          >
            <img
              src={PREVIEW}
              alt="Превью видео-экскурсии по хаммаму"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <Icon name="Play" size={32} className="ml-1" />
              </span>
            </span>
          </button>

          {/* Форма */}
          <div className="mt-8 rounded-2xl bg-card border border-border p-6 md:p-8 max-w-xl mx-auto">
            {submitted ? (
              <div className="text-center py-6 animate-fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/15 mb-5">
                  <Icon name="Check" size={32} className="text-success" />
                </div>
                <h3 className="font-semibold text-2xl text-foreground mb-3">Заявка принята!</h3>
                <p className="text-muted-foreground">
                  Пришлём смету в {messenger} в ближайшее время.
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
                      className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-4 font-medium transition-colors ${
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
                  Хочу смету
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Модалка с видео */}
      {playing && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 animate-fade-up"
          onClick={() => setPlaying(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlaying(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white"
            >
              <Icon name="X" size={28} />
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-card border border-border text-center p-8">
              <Icon name="Video" size={48} className="text-primary mb-4" />
              <p className="text-foreground font-medium">Здесь будет видео-экскурсия</p>
              <p className="text-muted-foreground text-sm mt-2">
                Пришлите ссылку на ролик — подключу его в это окно
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTour;
