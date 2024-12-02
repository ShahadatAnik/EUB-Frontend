export type INewsPortal = {
  uuid: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  cover_image: string;
  published_date: string;
  documents: [];
};

export type ITopNavLink = {
  title: string;
  href: string;
};

export type INavLink = {
  title: string;
  href?: string;
  children?: INavLink[];
};
