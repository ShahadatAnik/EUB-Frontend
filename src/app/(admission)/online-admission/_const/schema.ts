import {
  EnumGender,
  EnumMartialStatus,
  EnumBloodGroup,
  EnumHscBoard,
  EnumHscGrade,
  EnumHscGroup,
  EnumSemester,
  EnumSscBoard,
  EnumSscGrade,
  EnumSscGroup,
} from '@/types/enum';

import { z } from 'zod';

export const formSchema = z.object({
  semester: z.nativeEnum(EnumSemester, {
    message: 'Select a semester',
  }),
  program_uuid: z.string().min(1, { message: 'Program is required' }),
  applicant_name: z.string().min(5, { message: 'Applicant name is required' }),
  father_name: z.string().min(5, { message: 'Fathers name is required' }),
  mother_name: z.string().min(5, { message: 'Mothers name is required' }),
  local_guardian: z.string().min(5, { message: 'Local guardian is required' }),
  gender: z.nativeEnum(EnumGender, {
    message: 'Select a gender',
  }),
  marital_status: z.nativeEnum(EnumMartialStatus, {
    message: 'Select a marital status',
  }),
  date_of_birth: z.date({
    message: 'Date of birth is required',
  }),
  present_address: z.string(),
  village: z.string().min(1, { message: 'Village is required' }),
  post_office: z.string().min(1, { message: 'Post office is required' }),
  thana: z.string().min(1, { message: 'Thana is required' }),
  district: z.string().min(1, { message: 'District is required' }),
  nationality: z.string().min(1, { message: 'Nationality is required' }),
  phone_number: z.string().min(11, { message: 'Phone number is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  bkash: z.string().min(1, { message: 'Bkash number is required' }),
  blood_group: z.nativeEnum(EnumBloodGroup, {
    message: 'Select a blood group',
  }),

  ssc_group: z.nativeEnum(EnumSscGroup, {
    message: 'Select a group',
  }),
  ssc_grade: z.nativeEnum(EnumSscGrade, {
    message: 'Select a grade',
  }),
  ssc_gpa: z.string().min(1, { message: 'GPA is required' }),
  ssc_board: z.nativeEnum(EnumSscBoard, {
    message: 'Select a board',
  }),
  ssc_passing_year: z.number().min(4, { message: 'Passing year is required' }),
  ssc_institute: z.string().min(1, { message: 'Institution is required' }),

  hsc_group: z.nativeEnum(EnumHscGroup, {
    message: 'Select a group',
  }),
  hsc_grade: z.nativeEnum(EnumHscGrade, {
    message: 'Select a grade',
  }),
  hsc_gpa: z.string().min(1, { message: 'GPA is required' }),
  hsc_board: z.nativeEnum(EnumHscBoard, {
    message: 'Select a board',
  }),
  hsc_passing_year: z.number().min(4, { message: 'Passing year is required' }),
  hsc_institute: z.string().min(1, { message: 'Institution is required' }),

  bsc_name: z.string().optional(),
  bsc_cgpa: z.string().optional(),
  bsc_passing_year: z.number().optional(),
  bsc_institution_name: z.string().optional(),
});

export type IAdmissionForm = z.infer<typeof formSchema>;

export const defaultAdmissionForm: Partial<IAdmissionForm> = {
  program_uuid: '',
  applicant_name: '',
  father_name: '',
  mother_name: '',
  local_guardian: '',
  date_of_birth: new Date(),
  present_address: '',
  village: '',
  post_office: '',
  thana: '',
  district: '',
  nationality: '',
  phone_number: '',
  email: '',
  bkash: '',

  ssc_gpa: '',
  ssc_passing_year: 0,
  ssc_institute: '',

  hsc_gpa: '',
  hsc_passing_year: 0,
  hsc_institute: '',
};
