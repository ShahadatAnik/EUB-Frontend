export type IPageItem = {
	title: string;
	href?: string;
	items?: IPageItem[];
	redirect?: boolean;
};
