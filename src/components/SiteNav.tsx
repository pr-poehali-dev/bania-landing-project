import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
];

const SiteNav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold/60">
            <Icon name="Flame" size={18} className="text-gold" />
          </span>
          <span className="font-display text-2xl tracking-wide">
            Термы <span className="text-gold">Аврора</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                pathname === l.to ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 border border-gold/70 text-gold text-sm uppercase tracking-[0.15em] hover:bg-gold hover:text-primary-foreground transition-all"
          >
            Забронировать
          </a>
        </nav>

        <button className="md:hidden text-gold" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-[0.2em] ${
                pathname === l.to ? 'text-gold' : 'text-muted-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-gold text-sm uppercase tracking-[0.2em]">
            Забронировать
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
