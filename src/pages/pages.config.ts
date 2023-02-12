import { PageConfig } from './pages.types';

export const pagesConfig: PageConfig = {
	home: {
		path: '/',
		getUrl: () => '/'
	},
	salePage: {
		path: '/sale-page/:query',
		getUrl: (query: string) => `/sale-page/${query}`
	},
	productDetails: {
		path: '/product-details',
		getUrl: (id: string) => `/product-details/${id}`
	},
};
