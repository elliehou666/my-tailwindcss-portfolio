// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/Projects/FinDao4.png';
import Image5 from '../images/Projects/FinDao2.png';
import Image6 from '../images/Projects/FinDao3.png';
// Import icons
// import {
// 	FiFacebook,
// 	FiInstagram,
// 	FiLinkedin,
// 	FiTwitter,
// 	FiYoutube,
// } from 'react-icons/fi';

export const singleProjectData = [
	{
		id: 'GPI',
		ProjectHeader: {
			title: 'InvestGPI: An Alternative Investment Platform',
			publishDate: 'May, 2024',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Image 1',
				img: Image1,
			},
			{
				id: 2,
				title: 'Image 2',
				img: Image2,
			},
			{
				id: 3,
				title: 'Image 3',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About',
			CompanyInfo: [
				{
					id: 1,
					title: 'Client',
					details: 'investGPI.com, INC.',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full-stack Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.investgpi.com/en',
				},
				// {
				// 	id: 4,
				// 	title: 'Phone',
				// 	details: '555 8888 888',
				// },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'TypeScript',
						'Vue.js',
						'TailwindCSS',
						'Spring Boot',
						'MySQL',
						'Redis',
						'AWS',
					],
				},
			],
			ProjectDetailsHeading: 'Summary',
			ProjectDetails: [
				{
					id: 1,
					details:
						`This alternative investment platform provides users with access to diverse investment opportunities, including real estate and art, through a visually appealing and intuitive interface. It offers mobile accessibility via applications, ensuring convenience and flexibility in managing investments on the go. Secure and efficient financial transactions instill confidence, while tools for tracking and managing portfolios provide real-time updates on performance. Personalized investment recommendations based on user preferences and financial objectives enhance the user experience and guide informed decision-making.`
				},	
				{
					id: 2,
					details:
						'Utilizing sophisticated algorithms and financial models implemented in languages such as Java. The backend, powered by Spring Boot, RabbitMQ, MySQL, Redis, and Elasticsearch, will manage secure and efficient data storage, retrieval, and communication between different components. The frontend, developed with TypeScript and Vue.js, and other technologies like TailwindCSS, HTML5, will offer an intuitive and visually appealing interface for users.',
				},
				{
					id: 3,
					details:
					'The frontend, developed with TypeScript and Vue.js, and other technologies like TailwindCSS, HTML5, will offer an intuitive and visually appealing interface for users.',
				},	
				{
					id: 4,
					details:
					'An internal admin web app, built on the same technological foundation as the investment platform, has been developed to ensure its smooth operation.',
				},	
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: 1,
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: 2,
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: 3,
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: 4,
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: 5,
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},
	{
		id: 'Findao',
		ProjectHeader: {
			title: 'FinDao Community: A Social & Blockchain Application',
			publishDate: 'March, 2023',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Image 1',
				img: Image4,
			},
			{
				id: 2,
				title: 'Image 2',
				img: Image5,
			},
			{
				id: 3,
				title: 'Image 3',
				img: Image6,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About',
			CompanyInfo: [
				{
					id: 1,
					title: 'Company',
					details: 'FinDao.com, INC.',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Full-stack Development, Blockchain Programing, Cloud Hashing Management',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://findao.com/en',
				},
				// {
				// 	id: 4,
				// 	title: 'Phone',
				// 	details: '555 8888 888',
				// },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'TypeScript',
						'Vue.js',
						'TailwindCSS',
						'Spring Boot',
						'MySQL',
						'Redis',
						'AWS',
						'Neo4J Graph Database',
						'Blockchain',
						'MyBatis',
						'RabbitMQ',
						'LLM',
						'Docker',
						'Kubernetes',
						'Solidity',
						'Web3.js',
						'Ethereum',
						'NFT',
						'BitcoinJ',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						`Findao is a decentralized autonomous organization (DAO) focusing on Web 3.0 assets, social networking, and blockchain investment. The Findao community is committed to enabling more people to enter the emerging blockchain investment field with lower barriers, sharing and learning blockchain knowledge through socializing, creating and knowledge sharing, and forming investment opportunities through community autonomy.`,
				},
				{
					id: 2,
					details:
						'At Findao community, users can stay informed with the latest blockchain news, freely share investment ideas via posting, and discover community-launched mining products. The platform features a custodial wallet based on MPC technology, providing bank-grade security standards. Findao fosters social networking focused on investment perspectives and offers innovative investment opportunities governed by community autonomy. Additionally, users can engage in asset tokenization and exchange crypto assets, making it a comprehensive hub for blockchain enthusiasts and investors.',
				},
				{
					id: 3,
					details:
					`The Findao community launched proof-of-contribution consensus mechanism allocating managerial rights and earning rights based on each member's contribution. Findao will issue FINDAO NFT (ERC721 token) and FINDAO (ERC20 token). A contribution certificate NFT will be granted to a community member who makes any contribution to Findao that is recognized by the community. Each FINDAO NFT has a BP value representing the contribution level. The NFT holder can stake the NFT into the Findao mining pool to mine FINDAO based his/her contribution share.`,
				},	
				// {
				// 	id: 4,
				// 	details:
				// 	'An internal admin web app, built on the same technological foundation as the investment platform, has been developed to ensure its smooth operation.',
				// },	
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},

]; 
