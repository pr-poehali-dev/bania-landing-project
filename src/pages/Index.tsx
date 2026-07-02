import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const HERO = 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/18e455dc-b59a-461a-b2f8-67e087d77529.jpg';

const advantages = [
  { icon: 'Waves', title: 'Термальные бассейны', text: 'Вода разной температуры — от бодрящей купели до тёплой лагуны.' },
  { icon: 'Wind', title: 'Паровые комнаты', text: 'Аутентичная русская парная и мягкий хамам с эвкалиптом.' },
  { icon: 'Leaf', title: 'Травяные ритуалы', text: 'Веники, масла и настои по старинным рецептам.' },
  { icon: 'Wine', title: 'Приватные банкеты', text: 'Закрытые залы для отдыха в компании до 12 гостей.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Интерьер бани" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="container relative z-10">
          <p className="animate-fade-up text-gold uppercase tracking-luxe text-xs mb-6" style={{ animationDelay: '0.1s' }}>
            Премиальный банный комплекс
          </p>
          <h1
            className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-3xl mb-8"
            style={{ animationDelay: '0.25s' }}
          >
            Искусство <span className="gold-gradient">тепла</span> и воды
          </h1>
          <p
            className="animate-fade-up text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            style={{ animationDelay: '0.4s' }}
          >
            Уединённое пространство для истинного восстановления. Пар, термальные бассейны и тишина,
            созданные для тех, кто ценит роскошь простоты.
          </p>
          <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <a
              href="#contact"
              className="px-8 py-4 bg-gold text-primary-foreground uppercase tracking-[0.15em] text-sm hover:bg-gold-soft transition-colors"
            >
              Забронировать визит
            </a>
            <Link
              to="/services"
              className="px-8 py-4 border border-border text-foreground uppercase tracking-[0.15em] text-sm hover:border-gold hover:text-gold transition-colors"
            >
              Наши услуги
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce">
          <Icon name="ChevronDown" size={26} />
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="grain py-28">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-gold uppercase tracking-luxe text-xs mb-4">Атмосфера</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Каждая деталь подчинена одному — вашему покою
            </h2>
          </div>

          <div className="grid gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-4 border border-border/60">
            {advantages.map((a) => (
              <div key={a.title} className="bg-background p-10 group hover:bg-card transition-colors">
                <Icon name={a.icon} size={34} className="text-gold mb-6" />
                <h3 className="font-display text-2xl mb-3">{a.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container py-20 text-center">
          <Icon name="Quote" size={40} className="text-gold mx-auto mb-8 opacity-60" />
          <blockquote className="font-display text-3xl md:text-4xl leading-snug max-w-3xl mx-auto italic">
            «Настоящая роскошь — это возможность остановиться и просто дышать»
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="grain py-28">
        <div className="container grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-gold uppercase tracking-luxe text-xs mb-4">Приглашение</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Откройте для себя ритуал тепла
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Забронируйте приватный визит и позвольте нашим мастерам позаботиться о каждой минуте
              вашего отдыха.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground uppercase tracking-[0.15em] text-sm hover:bg-gold-soft transition-colors"
            >
              Оставить заявку <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { n: '12', t: 'лет опыта' },
              { n: '5', t: 'типов бассейнов' },
              { n: '24/7', t: 'приватность' },
            ].map((s) => (
              <div key={s.t} className="border border-border/60 p-8 text-center">
                <div className="font-display text-4xl md:text-5xl text-gold mb-2">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
