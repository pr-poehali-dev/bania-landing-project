import Icon from '@/components/ui/icon';

const links = [
  { href: '#saunas', label: 'Сауны' },
  { href: '#banyas', label: 'Бани' },
  { href: '#hammams', label: 'Хаммамы' },
  { href: '#works', label: 'Наши работы' },
  { href: '#contact', label: 'Контакты' },
];

const SiteNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 md:h-20 md:py-0">
        {/* Логотип */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display font-bold text-2xl tracking-tight text-foreground">
            SAUN<span className="text-primary">BAS</span>
          </span>
          <span className="text-[11px] text-faint mt-1 font-normal">
            Строим с 2008 года · 18 лет на Дальнем Востоке
          </span>
        </a>

        {/* Навигация */}
        <nav className="flex flex-nowrap items-center justify-center gap-x-6 order-3 w-full overflow-x-auto md:order-none md:w-auto md:flex-1 md:mx-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Правый угол */}
        <a
          href="https://saunbas.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg bg-pool px-4 py-2.5 text-sm font-medium text-white hover:bg-pool-hover transition-colors whitespace-nowrap shrink-0"
        >
          Строим бассейны
          <Icon
            name="ArrowRight"
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </header>
  );
};

export default SiteNav;