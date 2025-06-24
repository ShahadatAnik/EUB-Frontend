'use client';

import {
  EnumBloodGroup,
  EnumGender,
  EnumHscBoard,
  EnumHscGrade,
  EnumHscGroup,
  EnumMartialStatus,
  EnumReligion,
  EnumSemester,
  EnumSscBoard,
  EnumSscGrade,
  EnumSscGroup,
} from '@/types/enum';
import enumToOptions from '@/utils/enumToOptions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { createAdmissionForm } from '@/server/post';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { cn } from '@/lib/utils';

import { usePrograms } from '../_const/query';
import { defaultAdmissionForm, formSchema } from '../_const/schema';

const ApplicationForm = () => {
  const mutation = useMutation({
    mutationKey: ['admission-form'],
    mutationFn: createAdmissionForm,
  });

  const { data: programs } = usePrograms();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultAdmissionForm,
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await mutation.mutateAsync(values);

      if (res.toastType === 'create') {
        toast.success('Form submitted successfully');
        // form.reset(defaultAdmissionForm);
      } else {
        toast.error('Failed to submit form');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 lg:space-y-6'
        >
          {' '}
          <FormField
            control={form.control}
            name='year'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year*</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Year'
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.valueAsNumber);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    className='flex gap-x-4'
                  >
                    {enumToOptions(EnumSemester).map((option, index) => (
                      <FormItem
                        key={index}
                        className='flex items-center space-x-2 space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={option.value} />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='program_uuid'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Program*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='capitalize'>
                      <SelectValue placeholder='Select a program' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {programs?.map((program, index) => (
                      <SelectItem
                        className='capitalize'
                        key={index}
                        value={program.uuid}
                      >
                        {program.name}
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
          <div className='overflow-hidden rounded-md border'>
            <h6 className='border-b bg-primary px-3 py-2 text-base font-semibold text-white lg:px-6 lg:py-3 lg:text-lg'>
              Personal Information
            </h6>

            <div className='space-y-6 px-3 py-2.5 lg:p-6'>
              <div className='grid grid-cols-1 gap-2.5 lg:grid-cols-3 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='father_name'
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
                  name='mother_name'
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
                  name='date_of_birth'
                  render={({ field }) => (
                    <FormItem>
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
                  name='blood_group'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blood Group*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumBloodGroup).map((blood) => (
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
                <FormField
                  control={form.control}
                  name='phone_number'
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
                  name='parents_phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parents Phone Number*</FormLabel>
                      <FormControl>
                        <Input type={'tel'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='local_guardian_phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Local Guardian Phone Number*</FormLabel>
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
                        <Input type={'email'} {...field} />
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
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='birth_certificate_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birth Certificate Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='nid_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NID Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='religion'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Religion*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select Your Religion' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumReligion).map((religion) => (
                            <SelectItem
                              key={religion.value}
                              value={religion.value}
                            >
                              {religion.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
                        className='flex space-x-2'
                      >
                        {enumToOptions(EnumGender).map((gender) => (
                          <FormItem
                            key={gender.value}
                            className='flex items-center space-x-2 space-y-0'
                          >
                            <FormControl>
                              <RadioGroupItem value={gender.value} />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {gender.label}
                            </FormLabel>
                          </FormItem>
                        ))}
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
                        className='flex flex-wrap gap-2'
                      >
                        {enumToOptions(EnumMartialStatus).map((item) => (
                          <FormItem
                            key={item.value}
                            className='flex items-center space-x-2 space-y-0'
                          >
                            <FormControl>
                              <RadioGroupItem value={item.value} />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='overflow-hidden rounded-md border'>
            <h6 className='border-b bg-primary px-3 py-2 text-base font-semibold text-white lg:px-6 lg:py-3 lg:text-lg'>
              Address
            </h6>

            <div className='space-y-2 px-3 py-2.5 lg:space-y-6 lg:p-6'>
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

              <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='village'
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
                  name='post_office'
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
                  name='thana'
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
                  name='district'
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
              </div>
            </div>
          </div>
          {/* SECONDARY EDUCATION BACKGROUND */}
          <div className='overflow-hidden rounded-md border'>
            <h6 className='border-b bg-primary px-3 py-2 text-base font-semibold text-white lg:px-6 lg:py-3 lg:text-lg'>
              Secondary Education Background
            </h6>

            <div className='space-y-2 px-3 py-2.5 lg:space-y-6 lg:p-6'>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='ssc_group'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Secondary Education Type*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a program' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumSscGroup).map((program) => (
                            <SelectItem
                              key={program.value}
                              value={program.value}
                            >
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
                  name='ssc_grade'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Secondary Education Grade*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a grade' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumSscGrade).map((grade) => (
                            <SelectItem key={grade.value} value={grade.value}>
                              {grade.label}
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
                  name='ssc_gpa'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Secondary Education GPA*</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='ssc_board'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Board*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a board' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumSscBoard).map((board) => (
                            <SelectItem key={board.value} value={board.value}>
                              {board.label}
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
                  name='ssc_passing_year'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passing Year*</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.valueAsNumber);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='ssc_roll_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='ssc_registration_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='ssc_institute'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education Institute Name*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          {/* HIGHER EDUCATION */}
          <div className='overflow-hidden rounded-md border'>
            <h6 className='border-b bg-primary px-3 py-2 text-base font-semibold text-white lg:px-6 lg:py-3 lg:text-lg'>
              Higher Secondary Education Background
            </h6>

            <div className='space-y-2 px-3 py-2.5 lg:space-y-6 lg:p-6'>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='hsc_group'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Higher Secondary Education Type*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a program' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumHscGroup).map((program) => (
                            <SelectItem
                              key={program.value}
                              value={program.value}
                            >
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
                  name='hsc_grade'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Higher Secondary Grade*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a grade' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumHscGrade).map((grade) => (
                            <SelectItem key={grade.value} value={grade.value}>
                              {grade.label}
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
                  name='hsc_gpa'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Higher Secondary Education/Diploma GPA/CGPA*
                      </FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='hsc_board'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Board*</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select a board' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {enumToOptions(EnumHscBoard).map((board) => (
                            <SelectItem key={board.value} value={board.value}>
                              {board.label}
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
                  name='hsc_passing_year'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passing Year*</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.valueAsNumber);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='hsc_roll_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='hsc_registration_number'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='hsc_institute'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education Institute Name*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          {/* BACHELOR DEGREE */}
          <div className='overflow-hidden rounded-md border'>
            <h6 className='border-b bg-primary px-3 py-2 text-base font-semibold text-white lg:px-6 lg:py-3 lg:text-lg'>
              Bachelor Degree (Graduation)
            </h6>

            <div className='space-y-2 px-3 py-2.5 lg:space-y-6 lg:p-6'>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4'>
                <FormField
                  control={form.control}
                  name='bsc_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='bsc_cgpa'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree CGPA/Division</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='bsc_passing_year'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passing Year</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.valueAsNumber);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='bsc_institute'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institute Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </Form>

      {/* <DevTool control={form.control} /> */}
    </>
  );
};

export default ApplicationForm;
