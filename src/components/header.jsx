import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Logo from "./logo.jsx";
import { Button } from "./ui/button.jsx";

const links = [
	{label: 'About Me', href: '#about-me'},
	{label: 'Skills', href: '#skills'},
	{label: 'Projects', href: '#projects'},
	{label: 'Contact Me', href: '#contact'},
]

export default function Header() {
	return (
		<header className="container flex items-center justify-between py-3 px-4 lg:px-4">
			<Logo />

			<nav className="flex gap-2 items-center">
				{links.map((link, index) => (
					<a key={index} href={link.href} className="text-primary font-semibold px-2 py-3 transition-colors hover:text-primary-hover">{link.label}</a>
				))}
			</nav>

			<Button>
				Resume
				<ArrowDownTrayIcon className="size-5" />
			</Button>
		</header>
	)
}