'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Calendar } from '@/components/ui/calendar';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { programs, bloodGroups } from '../_const/data';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  semester: z.string().min(1, { message: 'Semester is required' }),
  program: z.string().min(1, { message: 'Program is required' }),
  applicant_name: z.string().min(1, { message: 'Applicant name is required' }),
  fathers_name: z.string().min(1, { message: 'Fathers name is required' }),
  mothers_name: z.string().min(1, { message: 'Mothers name is required' }),
  local_guardian: z.string().min(1, { message: 'Local guardian is required' }),
  gender: z.string().min(1, { message: 'Gender is required' }),
  marital_status: z.string().min(1, { message: 'Marital status is required' }),
  date_of_birth: z.date(),
  present_address: z.string(),
  permanent_address: z.object({
    village: z.string().min(1, { message: 'Village is required' }),
    post_office: z.string().min(1, { message: 'Post office is required' }),
    thana: z.string().min(1, { message: 'Thana is required' }),
    district: z.string().min(1, { message: 'District is required' }),
  }),
  nationality: z.string().min(1, { message: 'Nationality is required' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  bkash: z.string().min(1, { message: 'Bkash number is required' }),
  blood_group: z.string().min(1, { message: 'Blood group is required' }),
  secondary_education: z.object({
    board: z.string().min(1, { message: 'Board is required' }),
    group: z.string().min(1, { message: 'Group is required' }),
    passing_year: z.string().min(1, { message: 'Passing year is required' }),
    grade: z.string().min(1, { message: 'Grade is required' }),
    gpa: z.string().min(1, { message: 'GPA is required' }),
    institution: z.string().min(1, { message: 'Institution is required' }),
  }),
  higher_education: z.object({
    board: z.string().min(1, { message: 'Board is required' }),
    group: z.string().min(1, { message: 'Group is required' }),
    passing_year: z.string().min(1, { message: 'Passing year is required' }),
    grade: z.string().min(1, { message: 'Grade is required' }),
    gpa: z.string().min(1, { message: 'GPA is required' }),
    institution: z.string().min(1, { message: 'Institution is required' }),
  }),

  bachelor_degree: z.object({
    name: z.string(),
    cgpa: z.string(),
    passing_year: z.string(),
    institution_name: z.string(),
  }),
});

const ApplicationForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='semester'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Proposed Semester*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='spring' />
                    </FormControl>
                    <FormLabel className='font-normal'>Spring</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='summer' />
                    </FormControl>
                    <FormLabel className='font-normal'>Summer</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='fall' />
                    </FormControl>
                    <FormLabel className='font-normal'>Fall</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='program'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a program' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program.value} value={program.value}>
                      {program.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='applicant_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Applicant Name (As in SSC Certificate)*</FormLabel>
              <FormControl>
                <Input placeholder='Applicant Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='fathers_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Father&apos;s Name*</FormLabel>
              <FormControl>
                <Input placeholder='Father Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='mothers_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mother&apos;s Name*</FormLabel>
              <FormControl>
                <Input placeholder='Mother Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='local_guardian'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Local/Legal Guardian*</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Gender*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex space-x-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='male' />
                    </FormControl>
                    <FormLabel className='font-normal'>Male</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='female' />
                    </FormControl>
                    <FormLabel className='font-normal'>Female</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='others' />
                    </FormControl>
                    <FormLabel className='font-normal'>Others</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='marital_status'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Marital Status*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex space-x-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='single' />
                    </FormControl>
                    <FormLabel className='font-normal'>Single</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='married' />
                    </FormControl>
                    <FormLabel className='font-normal'>Married</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='divorced' />
                    </FormControl>
                    <FormLabel className='font-normal'>Divorced</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='date_of_birth'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='present_address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Present Address</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder='write your present address here'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='permanent_address.village'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Village*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='permanent_address.post_office'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Office*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='permanent_address.thana'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thana*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='permanent_address.district'
          render={({ field }) => (
            <FormItem>
              <FormLabel>District*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='nationality'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationality*</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Phone Number*</FormLabel>
              <FormControl>
                <Input type={'tel'} {...field} />
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
              <FormLabel>Email Address*</FormLabel>
              <FormControl>
                <Input type={'tel'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bkash'
          render={({ field }) => (
            <FormItem>
              <FormLabel>BKash Number*</FormLabel>
              <FormControl>
                <Input type={'tel'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='blood_group'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blood Group*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {bloodGroups.map((blood) => (
                    <SelectItem key={blood.value} value={blood.value}>
                      {blood.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='p-6 bg-accent'>
          <h6 className='text-lg font-semibold border-b pb-2 '>
            Secondary Education Background
          </h6>
        </div>

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default ApplicationForm;
