import Icon from '@/components/ui/icon';

const woods = [
  {
    name: 'Канадский кедр',
    desc: 'Природный антисептик, не гниёт, не выделяет смолу при нагреве, узнаваемый аромат. Стандарт для финской сауны.',
  },
  {
    name: 'Абаш (африканский дуб)',
    desc: 'Лидер по теплоёмкости, не обжигает кожу даже при 100°C. Наш стандарт для лежаков и полок во всех типах парных.',
  },
  {
    name: 'Ольха',
    desc: 'Благородный тёмно-розовый оттенок, устойчива к влаге и температурным перепадам, не темнеет со временем. Классика премиальной русской бани.',
  },
  {
    name: 'Термоольха',
    desc: 'Ольха, прошедшая термообработку при 180–220°C: древесина становится плотнее, полностью стабильна к влажности и не деформируется, приобретает глубокий шоколадный оттенок.',
  },
  {
    name: 'Доска кело',
    desc: 'Реликтовая карельская сосна, десятилетиями выстоявшая в северном климате без коры. Уникальная текстура, максимальная прочность, премиальный внешний вид.',
  },
];

const hammam = [
  { name: 'Турецкий мрамор', desc: 'Натуральный камень с нулевым водопоглощением' },
  { name: 'Смальтовая мозаика', desc: 'Ручная работа, не теряет цвет при постоянной влажности' },
  { name: 'Керамогранит 20 мм', desc: 'Антискользящий, класс R11, безопасность прежде всего' },
];

const Materials = () => {
  return (
    <section id="materials" className="py-20 md:py-28 bg-secondary/40 grain">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-semibold text-3xl md:text-4xl mb-4">
            Материалы, которые служат десятилетиями
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы не экономим на том, что скрыто за обшивкой
          </p>
        </div>

        {/* Древесина */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-wood-alder/15">
              <Icon name="TreePine" size={22} className="text-wood-alder" />
            </span>
            <h3 className="font-semibold text-2xl">
              Древесина для парной — только премиальный сегмент
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {woods.map((w) => (
              <div key={w.name} className="rounded-2xl bg-card border border-border p-7">
                <span className="block h-1 w-10 rounded-full bg-wood-cedar mb-5" />
                <h4 className="font-semibold text-xl mb-3">{w.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Акцент: без липы */}
        <div className="rounded-2xl bg-wood-alder/10 border border-wood-alder/30 p-7 md:p-9 mb-20">
          <div className="flex gap-4">
            <span className="text-2xl shrink-0">🌲</span>
            <div>
              <p className="font-semibold text-lg md:text-xl mb-2">
                Мы принципиально не используем липу и бюджетные хвойные породы.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Липа быстро темнеет, боится влаги и требует частой обработки. Мы работаем только с
                породами, которые доказали долговечность в промышленных банных проектах: абаш, ольха,
                термоольха, канадский кедр и доска кело.
              </p>
            </div>
          </div>
        </div>

        {/* Отделка хаммама */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-wood-marble/20">
              <Icon name="Gem" size={22} className="text-stone" />
            </span>
            <h3 className="font-semibold text-2xl">Отделка для хаммама</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {hammam.map((h) => (
              <div key={h.name} className="rounded-2xl bg-card border border-border p-7">
                <span className="block h-1 w-10 rounded-full bg-wood-marble mb-5" />
                <h4 className="font-semibold text-xl mb-3">{h.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Акцент: водяной обогрев */}
        <div className="rounded-2xl bg-pool/10 border border-pool/30 p-7 md:p-9">
          <div className="flex gap-4">
            <span className="text-2xl shrink-0">💧</span>
            <div>
              <p className="font-semibold text-lg md:text-xl mb-2">
                Водяной обогрев в хаммаме — наш стандарт, а не опция
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Горячая вода циркулирует по жаропрочным трубам внутри стен, лежаков и пола.
                Равномерный прогрев без открытых нагревательных элементов. Нет риска ожогов. Нет
                перепадов температуры. Так строят правильные хаммамы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
