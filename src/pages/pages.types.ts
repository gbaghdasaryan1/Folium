export type Page = {
	path: string;
	getUrl: (value: any) => string;
};

export type PageConfig = {
	[key: string]: Page;
};
