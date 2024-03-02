export interface MenuItem {
  href: string;
  title: string;
  disabled: boolean;
  color?: string;
  underline?: string;
}

export const menu: MenuItem[] = [
  {
    href: '/about',
    title: 'about',
    disabled: false,
    underline: 'plumber',
  },
  {
    href: '/donate',
    title: 'donate',
    disabled: false,
    underline: 'nature',
  },
];
