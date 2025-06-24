'use client';

import React from 'react';

import { Viewer, Worker } from '@react-pdf-viewer/core';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfReader = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
      <div
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '750px',
        }}
      >
        <Viewer
          plugins={[defaultLayoutPluginInstance]}
          fileUrl='/pdf/test.pdf'
        />
      </div>
    </Worker>
  );
};

export default PdfReader;
