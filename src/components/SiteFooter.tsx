import Icon from '@/components/ui/icon';

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-card/40 grain">
      <div className="container py-20 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold/60">
              <Icon name="Flame" size={18} className="text-gold" />
            </span>
            <span className="font-display text-2xl">Термы Аврора</span>
          </div>
          <p className="text-muted-foreground max-w-xs leading-relaxed">
            Пространство тишины, пара и воды. Место, где время замедляется.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-5">Контакты</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <Icon name="MapPin" size={18} className="text-gold" /> Москва, ул. Тихая, 12
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Phone" size={18} className="text-gold" /> +7 (495) 000-00-00
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Clock" size={18} className="text-gold" /> Ежедневно, 10:00 — 24:00
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-5">Мы в сети</h4>
          <div className="flex gap-4">
            {['Instagram', 'Send', 'Youtube'].map((n) => (
              <a
                key={n}
                href="#"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
              >
                <Icon name={n} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Термы Аврора. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;