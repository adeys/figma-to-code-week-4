import { Input } from "../components/ui/input.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { Button } from "../components/ui/button.jsx";
import {socialLinks} from "../components/social-icons.jsx";

export default function ContactSection() {
	return (
		<section className="container py-16">
			<div className="lg:py-5 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
				<div class="grow">
					<form action="#" className="space-y-3">
						<Input type="text" placeholder="Your name" ariaLabel="Your name" required />
						<Input type="email" placeholder="Email" ariaLabel="Eemail" required />
						<Input type="url" name="website-url" placeholder="Your website (if exists)" />
						<Textarea rows={5} placeholder="How can I help ?" ariaLabel="How can I help ?" required />
						<div className="flex flex-wrap w-full gap-6 items-center">
							<Button size="lg">Get In Touch</Button>

							<div className="flex gap-4 justify-between">
								{socialLinks.map(({ icon: SocialIcon, ...social }, index) => (
									<Button key={index} type="button" size="icon" variant="outline" className="p-3">
										<SocialIcon className="size-6" title={`${social.name} Icon`} />
										<span className="sr-only">{social.name} profile link</span>
									</Button>
								))}
							</div>
						</div>
					</form>
				</div>

				<div class="grow space-y-8">
					<h2 className="text-3xl lg:text-6xl font-bold">
						Let’s
						<span className="sr-only">talk</span>

						<svg xmlns="http://www.w3.org/2000/svg" width="120px" height="75px" className="hidden lg:inline-block mx-2" aria-hidden={true}>
							<text x={5} y={52} fontWeight={700} fontSize={54} className="fill-primary-foreground stroke-primary"
							      style={{paintOrder: 'stroke', strokeWidth: 6}}>
								talk
							</text>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="62px" height="38px" className="inline-block mx-2 lg:hidden" aria-hidden={true}>
							<text x={5} y={26} fontWeight={700} fontSize={28} className="fill-primary-foreground stroke-primary"
							      style={{paintOrder: 'stroke', strokeWidth: 3}}>
								talk
							</text>
						</svg>

						<span>
							for Something special
						</span>
					</h2>
					<p className="text-neutral">
						I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive
						experiences.
					</p>

					<div className="text-2xl font-bold space-y-3">
						<a href="mailto:raphalg@duck.com" className="block">raphalg@duck.com</a>
						<a href="tel:+123456789" className="block">(+1) 23 45 67 89</a>
					</div>
				</div>
			</div>
		</section>
	)
}