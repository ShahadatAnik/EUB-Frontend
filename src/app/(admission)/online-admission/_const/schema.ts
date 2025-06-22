import {
	EnumBloodGroup,
	EnumGender,
	EnumHscBoard,
	EnumHscGrade,
	EnumHscGroup,
	EnumMartialStatus,
	EnumSemester,
	EnumSscBoard,
	EnumSscGrade,
	EnumSscGroup,
} from '@/types/enum';

import { z } from 'zod';

export const formSchema = z
	.object({
		year: z.number().min(1, { message: 'Year is required' }),
		semester: z.nativeEnum(EnumSemester, {
			message: 'Select a semester',
		}),
		program_uuid: z.string().min(1, { message: 'Program is required' }),
		religion: z.string().min(1, { message: 'Religion is required' }),
		applicant_name: z
			.string()
			.min(5, { message: 'Applicant name is required' }),
		father_name: z.string().min(5, { message: 'Fathers name is required' }),
		mother_name: z.string().min(5, { message: 'Mothers name is required' }),
		local_guardian: z
			.string()
			.min(5, { message: 'Local guardian is required' }),
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
		phone_number: z
			.string()
			.min(1, { message: 'Phone number is required' })
			.regex(
				/^(\+8801|01|\+880-1)[0-9\-+]{6,15}$/,
				'Invalid Phone Number'
			),
		parents_phone: z
			.string()
			.min(1, { message: 'Parents Phone number is required' })
			.regex(
				/^(\+8801|01|\+880-1)[0-9\-+]{6,15}$/,
				'Invalid Phone Number'
			),
		local_guardian_phone: z
			.string()
			.min(1, { message: 'Parents Phone number is required' })
			.regex(
				/^(\+8801|01|\+880-1)[0-9\-+]{6,15}$/,
				'Invalid Phone Number'
			),
		email: z.string().min(1, { message: 'Email is required' }),
		bkash: z
			.string()
			.min(11, { message: 'Bkash number is required' })
			.regex(
				/^(\+8801|01|\+880-1)[0-9\-+]{6,15}$/,
				'Invalid Bkash Number'
			),
		blood_group: z.nativeEnum(EnumBloodGroup, {
			message: 'Select a blood group',
		}),

		ssc_group: z.nativeEnum(EnumSscGroup, {
			message: 'Select a group',
		}),
		ssc_grade: z.nativeEnum(EnumSscGrade, {
			message: 'Select a grade',
		}),
		ssc_gpa: z.preprocess(
			(val) => Number(val),
			z
				.number()
				.min(1, { message: 'Required' })
				.max(5, { message: 'GPA cannot be more than 5.00' })
		),
		ssc_board: z.nativeEnum(EnumSscBoard, {
			message: 'Select a board',
		}),
		ssc_passing_year: z
			.number()
			.min(4, { message: 'Passing year is required' }),
		ssc_institute: z
			.string()
			.min(1, { message: 'Institution is required' }),
		ssc_roll_number: z
			.string()
			.min(1, { message: 'SSC roll Number is required' })
			.regex(/^\d+$/, { message: 'SSC roll Number must be numeric' }),
		ssc_registration_number: z
			.string()
			.min(1, { message: 'SSC registration roll Number is required' })
			.regex(/^\d+$/, {
				message: 'SSC registration Number must be numeric',
			}),

		hsc_group: z.nativeEnum(EnumHscGroup, {
			message: 'Select a group',
		}),
		hsc_grade: z.nativeEnum(EnumHscGrade, {
			message: 'Select a grade',
		}),
		hsc_gpa: z.preprocess(
			(val) => Number(val),
			z
				.number()
				.min(1, { message: 'Required' })
				.max(5, { message: 'GPA cannot be more than 5.00' })
		),

		hsc_board: z.nativeEnum(EnumHscBoard, {
			message: 'Select a board',
		}),
		hsc_passing_year: z
			.number()
			.min(4, { message: 'Passing year is required' }),
		hsc_institute: z
			.string()
			.min(1, { message: 'Institution is required' }),
		hsc_roll_number: z
			.string()
			.min(1, { message: 'HSC roll Number is required' })
			.regex(/^\d+$/, { message: 'HSC roll Number must be numeric' }),
		hsc_registration_number: z
			.string()
			.min(1, { message: 'HSC registration number is required' })
			.regex(/^\d+$/, {
				message: 'HSC registration number must be numeric',
			}),

		bsc_name: z.string().optional(),
		bsc_cgpa: z.preprocess(
			(val) => Number(val),
			z
				.number()
				.min(1, { message: 'Required' })
				.max(5, { message: 'GPA cannot be more than 5.00' })
		),
		bsc_passing_year: z.number().optional(),
		bsc_institute: z.string().optional(),

		birth_certificate_number: z
			.string()
			.optional()
			.refine((val) => !val || /^\d+$/.test(val), {
				message: 'Birth Certificate Number must be numeric',
			}),

		nid_number: z
			.string()
			.optional()
			.refine((val) => !val || /^\d+$/.test(val), {
				message: 'NID Number must be numeric',
			}),
	})
	.superRefine((data, ctx) => {
		if (!data?.nid_number && !data?.birth_certificate_number) {
			ctx.addIssue({
				code: 'custom',
				message:
					'Either NID Number or Birth Certificate Number is required',
			});
		}
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

	ssc_gpa: 0,
	ssc_passing_year: 0,
	ssc_institute: '',
	ssc_roll_number: '',
	ssc_registration_number: '',

	hsc_gpa: 0,
	hsc_passing_year: 0,
	hsc_institute: '',
	hsc_roll_number: '',
	hsc_registration_number: '',

	birth_certificate_number: '',
	nid_number: '',
};
