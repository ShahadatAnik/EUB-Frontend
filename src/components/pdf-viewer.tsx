'use client';

import React, { useEffect, useRef, useState } from 'react';

const PdfViewer = () => {
	const [url, setUrl] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.addEventListener('change', () => {
				const file = inputRef?.current?.files?.[0];
				if (file) {
					const url = URL.createObjectURL(file);
					if (url === '') return;
					setUrl(url);
				}
			});
		}
	}, [inputRef]);
	return (
		<div>
			<input ref={inputRef} type='file' accept='application/pdf' />
			{url && <iframe src={url} frameBorder='0' width='100%' height='500px'></iframe>}
		</div>
	);
};

export default PdfViewer;
