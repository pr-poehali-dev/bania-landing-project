import { useState } from 'react';
import Icon from '@/components/ui/icon';

const links = [
  { href: '#saunas', label: 'Сауны' },
  { href: '#banyas', label: 'Бани' },
  { href: '#hammams', label: 'Хаммамы' },
  { href: '#works', label: 'Наши работы' },
  { href: '#contact', label: 'Контакты' },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container flex items-center justify-between h-20">
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
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Правый угол */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://saunbas.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            Также строим бассейны
            <Icon
              name="ArrowRight"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Мобильная кнопка */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://saunbas.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Также строим бассейны
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
