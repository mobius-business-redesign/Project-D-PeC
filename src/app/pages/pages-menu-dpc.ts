import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MONTHLY',
    group: true,
  },
    {
      link: '/pages/safety',
      title: 'Safety',
      icon: 'nb-danger',
    },
    {
      title: 'People',
      icon: 'nb-person',
    },
    {
      title: 'Quality',
      icon: 'nb-checkmark',
    },
    {
      title: 'Delivery',
      icon: 'nb-home',
    },
    {
      title: 'Cost',
      icon: 'nb-bar-chart',
    },
    {
      title: 'Environment',
      icon: 'nb-partlysunny',
    }
];
