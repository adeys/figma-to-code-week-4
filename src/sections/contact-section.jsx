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
						Let’s talk for Something special
					</h2>
					<p className="text-neutral">
						I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
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