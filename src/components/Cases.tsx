const cases = [
  {
    img: 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/6e13fcd0-5714-4226-8c76-807b2dae22e3.jpg',
    object: 'Финская сауна 14 м², канадский кедр, электрическая печь Harvia',
    before: 'Старый сруб, протекала крыша, гнилые полки',
    after: 'Новая сауна под ключ за 68 дней',
    budget: '1 850 000 ₽',
    quote: 'Строили как для себя. Даже мелочи — крючки, подсветка, полочки — всё продумано',
  },
  {
    img: 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/ef4c218d-dc87-4e37-aacb-e35fd70e026e.jpg',
    object: 'Турецкий хаммам 22 м², мозаика, мрамор, водяной обогрев',
    before: 'Пустое помещение в доме',
    after: 'Полноценный хаммам с парогенератором, автоматикой и мраморными лежаками',
    budget: '4 200 000 ₽',
    quote:
      'Думал, хаммам — это сложно и страшно. Ребята объяснили каждый этап. Теперь это любимое место дома',
  },
  {
    img: 'https://cdn.poehali.dev/projects/9556729e-930f-4ad1-9975-51ff620c6db1/files/b908a59e-32b7-4b8a-802a-92aaea2a1a73.jpg',
    object:
      'Банный комплекс — русская баня + купель + зона отдыха, 38 м², отделка термоольхой и доской кело, дровяная печь',
    before: 'Пустой участок',
    after: 'Отдельное здание с купелью и террасой',
    budget: '3 600 000 ₽',
    quote:
      'Та же команда строила нам бассейн 3 года назад. Доверие абсолютное — снова обратились к SAUNBAS',
  },
];

const Cases = () => {
  return (
    <section id="works" className="py-20 md:py-28 bg-background grain">
      <div className="container">
        <h2 className="font-semibold text-3xl md:text-4xl text-center mb-14">
          Реальные проекты. <span className="text-primary">Реальные люди</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((c, idx) => (
            <article
              key={idx}
              className="flex flex-col rounded-2xl overflow-hidden bg-card border border-border"
            >
              <div className="h-52 overflow-hidden">
                <img src={c.img} alt={c.object} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col flex-1 p-7">
                <p className="font-medium text-foreground leading-snug mb-5">{c.object}</p>

                <div className="space-y-3 mb-5">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Было
                    </span>
                    <p className="text-sm text-foreground/80">{c.before}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      Стало
                    </span>
                    <p className="text-sm text-foreground/90">{c.after}</p>
                  </div>
                </div>

                <div className="mb-5 pb-5 border-b border-border">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Бюджет
                  </span>
                  <p className="font-bold text-2xl text-primary">{c.budget}</p>
                </div>

                <blockquote className="text-muted-foreground italic leading-relaxed mt-auto">
                  «{c.quote}»
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
