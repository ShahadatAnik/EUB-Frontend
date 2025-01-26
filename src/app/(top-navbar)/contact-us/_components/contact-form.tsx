'use client';

import React from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  fullname: z.string().min(1, { message: 'Full name is required' }),
  email: z.string().email(),
  query: z.string().min(1, { message: 'Query is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      email: '',
      query: '',
      description: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <h4 className='text-2xl font-semibold mb-2 '>
        Please use the following form to contact the department/person.
      </h4>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='john.doe@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='query'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Query / Question</FormLabel>
                <FormControl>
                  <Input placeholder='Mention your query here..' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief description of your question</FormLabel>
                <FormControl>
                  <Textarea rows={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className='w-full' type='submit'>
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
