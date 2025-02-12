'use server';

import { format } from 'date-fns';
import { secret } from '@/config/secret';
import { IAdmissionForm } from '@/app/(admission)/online-admission/_const/schema';
import nanoid from '@/lib/nanoid';
import getDateTime from '@/lib/getDateTime';

export async function createAdmissionForm(data: IAdmissionForm) {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/online-admission`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      date_of_birth: format(data.date_of_birth, 'yyyy-MM-dd'),
      created_at: getDateTime(),
      uuid: nanoid(),
    }),
  });

  return await res.json();
}
