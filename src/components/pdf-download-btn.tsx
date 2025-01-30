import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const PdfDownloadButton: React.FC<{ pdf: string }> = ({ pdf }) => {
  return pdf ? (
    <Link href={pdf}>
      <Button variant={'outline'} size={'icon'} className='w-full'>
        <Download />
      </Button>
    </Link>
  ) : (
    'Not available'
  );
};

export default PdfDownloadButton;
