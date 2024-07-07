import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, projectId, path }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={path} aria-label="Single Project">
				<div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 hover:shadow-xl">
					<div className="group-hover:bg-black opacity-70 w-full h-full absolute z-40 transition-all duration-300"></div>
					<div className="bg-gray-50">
						<img
							src={image}
							className="group-hover:scale-125 transition-all duration-500 rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="absolute bottom-full left-12 right-12 group-hover:bottom-24 transition-all duration-500 z-50">
						<span className="font-general-medium text-lg md:text-xl text-ternary-light mb-2">
							{title}
						</span>
					</div>
					<div className="absolute bottom-full left-12 right-12 group-hover:bottom-14 transition-all duration-700 z-50">
						<span className="text-lg text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
