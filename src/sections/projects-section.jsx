import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/solid/index.js";
import blogProjectPictureSrc from '../assets/images/project-blog.png'
import cryptoProjectPictureSrc from '../assets/images/project-crypto.png'
import euphoriaProjectPictureSrc from '../assets/images/project-euphoria.png'

const projects = [
	{
		name: 'Crypto Screener Application',
		description: 'I\'m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.',
		picture: cryptoProjectPictureSrc
	},
	{
		name: 'Euphoria - Ecommerce (Apparels) Website Template',
		description: 'I\'m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.\n' +
			'when an unknown printer took a galley of type and scrambled it to specimen book.',
		picture: euphoriaProjectPictureSrc
	},
	{
		name: 'Blog Website Template',
		description: 'I\'m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.',
		picture: blogProjectPictureSrc
	}
]

export default function ProjectSection() {
	return (
		<section className="bg-primary text-primary-foreground py-16" id="projects">
			<div class="container">
				<h2 className="text-3xl lg:text-5xl mb-5 text-center py-5">My <strong>Projects</strong></h2>

				<div className="lg:py-10 lg:px-6 lg:space-y-28">
					{projects.map((project, index) => (
						<article key={index} className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-16 justify-between items-center py-6">
							<div className="flex-1 rounded-lg overflow-hidden">
								<img src={project.picture} alt={`${project.name} Picture`} className="h-auto lg:h-[400px] w-full object-cover object-center hover:scale-110 cursor-pointer duration-500" />
							</div>

							<div className="flex-1 space-y-6 lg:space-y-8">
								<div className="text-3xl lg:text-5xl font-bold">{index < 9 ? `0${index + 1}` : index}</div>
								<h3 className="text-2xl lg:text-4xl font-bold transition-colors hover:text-zinc-300">
									<a href="#">{project.name}</a>
								</h3>
								<p className="text-zinc-400">{project.description}</p>

								<a href="#" className="block text-primary-foreground hover:text-zinc-300 transition-colors">
									<span className="sr-only">Open link</span>
									<ArrowTopRightOnSquareIcon className="size-6 lg:size-8"  />
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}