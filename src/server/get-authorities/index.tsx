import { secret } from "@/config/secret";
import {
	IAuthoritiesChairman,
	IAuthoritiesChancellor,
	IAuthoritiesDean,
	IAuthoritiesDirectorCoordination,
	IAuthoritiesProVC,
	IAuthoritiesRegistrar,
	IAuthoritiesTreasurer,
	IAuthoritiesVC,
} from "@/types/authorities";
export const getAuthoritiesChancellor = async (): Promise<
	IAuthoritiesChancellor[]
> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=chancellor`
	);
	return await res.json();
};

export const getAuthoritiesChairman = async (): Promise<
	IAuthoritiesChairman[]
> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=chairman`
	);
	return await res.json();
};

export const getAuthoritiesVC = async (): Promise<IAuthoritiesVC[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=vc`
	);
	return await res.json();
};

export const getAuthoritiesProVC = async (): Promise<IAuthoritiesProVC[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=pro_vc`
	);
	return await res.json();
};

export const getAuthoritiesDean = async (): Promise<IAuthoritiesDean[]> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=dean`
	);
	return await res.json();
};

export const getAuthoritiesTreasurer = async (): Promise<
	IAuthoritiesTreasurer[]
> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=treasurer`
	);
	return await res.json();
};

export const getAuthoritiesDirectorCoordination = async (): Promise<
	IAuthoritiesDirectorCoordination[]
> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=director_coordination`
	);
	return await res.json();
};

export const getAuthoritiesRegistrar = async (): Promise<
	IAuthoritiesRegistrar[]
> => {
	const res = await fetch(
		`${secret.apiBaseUrl}/v1/portfolio/authorities?category=registrar`
	);
	return await res.json();
};
