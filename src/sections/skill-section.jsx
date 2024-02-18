import {
	GitIcon,
	JavascriptIcon,
	NestJSIcon,
	NodeJSIcon,
	ReactIcon,
	SassIcon, SocketIOIcon,
	StorybookIcon, TailwindIcon, TypescriptIcon
} from "../components/skill-icons.jsx";

const skills = [
	{ name: 'Git', icon: GitIcon },
	{ name: 'Javascript', icon: JavascriptIcon, adaptIcon: true },
	{ name: 'Sass/Scss', icon: SassIcon },
	{ name: 'Nest.JS', icon: NestJSIcon },
	{ name: 'Storybook', icon: StorybookIcon, adaptIcon: true },
	{ name: 'Node JS', icon: NodeJSIcon },
	{ name: 'React', icon: ReactIcon },
	{ name: 'Socket IO', icon: SocketIOIcon },
	{ name: 'Tailwind CSS', icon: TailwindIcon },
	{ name: 'Typescript', icon: TypescriptIcon, adaptIcon: true},
]

export default function SkillSection() {
	return (
		<section className="container py-16" id="skills">
			<h2 className="text-3xl lg:text-5xl mb-5 text-center py-5">My <strong>Skills</strong></h2>

			<div className="py-5 grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{skills.map(({name, icon: SkillIcon, adaptIcon}, index) => (
					<div key={index} className="flex flex-col size-48 gap-8 items-center justify-self-center cursor-pointer group justify-center border-2 border-primary rounded p-6 hover:bg-primary hover:text-primary-foreground">
						<SkillIcon className="size-14" invertBackground={adaptIcon} />
						<p className="font-semibold ">{name}</p>
					</div>
				))}
			</div>
		</section>
	);
}