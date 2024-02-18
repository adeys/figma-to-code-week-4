import appleLogoSrc from '../assets/images/logos/apple.svg'
import googleLogoSrc from '../assets/images/logos/google.svg'
import youtubeLogoSrc from '../assets/images/logos/youtube.svg'

const experiences = [
	{
		title: 'Lead Software Engineer at Google',
		company: {
			name: 'Google',
			logo: googleLogoSrc,
		},
		period: 'Nov 2019 - Present',
		description: 'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google\'s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.'
	},
	{
		title: 'Software Engineer at Youtube',
		company: {
			name: 'Google',
			logo: youtubeLogoSrc
		},
		period: 'Jan 2017 - Oct 2019',
		description: 'At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant\'s dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.'
	},
	{
		title: 'Software Developer at Apple',
		company: {
			name: 'Apple',
			logo: appleLogoSrc
		},
		period: 'Jan 2015 - Dec 2016',
		description: 'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.'
	}
]

export default function ExperienceSection() {
	return (
		<section className="bg-primary text-primary-foreground py-16" id="experience">
			<div class="container">
				<h2 className="text-3xl lg:text-5xl mb-5 text-center py-5">My <strong>Experience</strong></h2>

				<div className="lg:py-10 lg:px-6 space-y-8">
					{experiences.map((experience, index) => (
						<div key={index} className="rounded-lg px-6 py-8 border cursor-pointer border-neutral hover:bg-neutral">
							<div className="flex gap-4 items-center justify-between flex-wrap">
								<div className="flex items-center lg:items-start gap-6">
									<img src={experience.company.logo} alt={`${experience.company.name} Logo`} width={32} height={32}/>
									<h3 className="text-2xl lg:text-3xl font-semibold">{experience.title}</h3>
								</div>

								<p className="text-zinc-300 font-medium">
									{experience.period}
								</p>
							</div>

							<p className="mt-5 text-zinc-300 lg:text-lg">{experience.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}