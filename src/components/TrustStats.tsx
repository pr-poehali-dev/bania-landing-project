import Icon from '@/components/ui/icon';

const stats = [
  { num: '18 лет', label: 'На рынке Дальнего Востока с 2008 года' },
  { num: '40+', label: 'Реализованных проектов бань и парных' },
  { num: 'до 5 лет', label: 'Гарантия на оборудование' },
];

const TrustStats = () => {
  return (
    <section className="py-20 md:py-28 bg-background grain">
      <div className="container">
        <h2 className="font-semibold text-3xl md:text-4xl text-center mb-14">
          Почему <span className="text-primary">SAUNBAS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl bg-card border border-border p-7 text-center"
            >
              <div className="font-bold text-4xl md:text-5xl text-primary mb-3">{s.num}</div>
              <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed mt-12">
          Мы та же команда, что строит бассейны под брендом SAUNBAS. Один подрядчик — баня, бассейн
          и хаммам в едином проекте. Один договор. Одна гарантия.
        </p>

        <div className="text-center mt-10">
          <a
            href="#calc"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-5 text-lg font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Рассчитать мой проект
            <Icon
              name="ArrowRight"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;