'use client';

import { DevTool } from '@hookform/devtools';
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

import {
  bloodGroups,
  educationBoards,
  grades,
  secondaryEducationTypes,
  higherEducationTypes,
} from '../_const/data';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { usePrograms } from '../_const/query';
import { formSchema, defaultAdmissionForm } from '../_const/schema';
import { useMutation } from '@tanstack/react-query';
import { createAdmissionForm } from '@/server/post';
import { toast } from 'sonner';

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
      console.log({
        res,
      });
      form.reset(defaultAdmissionForm);
      toast.success('Form submitted successfully');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
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
                    <FormItem className='flex items-center space-x-2 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='spring' />
                      </FormControl>
                      <FormLabel className='font-normal'>Spring</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-2 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='summer' />
                      </FormControl>
                      <FormLabel className='font-normal'>Summer</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-2 space-y-0'>
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

          <div className='border rounded-md overflow-hidden'>
            <h6 className='text-lg font-semibold border-b px-6 py-3 bg-primary text-white'>
              Personal Information
            </h6>

            <div className='space-y-6 p-6'>
              <div className='grid grid-cols-3 gap-4'>
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
                                'w-full pl-3 text-left font-normal ',
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
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Male' />
                          </FormControl>
                          <FormLabel className='font-normal'>Male</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Female' />
                          </FormControl>
                          <FormLabel className='font-normal'>Female</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Other' />
                          </FormControl>
                          <FormLabel className='font-normal'>Other</FormLabel>
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
                        className='flex space-x-2'
                      >
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Single' />
                          </FormControl>
                          <FormLabel className='font-normal'>Single</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Married' />
                          </FormControl>
                          <FormLabel className='font-normal'>Married</FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Divorced' />
                          </FormControl>
                          <FormLabel className='font-normal'>
                            Divorced
                          </FormLabel>
                        </FormItem>
                        <FormItem className='flex items-center space-x-2 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='Widowed' />
                          </FormControl>
                          <FormLabel className='font-normal'>Widowed</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='border rounded-md overflow-hidden'>
            <h6 className='text-lg font-semibold border-b px-6 py-3 bg-primary text-white'>
              Address
            </h6>

            <div className='space-y-4 p-6'>
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

              <div className='grid grid-cols-2 gap-4'>
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
          <div className='border rounded-md overflow-hidden'>
            <h6 className='text-lg font-semibold border-b px-6 py-3 bg-primary text-white'>
              Secondary Education Background
            </h6>

            <div className='space-y-4 p-6'>
              <div className='grid grid-cols-3 gap-4'>
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
                          {secondaryEducationTypes.map((program) => (
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
                          {grades.map((grade) => (
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
              <div className='grid grid-cols-3 gap-4'>
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
                          {educationBoards.map((board) => (
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
          <div className='border rounded-md overflow-hidden'>
            <h6 className='text-lg font-semibold border-b px-6 py-3 bg-primary text-white'>
              Higher Secondary Education Background
            </h6>

            <div className='space-y-4 p-6'>
              <div className='grid grid-cols-3 gap-4'>
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
                          {higherEducationTypes.map((program) => (
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
                          {grades.map((grade) => (
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
              <div className='grid grid-cols-3 gap-4'>
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
                          {educationBoards.map((board) => (
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
          <div className='border rounded-md overflow-hidden'>
            <h6 className='text-lg font-semibold border-b px-6 py-3 bg-primary text-white'>
              Bachelor Degree (Graduation)
            </h6>

            <div className='space-y-4 p-6'>
              <div className='grid grid-cols-2 gap-4'>
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
                  name='bsc_institution_name'
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

      <DevTool control={form.control} />
    </>
  );
};

export default ApplicationForm;
