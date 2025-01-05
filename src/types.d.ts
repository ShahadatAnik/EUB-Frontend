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

export type IFooterSocialLink = {
  title: string;
  href: string;
  icon: string;
};

export type IFaculty = {
  name: string;
  designation: string;
  image: string;
  education: string[];
  achievements: string[];
  experiences: string[];
};

export type IAdmissionRequirement = {
  header: string;
  content: string | React.ReactNode;
};

export type IOffice = {
  title: string;
  href: string;
  image: string;
  content: string | React.ReactNode;
};

export type IAuthority = {
  title: string;
  href: string;
};
