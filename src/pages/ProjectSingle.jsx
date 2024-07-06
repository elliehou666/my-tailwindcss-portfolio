import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = ({projectId}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader 
					projectId={projectId}
				/>
				<ProjectGallery 
					projectId={projectId}
				/>
				<ProjectInfo 
					projectId={projectId}
				/>
				<ProjectRelatedProjects 
					projectId={projectId}
				/>
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
