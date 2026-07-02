import Icon from '@/components/ui/icon';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const POOL = 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/bea6b7d7-3b5a-463c-b308-1ea95fc8b721.jpg';

const pools = [
  {
    name: 'Тёплая лагуна',
    temp: '+36 °C',
    size: '12 × 6 м · глубина 1,4 м',
    desc: 'Главный бассейн с мягкой минеральной водой. Подсветка и гидромассажные зоны для полного расслабления.',
    features: ['Гидромассаж', 'Подводная подсветка', 'Пологий вход'],
  },
  {
    name: 'Термальный источник',
    temp: '+40 °C',
    size: '6 × 4 м · глубина 1,2 м',
    desc: 'Горячая купель с насыщенной минералами водой. Прогревает тело и снимает напряжение после парной.',
    features: ['Минеральная вода', 'Каменные лежаки', 'Аромапар'],
  },
  {
    name: 'Купель бодрости',
    temp: '+8 °C',
    size: '3 × 3 м · глубина 1,5 м',
    desc: 'Холодная купель для контрастных процедур. Тонизирует, укрепляет сосуды и дарит прилив энергии.',
    features: ['Ледяная вода', 'Ступени с подогревом', 'Поручни'],
  },
  {
    name: 'Детская чаша',
    temp: '+32 °C',
    size: '5 × 3 м · глубина 0,6 м',
    desc: 'Безопасный тёплый бассейн для маленьких гостей с игровыми фонтанами и мягким дном.',
    features: ['Тёплая вода', 'Фонтаны', 'Мягкое покрытие'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-40 pb-24 grain overflow-hidden">
        <div className="container relative z-10">
          <p className="animate-fade-up text-gold uppercase tracking-luxe text-xs mb-5">Услуги</p>
          <h1 className="animate-fade-up font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl" style={{ animationDelay: '0.15s' }}>
            Бассейны <span className="gold-gradient">Аврора</span>
          </h1>
          <p className="animate-fade-up text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Пять водных пространств с разной температурой — от ледяной купели до тёплой лагуны.
            Создайте собственный ритуал восстановления.
          </p>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="container">
        <div className="relative h-[50vh] overflow-hidden border border-border/60">
          <img src={POOL} alt="Бассейн комплекса" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </section>

      {/* POOLS */}
      <section className="grain py-28">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-gold uppercase tracking-luxe text-xs mb-4">Наличие и описание</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Температура, размеры и особенности каждой чаши
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {pools.map((p) => (
              <article
                key={p.name}
                className="border border-border/60 bg-card/40 p-10 hover:border-gold/60 transition-colors group"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display text-3xl">{p.name}</h3>
                  <span className="font-display text-3xl text-gold whitespace-nowrap">{p.temp}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
                  <Icon name="Ruler" size={16} className="text-gold" />
                  {p.size}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-7">{p.desc}</p>

                <ul className="flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs uppercase tracking-[0.12em] px-4 py-2 border border-border/60 text-foreground/80"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container py-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: 'Droplets', t: 'Чистота воды', d: 'Многоступенчатая система фильтрации и озонирования — без запаха хлора.' },
            { icon: 'ThermometerSun', t: 'Контроль температуры', d: 'Автоматика поддерживает точные значения круглые сутки.' },
            { icon: 'ShieldCheck', t: 'Безопасность', d: 'Пологие входы, поручни и постоянный присмотр персонала.' },
          ].map((i) => (
            <div key={i.t} className="flex gap-4">
              <Icon name={i.icon} size={28} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-2xl mb-2">{i.t}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grain py-28 text-center">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Готовы окунуться в тепло?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Забронируйте визит и мы подготовим бассейны и парные к вашему приходу.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground uppercase tracking-[0.15em] text-sm hover:bg-gold-soft transition-colors"
          >
            Забронировать <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Services;
