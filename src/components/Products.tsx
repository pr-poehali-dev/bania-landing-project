import Icon from '@/components/ui/icon';

const products = [
  {
    id: 'saunas',
    img: 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/4fce21bf-6c9a-4997-bcad-4692100032fd.jpg',
    title: 'Финская сауна',
    desc: 'Сухой жар 80–110°C. Отделка канадским кедром или абашем. Электрическая или дровяная печь. Классика, проверенная веками.',
    accent: 'bg-wood-cedar',
    href: '#sauna-detail',
  },
  {
    id: 'banyas',
    img: 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/a8468b4f-9e73-4441-af94-0eabcc382f5f.jpg',
    title: 'Русская баня',
    desc: 'Влажный пар, мягкий жар до 60°C. Отделка ольхой, термоольхой или доской кело. Дровяная печь с открытой каменкой. Премиальный подход к традиционной бане.',
    accent: 'bg-wood-alder',
    href: '#banya-detail',
  },
  {
    id: 'hammams',
    img: 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/ebf9d608-3224-4fd9-bc37-f4de4032e554.jpg',
    title: 'Турецкий хаммам',
    desc: 'Влажный пар 100%. Мозаика и мрамор. Водяной обогрев — без электрических нагревателей открытого типа. Безопасно, равномерно, роскошно.',
    accent: 'bg-wood-marble',
    href: '#hammam-detail',
  },
];

const Products = () => {
  return (
    <section className="grain py-20 md:py-28 bg-background">
      <div className="container">
        <h2 className="font-semibold text-3xl md:text-4xl text-center mb-14">
          Выберите своё пространство для отдыха
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.id}
              href={p.href}
              className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute bottom-0 left-0 right-0 h-1.5 ${p.accent}`} />
              </div>

              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-semibold text-xl md:text-2xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary-hover">
                  Подробнее
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
