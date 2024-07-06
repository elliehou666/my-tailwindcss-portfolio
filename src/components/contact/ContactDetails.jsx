import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import profileImage from '../../images/typing.svg';

const contacts = [
	// {
	// 	id: 1,
	// 	name: 'Your Address, Your City, Your Country',
	// 	icon: <FiMapPin />,
	// },
	{
		id: 2,
		name: 'suuuuperfrankie@gmail.com',
		icon: <FiMail />,
	},
	// {
	// 	id: 3,
	// 	name: '555 8888 888',
	// 	icon: <FiPhone />,
	// },
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="w-1/3 mb-7 sm:mb-0 flex justify-center items-center">
      			<img src={profileImage} className="rounded-lg w-96" alt="" />
   			</div>
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact Details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
