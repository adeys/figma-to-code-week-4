import heroPictureSrc from '../assets/images/hero-picture.png';
import {Button} from "../components/ui/button.jsx";
import { socialLinks } from "../components/social-icons.jsx";

export default function HeroSection() {
	return (
		<section className="container py-10 lg:py-16">
			<div className="flex gap-12 flex-col md:flex-row-reverse lg:items-end">
				<div className="flex-1">
					<img src={heroPictureSrc} alt="A picture of me" className="rounded-lg w-full" />
				</div>

				<div className="flex-1">
					<h1 className="text-3xl lg:text-6xl mb-3 lg:mb-5">Hello, I'm <strong>Evren Shah.</strong></h1>
					<div className="text-3xl lg:text-6xl space-y-3 lg:space-y-5">
						<p className="font-bold">
							<span>Frontend</span>{' '}
							<span className="sr-only">Developer</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="325px" height="75px" className="hidden lg:inline" aria-hidden={true}>
								<text x={0} y={52} fontWeight={700} fontSize={54} className="fill-primary-foreground stroke-primary"
								      style={{paintOrder: 'stroke', strokeWidth: 6}}>
									Developer
								</text>
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="175px" height="38px" className="inline lg:hidden" aria-hidden={true}>
								<text x={0} y={26} fontWeight={700} fontSize={26} className="fill-primary-foreground stroke-primary"
								      style={{paintOrder: 'stroke', strokeWidth: 3}}>
									Developer
								</text>
							</svg>
						</p>

						<p>
							Based in <span className="font-bold">India.</span>
						</p>
					</div>

					<p className="mt-8 text-neutral text-lg">
						I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
						been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to specimen book.
					</p>

					<div className="mt-8 lg:mt-20 flex gap-8">
						{socialLinks.map(({ icon: SocialIcon, ...social }, index) => (
							<Button key={index} size="icon" variant="outline" className="p-4">
								<SocialIcon className="size-6" title={`${social.name} Icon`} />
								<span className="sr-only">{social.name} profile link</span>
							</Button>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}