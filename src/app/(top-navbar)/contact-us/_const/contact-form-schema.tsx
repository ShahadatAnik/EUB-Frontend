import { z } from 'zod';

export const formSchema = z.object({
  full_name: z.string().min(1, { message: 'Full name is required' }),
  email: z.string().email(),
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
