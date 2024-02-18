import Logo from "./logo.jsx";

export default function Footer() {
	return (
		<footer className="bg-primary text-primary-foreground">
			<div className="container py-6 flex justify-between items-center">
				<Logo />

				<div className="text-right font-semibold space-y-2">
					<p>@ 2019 - 2023 Personal</p>
					<p>Made in Figma</p>
				</div>
			</div>
		</footer>
	)
}