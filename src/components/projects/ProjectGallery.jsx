import {useSingleProjectContext} from '../../context/SingleProjectContext';

const ProjectGallery = ({projectId}) => {
	const { findProjectById } = useSingleProjectContext();
	const targetProject = findProjectById(projectId);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{targetProject.ProjectImages.map((project) => {
				return (
					<div className="group mb-10 sm:mb-0 " key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none group-hover:scale-200 transition-all duration-500 rounded-t-xl border-none"
							alt={project.title}
							key={project.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
