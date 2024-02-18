import {clsx} from "clsx";

import testimonialMaleSrc from '../assets/images/testimonial-evren.png'
import testimonialFemaleSrc from '../assets/images/testimonial-flora.png'

const testimonialData = [
	{ user: 'Evren Shah', avatar: testimonialMaleSrc },
	{ user: 'Flora Sheen', avatar: testimonialFemaleSrc },
	{ user: 'Evren Shah', avatar: testimonialMaleSrc },
]

export default function TestimonialSection() {
	return (
		<section className="container py-16">
			<h2 className="text-3xl lg:text-5xl  mb-5 text-center py-5">My <strong>Testimonial</strong></h2>

			<div className="lg:py-5 px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
				{testimonialData.map((testimonial, index) => (
					<div key={index} className={clsx('rounded-xl shadow-lg p-10 flex flex-col items-center gap-6', {'bg-primary text-primary-foreground': index % 2 !== 0})}>
						<img src={testimonial.avatar}
						     alt="Testimonial user"
						     className="rounded-[50%] border border-primary"
						     width={96} height={96} />
						<p className={clsx("max-w-64 text-center  text-sm", {'text-neutral': index % 0 === 0})}>
							I recently had to jump on 10+ different calls across eight different countries to find the right owner.
						</p>
						<hr className="text-primary w-1/3 border border-neutral" />
						<p className="font-bold">{testimonial.user}</p>
						<p className={clsx(
							"text-sm",
							{
								'text-primary-foreground': index % 2 !== 0,
								'text-neutral': index % 2 === 0
							}
							)}>
							Designer
						</p>
					</div>
				))}
			</div>
		</section>
	)
}