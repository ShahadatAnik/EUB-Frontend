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
import {
  defaultContactForm,
  IContactForm,
  formSchema,
} from '../_const/contact-form-schema';
import { useMutation } from '@tanstack/react-query';
import { createContactForm } from '@/server/post';
import { toast } from 'sonner';

const ContactForm = () => {
  const mutation = useMutation({
    mutationKey: ['contact-form'],
    mutationFn: createContactForm,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultContactForm,
  });

  async function onSubmit(values: IContactForm) {
    try {
      const res = await mutation.mutateAsync(values);
      console.log({
        res,
      });
      form.reset(defaultContactForm);
      toast.success('Form submitted successfully');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <Form {...form}>
      <h4 className='text-lg lg:text-2xl font-semibold mb-2 '>
        Please use the following form to contact the department/person.
      </h4>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='space-y-4'>
          <FormField
            control={form.control}
            name='full_name'
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
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder='01XXX...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='question'
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
