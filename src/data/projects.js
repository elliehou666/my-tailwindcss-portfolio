// Import images
import GPI1 from '../images/projectCover/fintech.svg';
import FinDao1 from '../images/projectCover/socialWeb.svg';
import FinDao2 from '../images/projectCover/socialApp.svg';
import FinDao3 from '../images/projectCover/bitcoinMining.svg';
import FinDao4 from '../images/projectCover/cryptoWallet.svg';

export const projectsData = [
	{
		id: 1,
		title: 'InvestGPI: A FinTech Platform',
		category: 'Web Application',
		img: GPI1,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		path: "/projects/gpi",
		projectId: 'GPI',
	},
	{
		id: 2,
		title: 'FinDao Community: Social Media & Blockchain Applications',
		category: 'Web Application',
		img: FinDao1,
		path: "/projects/findaopro",
		projectId: 'Findao',
	},
	{
		id: 3,
		title: 'FinDao Mobile APP',
		category: 'Mobile Application',
		img: FinDao2,
		path: "/projects/findaoapp",
		projectId: 'FindaoApp',
	},
	{
		id: 4,
		title: 'BTC Mining App',
		category: 'Blockchain',
		img: FinDao3,
		path: "/projects/mining",
		projectId: 'MiningApp',
	},
	{
		id: 5,
		title: 'FinDao Exchange: Crypto Trading Platform',
		category: 'Web Application',
		img: FinDao4,
		path: "/projects/exchange",
		projectId: 'FindaoExchange',
	},
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: WebImage1,
	// },
];
