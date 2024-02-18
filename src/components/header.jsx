import {useState} from "preact/hooks";
import { ArrowDownTrayIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Logo from "./logo.jsx";
import { Button } from "./ui/button.jsx";

const links = [
	{label: 'About Me', href: '#about-me'},
	{label: 'Skills', href: '#skills'},
	{label: 'Projects', href: '#projects'},
	{label: 'Contact Me', href: '#contact'},
]

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className="container px-4 lg:px-4">
			<div className="flex items-center justify-between py-3 md:py-0">
				<Logo />

				<ul className="hidden lg:flex gap-2 items-center">
					{links.map((link, index) => (
						<li key={index}>
							<a href={link.href}
							   className="text-primary font-semibold px-2 py-3 transition-colors hover:text-primary-hover"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<div>
					<Button className="hidden lg:flex">
						Resume
						<ArrowDownTrayIcon className="size-5"/>
					</Button>

					<Button size="icon" variant="ghost" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<span className="sr-only">Open mobile menu</span>
						<Bars3Icon className="size-5"/>
					</Button>
				</div>
			</div>

			{isMenuOpen && <MobileMenu />}
		</nav>
	)
}

function MobileMenu() {
	return (
		<ul className="p-2 rounded-md border border-zinc-400">
			{links.map((link, index) => (
				<li key={index}>
					<a href={link.href}
					   className="block w-full text-primary font-semibold px-2 py-3 transition-colors hover:text-primary-hover"
					>
						{link.label}
					</a>
				</li>
			))}
			<li>
				<Button className="w-full">
					Resume
					<ArrowDownTrayIcon className="size-5"/>
				</Button>
			</li>
		</ul>
	)
}