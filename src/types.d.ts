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
  newTab?: boolean;
};

export type INavLink = {
  title: string;
  href?: string;
  className?: string;
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

export type IDepartmentContact = {
  title: string;
  emails?: string[];
  extensions?: string[];
  phones?: string[];
};

export type IEmployee = {
  name: string;
  designation: string;
  email: string;
  image: string;
  phone: string;
};

export type INotice = {
  title: string;
  description: string;
  date: string;
};

export type IGallery = {
  title: string;
  description: string;
  banner_image: string;
  attachments: string[];
};
export type IAcademicAccordion = {
  title: string;
  href?: string;
  content?: React.ReactNode | string;
  children?: IAccordion[];
};

export type IFacultyMember = {
  name: string;
  designation: string;
  image: string;
  mobile: string;
  email: string;
  publication: string[];
  department: string;
};

export type ICourse = {
  code: string;
  title: string;
  credit: string;
};

export type ISemesterCourse = {
  code: string;
  course_name: string;
  contact_hours_theory: string;
  contact_hours_sessional: string;
  credit: string;
  prerequisite: string;
};
