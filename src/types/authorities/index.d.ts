export type IAuthoritiesChairman = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesChancellor = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesDean = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesDirectorCoordination = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesProVC = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesRegistrar = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesTreasurer = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type IAuthoritiesVC = {
	personal_info: {
		name: string;
		title: string;
		profile_image: string;
	};
	education: string[];
	contact: {
		email: string;
		phone: string;
	};
	short_biography: string;
};
export type Member = {
	id: number;
	name: string;
	designation: string;
};

export type IMemberData = {
	chairperson: Member;
	member: Member[];
};
