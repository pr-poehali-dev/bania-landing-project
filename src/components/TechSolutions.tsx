const items = [
  {
    emoji: '🔒',
    category: 'Безопасность хаммама',
    title: 'Водяной обогрев вместо электрического',
    text: 'При влажности 100% электрические нагреватели открытого типа — зона риска. Мы монтируем систему водяного лучистого тепла: трубы в стяжке, в лежаках, в стенах. Парогенератор в отдельном техпомещении, форсунки — не дальше 5 метров. Температура и давление под контролем автоматики.',
  },
  {
    emoji: '🌡️',
    category: 'Климат-контроль',
    title: 'Правильная вентиляция — основа долговечности',
    text: 'Баня без вентиляции — это плесень, угар и разрушение конструкции через 3–5 лет. Мы проектируем приточно-вытяжную систему под каждый тип парной: кратность воздухообмена, положение каналов, связка с печью или парогенератором.',
  },
  {
    emoji: '🏗️',
    category: 'Пароизоляция',
    title: 'Скрытый слой, который решает всё',
    text: 'Используем фольгированные мембраны и современные пароизоляционные плёнки. Крепление без зазоров, с термостойкой лентой на стыках. Именно этот этап большинство бригад делают «на глазок» — и именно здесь начинается разрушение бани через 2–3 года.',
  },
  {
    emoji: '🪵',
    category: 'Выбор древесины',
    title: 'Дерево — это не эстетика, а инженерия',
    text: 'Мы используем только термически обработанную и премиальную древесину: абаш для лежаков (не накапливает тепло), ольху и термоольху для стен (стабильны к влажности), канадский кедр для сауны (антисептик), доску кело для акцентных решений. Никакой липы и бюджетных пород — они не держат температурные циклы бани дольше 3–4 лет.',
  },
];

const TechSolutions = () => {
  return (
    <section className="py-20 md:py-28 bg-background grain">
      <div className="container">
        <h2 className="font-semibold text-3xl md:text-4xl text-center max-w-2xl mx-auto mb-14">
          Технические решения, о которых другие молчат
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((i) => (
            <div
              key={i.category}
              className="rounded-2xl bg-card border border-border p-7 md:p-9 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-2xl shrink-0">
                  {i.emoji}
                </span>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  {i.category}
                </span>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl mb-3">{i.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSolutions;
