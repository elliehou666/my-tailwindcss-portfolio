import {useSingleProjectContext} from '../../context/SingleProjectContext';

const ProjectInfo = ({projectId}) => {
	const { findProjectById } = useSingleProjectContext();
	const targetProject = findProjectById(projectId);

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{targetProject.ProjectInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{targetProject.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										<a
											href={info.title === 'Website'? info.details : null}
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>
											{info.details}
										</a>
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				{/* <div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{targetProject.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{targetProject.ProjectInfo.ObjectivesDetails}
					</p>
				</div> */}

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{targetProject.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{targetProject.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>

				{/* Single project social sharing */}
				{/* <div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{targetProject.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{targetProject.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div> */}
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				{targetProject.ProjectInfo.Demo && targetProject.ProjectInfo.Demo.trim() !== '' && (
    				<>
     				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
        				Demo Video
     				</p>
      				<p className="font-general-regular text-ternary-dark dark:text-ternary-light text-lg mb-7 hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300">
        				<a
          					href={targetProject.ProjectInfo.Demo}
          					className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
        				>
          					{targetProject.ProjectInfo.Demo}
        				</a>
     				</p>
    				</>
  				)}
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{targetProject.ProjectInfo.ProjectDetailsHeading}
				</p>
				{targetProject.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
