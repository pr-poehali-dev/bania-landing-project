import Icon from '@/components/ui/icon';

const SiteFooter = () => {
  return (
    <footer id="footer" className="border-t border-border bg-secondary/40 grain">
      <div className="container py-16 md:py-20 grid gap-12 md:grid-cols-3">
        {/* Колонка 1 — Офисы */}
        <div>
          <h4 className="font-semibold text-lg mb-5">Офисы</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Icon name="MapPin" size={18} className="text-primary shrink-0 mt-0.5" />
              <span>Владивосток, ул. [адрес офиса]</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="MapPin" size={18} className="text-primary shrink-0 mt-0.5" />
              <span>Находка, ул. Пограничная 118</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Phone" size={18} className="text-primary shrink-0" />
              <a href="tel:+7" className="hover:text-primary transition-colors">
                +7 (xxx) xxx-xx-xx
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Mail" size={18} className="text-primary shrink-0" />
              <a href="mailto:info@saunbas.ru" className="hover:text-primary transition-colors">
                info@saunbas.ru
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Clock" size={18} className="text-primary shrink-0 mt-0.5" />
              <span>Пн–Пт: 9:00–19:00, Сб: 10:00–16:00</span>
            </li>
          </ul>
        </div>

        {/* Колонка 2 — Мессенджеры */}
        <div>
          <h4 className="font-semibold text-lg mb-5">Мессенджеры</h4>
          <div className="space-y-3">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-primary transition-colors"
            >
              <Icon name="MessageCircle" size={20} className="text-primary" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-primary transition-colors"
            >
              <Icon name="Send" size={20} className="text-primary" />
              <span className="font-medium">Telegram</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Отвечаем в течение 15 минут в рабочее время
          </p>
        </div>

        {/* Колонка 3 — Также строим */}
        <div>
          <h4 className="font-semibold text-lg mb-5">Также строим</h4>
          <div className="rounded-2xl border border-pool/30 bg-pool/5 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🏊</span>
              <span className="font-semibold text-lg">Бассейны под ключ</span>
            </div>
            <p className="text-muted-foreground mb-5">
              Та же команда. Тот же уровень качества.
            </p>
            <a
              href="https://saunbas.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-pool px-4 py-2.5 text-sm font-medium text-white hover:bg-pool-hover transition-colors"
            >
              Перейти на saunbas.ru
              <Icon
                name="ArrowRight"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span className="font-display font-bold text-xl text-foreground">
            SAUN<span className="text-primary">BAS</span>
          </span>
          <span>© {new Date().getFullYear()} SAUNBAS. Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
