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
  newTab?: boolean;
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

export type IFAQ = {
  question: string;
  answer: string | React.ReactNode;
};

export type ITuitionFee = {
  program: string;
  admission_fee: string;
  tuition_fee_per_credit: string;
  student_activities_fee: string;
  library_fee: string;
  computer_lab_fee: string;
  science_lab_fee?: string;
  studio_lab_fee?: string;
};

export type IClubAndSociety = {
  label: string;
  value: string;
  content?: React.ReactNode | string;
  clubs?: {
    title: string;
    content: React.ReactNode | string;
  }[];
};

export type IPublication = {
  title: string;
  content: string | React.ReactNode;
};

export type IDataTable = {
  uuid: string;
  description: string;
  page_name: string;
  file: string;
  created_at: Date;
  updated_at: Date;
  created_by: string;
  remarks: string;
};

export type IProgram = {
  category: string;
  created_at: Date;
  created_by: string;
  id: string;
  name: string;
  remarks: null;
  updated_at: null;
  uuid: string;
};

export type IOffice = {
  id: string;
  uuid: string;
  category: string;
  created_at: Date;
  created_by: string;
  remarks: null;
  updated_at: null;
};

export type ITender = {
  code: string;
  type: string;
  title: string;
  published_date: string;
  pdf: string;
};
export type IPolicy = {
  name: string;
  department: string;
  published_date: string;
  pdf: string;
};

export type ICareer = {
  title: string;
  faculty: string;
  category: string;
  location: string;
  deadline: string;
  pdf: string;
};
