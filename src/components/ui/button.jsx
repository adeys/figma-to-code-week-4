import { classed } from "@tw-classed/react";

/** @type FunctionComponent */
const Button = classed(
	"button",
	"flex gap-2 items-center justify-center font-medium rounded transition-colors",
	{
		variants: {
			variant: {
				solid: "bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-hover-foreground active:bg-primary-active active:text-primary-active-foreground",
				outline: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground active:bg-primary-hover active:text-primary-hover-foreground",
			},
			size: {
				sm: "px-3 py-1.5 text-sm",
				md: "px-4 py-2 text-base",
				lg: "px-5 py-3 text-lg",
				icon: "p-2",
			},
		},
		defaultVariants: {
			variant: "solid",
			size: "md",
		}
	}
)

export { Button };