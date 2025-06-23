'use server';

import axios, { AxiosHeaderValue } from 'axios';

import { secret } from './secret';

export const createApi = ({ contentType }: { contentType: AxiosHeaderValue }) => {
	const api = axios.create({
		baseURL: secret.apiBaseUrl,
		headers: { 'Content-Type': contentType },
	});

	return api;
};

export const api = createApi({ contentType: 'application/json' });
export const image_api = createApi({ contentType: 'multipart/form-data' });
