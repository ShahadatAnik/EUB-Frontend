'use server';

import { secret } from '@/config/secret';

import getDateTime from '@/lib/getDateTime';
import nanoid from '@/lib/nanoid';

import { IContactForm } from '@/app/(top-navbar)/contact-us/_const/contact-form-schema';

export async function createContactForm(data: IContactForm) {
  const res = await fetch(`${secret.apiBaseUrl}/portfolio/contact-us`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      created_at: getDateTime(),
      uuid: nanoid(),
    }),
  });

  return await res.json();
}
