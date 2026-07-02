import Icon from '@/components/ui/icon';
import SiteNav from '@/components/SiteNav';
import Products from '@/components/Products';
import Materials from '@/components/Materials';
import TrustStats from '@/components/TrustStats';
import QuizBlock from '@/components/QuizBlock';
import ChecklistBlock from '@/components/ChecklistBlock';
import SiteFooter from '@/components/SiteFooter';

const HERO = 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/ea646fe0-a44f-4ad9-893d-5a90d42c8f42.jpg';

const trust = [
  'Работаем с 2008 года',
  '17+ лет опыта в Дальневосточном климате',
  'Гарантия до 5 лет',
];

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0">
          <img src={HERO} alt="Интерьер роскошной парной" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1
              className="animate-fade-up font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              Баня, сауна или хаммам <span className="text-primary">под ключ</span> — по всему Дальнему Востоку
            </h1>

            <p
              className="animate-fade-up text-lg text-muted-foreground max-w-2xl mb-9 leading-relaxed"
              style={{ animationDelay: '0.25s' }}
            >
              Проектируем и строим премиальные парные пространства: из абаша, ольхи, термоольхи,
              канадского кедра и доски кело, с водяным обогревом, с гарантией до 5 лет. Та же команда,
              что построила 140 бассейнов в регионе.
            </p>

            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#calc"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-primary px-8 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
              >
                <span className="text-xl">🔥</span> Рассчитать стоимость бесплатно
              </a>
            </div>

            {/* Trust-полоска */}
            <div
              className="animate-fade-up mt-8 flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-3"
              style={{ animationDelay: '0.55s' }}
            >
              {trust.map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="CircleCheck" size={18} className="text-success shrink-0" />
                  <span className="text-foreground/90">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Products />

      <QuizBlock />

      <ChecklistBlock />

      <TrustStats />

      <Materials />

      <SiteFooter />
    </div>
  );
};

export default Index;