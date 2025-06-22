import { z } from 'zod';

export const formSchema = z.object({
	full_name: z.string().min(1, { message: 'Full name is required' }),
	email: z.string().email(),
	phone: z
		.string()
		.min(1, { message: 'Phone number is required' })
		.regex(/^(\+8801|01|\+880-1)[0-9\-+]{6,15}$/, 'Invalid Phone Number'),
	question: z.string().min(1, { message: 'Query is required' }),
	description: z.string().min(1, { message: 'Description is required' }),
});

export const defaultContactForm: Partial<IContactForm> = {
	full_name: '',
	email: '',
	question: '',
	description: '',
};

export type IContactForm = z.infer<typeof formSchema>;
