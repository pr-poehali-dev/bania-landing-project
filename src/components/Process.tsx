const steps = [
  {
    title: 'Замер и консультация',
    text: 'Бесплатно, выезжаем на объект. Оцениваем условия, грунт, коммуникации.',
  },
  {
    title: 'Техническое задание',
    text: 'Фиксируем все пожелания: тип парной, материалы, бюджет, срок.',
  },
  {
    title: 'Проект и смета',
    text: 'Полный комплект: планировка, разрезы, спецификация материалов, стоимость до копейки.',
  },
  {
    title: 'Договор',
    text: 'Прописываем сроки, этапы, ответственность. Без устных договорённостей.',
  },
  {
    title: 'Строительство',
    text: 'Собственная бригада, без субподряда. Еженедельные фотоотчёты.',
  },
  {
    title: 'Монтаж оборудования',
    text: 'Печи, парогенераторы, автоматика, освещение, вентиляция.',
  },
  {
    title: 'Сдача с гарантией',
    text: 'Подписываем акт приёмки, выдаём гарантийный талон на 5 лет. Обучаем пользованию оборудованием.',
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/40 grain">
      <div className="container max-w-4xl">
        <h2 className="font-semibold text-3xl md:text-4xl text-center mb-16">
          Как мы работаем: <span className="text-primary">от идеи до первого пара</span>
        </h2>

        <div className="relative">
          {/* Вертикальная линия */}
          <span className="absolute left-6 top-2 bottom-2 w-px bg-border md:left-7" />

          <div className="space-y-8">
            {steps.map((s, idx) => (
              <div key={s.title} className="relative flex gap-5 md:gap-7">
                <span className="relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-primary text-primary-foreground font-bold text-lg md:text-xl">
                  {idx + 1}
                </span>
                <div className="pt-1 md:pt-2">
                  <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-card border border-border p-7 md:p-8 text-center">
          <p className="text-lg leading-relaxed">
            Средний срок строительства бани:{' '}
            <span className="font-semibold text-primary">45–90 дней</span>. Хаммам «под ключ»:{' '}
            <span className="font-semibold text-primary">60–120 дней</span> в зависимости от площади
            и отделки.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
