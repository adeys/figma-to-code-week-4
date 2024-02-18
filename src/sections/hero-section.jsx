import heroPictureSrc from '../assets/images/hero-picture.png';
import {Button} from "../components/ui/button.jsx";
import { socialLinks } from "../components/social-icons.jsx";

export default function HeroSection() {
	return (
		<section className="container py-16">
			<div className="flex gap-2 md:flex-row-reverse lg:items-end">
				<div className="flex-1">
					<img src={heroPictureSrc} alt="A picture of me" className="rounded-lg w-full" />
				</div>

				<div className="flex-1">
					<h1 className="text-4xl lg:text-6xl mb-5">Hello, I'm <strong>Evren Shah.</strong></h1>
					<div className="text-4xl lg:text-6xl space-y-5">
						<p>
							<span className="font-bold">Frontend</span> <span className="font-bold ">Developer</span> <br/>
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

					<div className="mt-20 flex gap-8">
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