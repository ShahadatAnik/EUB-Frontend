import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const ClientPdfLink: React.FC<{
  text: string;
  href: string;
  className?: string;
  baseUrl?: string;
}> = ({
  text,
  href,
  className,
  baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL,
}) => {
  return (
    <Link
      target='_blank'
      href={`${baseUrl}${href}`}
      className={cn('text-primary underline', className)}
    >
      {text}
    </Link>
  );
};

export default ClientPdfLink;
