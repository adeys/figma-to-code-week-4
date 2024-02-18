import aboutMePicture from '../assets/images/about-me-picture.png'

export default function AboutSection() {
	return (
		<section className="container py-16" id="about-me">
			<div class="flex flex-col lg:flex-row items-center lg:items-start gap-4 px-8">
				<div className="flex-1 flex items-center">
					<img src={aboutMePicture} className="h-auto w-auto max-w-full" alt="About Me Illustration"/>
				</div>

				<div className="flex-1">
					<h2 className="text-5xl mb-5 py-5">About <strong>Me</strong></h2>

					<div className="space-y-6">
						<p>
							I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
						</p>
						<p>
							I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
						</p>
						<p>
							When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
						</p>
					</div>
				</div>
			</div>
		</section>
	);

}