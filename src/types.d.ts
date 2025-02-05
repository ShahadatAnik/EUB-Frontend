export type INewsPortal = {
	id: number;
	uuid: string;
	title: string;
	subtitle: string;
	description: string | null;
	content: string;
	cover_image: string;
	published_date: string;
	created_at: string;
	updated_at: string;
	created_by: string;
	remarks: string | null;
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
	uuid: string;
	title: string;
	program_uuid: string;
	program_name: string;
	category: string;
	admission_fee: string;
	tuition_fee_per_credit: string;
	student_activity_fee: string;
	library_fee_per_semester: string;
	computer_lab_fee_per_semester: string;
	science_lab_fee_per_semester?: string;
	studio_lab_fee?: string;
	created_at: string;
	updated_at: string | null;
	created_by: string;
	remarks: string | null;
};

export type ICertificateFee = {
	id: number;
	uuid: string;
	programs_uuid: string;
	program_name: string;
	fee_per_course: string;
	created_at: string;
	updated_at: string | null;
	created_by: string;
	remarks: string | null;
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

export type IDepartmentTeacher = {
	uuid: string;
	department_uuid: string;
	department_name: string;
	teacher_uuid: string;
	teacher_name: string;
	teacher_designation: string;
	department_head: boolean;
	teacher_email: string;
	teacher_phone: string;
	teacher_image: string;
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
	title: string;
	category: string;
	image: string;
	created_at: Date;
	created_by: string;
	remarks: null;
	updated_at: null;
};
export type IOfficeEntry = {
	id: string;
	uuid: string;
	user_name: string;
	user_designation: string;
	user_phone: string;
	user_email: string;
	category: string;
	image: string;
	created_at: Date;
	created_by: string;
	remarks: null;
	updated_at: null;
};
export type IOfficeDummy = {
	title: string;
	href: string;
	image: string;
	content: string | React.ReactNode;
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

export type IPrograms = {
	uuid: string;
	user_name: string;
	title: string;
	image: string;
	created_at: Date;
	created_by: string;
	remarks: null;
	updated_at: null;
};
