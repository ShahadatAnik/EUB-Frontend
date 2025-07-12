import { IPageItem } from '@/app/(programs)/_config/types';

export const pages: IPageItem[] = [
  {
    title: 'Overview',
    items: [
      {
        title: 'About Us',
        href: '/about-us',
      },
      {
        title: 'Message from the Chairman',
        href: '/message-from-the-chairman',
      },
    ],
  },
  {
    title: 'Laboratories & Resources',
    href: '/laboratories-and-resources',
  },
  {
    title: 'Faculty Members',
    href: '/faculty-members',
  },
  {
    title: 'Admission Information',
    href: '/admission-information',
    redirect: true,
  },
  {
    title: 'Financial Information',
    href: '/financial-information',
    redirect: true,
  },
  {
    title: 'Notices',
    href: '/notices',
  },
  {
    title: 'News & Events',
    href: '/news-and-events',
  },
  {
    title: 'Student Service Desk',
    href: '/student-service-desk',
  },
];
